/**
 * POLAR · Cluster marker rating — Google Apps Script backend
 * Used by https://yufe-polar.github.io/marqueurs-clusters/
 *
 * Setup:
 *  1. Create a new Google Sheet (e.g. "POLAR – marqueurs clusters votes").
 *  2. Extensions → Apps Script. Replace the default code with this file. Save.
 *  3. Deploy → New deployment → type "Web app".
 *       Execute as: Me
 *       Who has access: Anyone
 *  4. Authorize, then copy the Web app URL (ends with /exec) into ENDPOINT
 *     at the top of static/marqueurs-clusters/index.html.
 *
 * GET  → {ok:true, rows:[{voter, name, m, pol, op, c, t}]}   (all ratings, for live results)
 * POST → body {voter, name, ratings:[{m, cluster, lang, marker, pol, op, c}]}
 *        replaces every row of that voter with the ratings sent.
 *
 * Sheet "votes": one row per voter × marker, ready for analysis.
 */

const SHEET_NAME = 'votes';
const HEAD = ['voter_id', 'name', 'marker_id', 'cluster', 'lang', 'marker',
              'polemicite', 'operationnalite', 'comment', 'updated_at'];

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let s = ss.getSheetByName(SHEET_NAME);
  if (!s) {
    s = ss.insertSheet(SHEET_NAME);
    s.appendRow(HEAD);
    s.setFrozenRows(1);
  }
  return s;
}

function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}

// Stop spreadsheet formula injection from free-text fields.
function safeText_(v, max) {
  let s = String(v == null ? '' : v).slice(0, max);
  if (/^[=+\-@]/.test(s)) s = "'" + s;
  return s;
}

function score_(v) {
  if (v === '?') return '?';
  const n = Number(v);
  return (Number.isInteger(n) && n >= 1 && n <= 5) ? n : '';
}

function readScore_(v) {
  if (v === '?') return '?';
  if (v === '' || v == null) return null;
  const n = Number(v);
  return (n >= 1 && n <= 5) ? n : null;
}

function doGet() {
  const s = sheet_();
  const values = s.getDataRange().getValues();
  values.shift();
  const rows = values.filter(r => r[0]).map(r => ({
    voter: String(r[0]),
    name: String(r[1]).replace(/^'/, ''),
    m: String(r[2]),
    pol: readScore_(r[6]),
    op: readScore_(r[7]),
    c: String(r[8] || '').replace(/^'/, ''),
    t: r[9] instanceof Date ? r[9].toISOString() : String(r[9] || '')
  }));
  return json_({ ok: true, rows: rows });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
    const p = JSON.parse(e.postData.contents);
    const voter = String(p.voter || '');
    if (!/^[A-Za-z0-9-]{8,64}$/.test(voter)) return json_({ ok: false, error: 'bad voter id' });
    const name = safeText_(String(p.name || '').trim(), 80);
    if (!name) return json_({ ok: false, error: 'missing name' });
    const ratings = Array.isArray(p.ratings) ? p.ratings.slice(0, 200) : [];
    const now = new Date();

    const fresh = ratings
      .filter(r => r && /^C\d{2}-\d{1,2}$/.test(String(r.m)))
      .map(r => [voter, name, String(r.m), safeText_(r.cluster, 10), safeText_(r.lang, 4),
                 safeText_(r.marker, 120), score_(r.pol), score_(r.op),
                 safeText_(String(r.c || '').trim(), 500), now])
      .filter(r => r[6] !== '' || r[7] !== '' || r[8] !== '');

    const s = sheet_();
    const last = s.getLastRow();
    let kept = [];
    if (last > 1) {
      kept = s.getRange(2, 1, last - 1, HEAD.length).getValues().filter(r => r[0] && String(r[0]) !== voter);
      s.getRange(2, 1, last - 1, HEAD.length).clearContent();
    }
    const out = kept.concat(fresh);
    if (out.length) s.getRange(2, 1, out.length, HEAD.length).setValues(out);
    return json_({ ok: true, saved: fresh.length });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  } finally {
    try { lock.releaseLock(); } catch (_) {}
  }
}
