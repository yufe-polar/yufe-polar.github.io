---
title: "Outputs"
hideMeta: true
---

<p class="outputs-intro">
Research outputs from the POLAR Project — including academic papers, annotated datasets, and presentations. This page will be updated as the project progresses.
</p>

---

## Papers

<div class="outputs-section" id="papers">
  <p class="outputs-empty">No papers published yet — check back soon.</p>
</div>

---

## Datasets

<div class="outputs-section" id="datasets">
  <p class="outputs-empty">No datasets released yet — check back soon.</p>
</div>

---

## Talks

<div class="outputs-section" id="talks">
  <p class="outputs-empty">No talks listed yet — check back soon.</p>
</div>

<style>
  .outputs-intro {
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 72ch;
    color: var(--polar-text-soft) !important;
  }

  .outputs-section {
    margin: 16px 0 8px;
  }

  .outputs-empty {
    font-size: 0.95rem;
    color: var(--polar-muted, #8a9e9c);
    font-style: italic;
    padding: 20px 0;
    margin: 0;
  }

  /* ── Output item card (for future use) ── */
  .output-card {
    display: flex;
    flex-direction: column;
    gap: 6px;
    padding: 18px 22px;
    border: 1px solid var(--polar-border);
    border-radius: 14px;
    background: var(--polar-card);
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    margin-bottom: 14px;
    transition: transform 0.12s ease, box-shadow 0.12s ease;
  }

  .output-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(26, 95, 90, 0.08);
  }

  .output-title {
    font-size: 1rem;
    font-weight: 700;
    color: var(--polar-teal);
    margin: 0;
  }

  .output-authors {
    font-size: 0.9rem;
    color: var(--polar-text-soft);
    margin: 0;
  }

  .output-meta {
    font-size: 0.83rem;
    color: var(--polar-muted, #8a9e9c);
    margin: 0;
  }

  .output-links {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 4px;
  }

  .output-link {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--polar-teal);
    text-decoration: none;
    padding: 3px 10px;
    border: 1px solid rgba(26, 95, 90, 0.3);
    border-radius: 999px;
    transition: background 0.1s ease;
  }

  .output-link:hover {
    background: rgba(26, 95, 90, 0.08);
  }

  @media (prefers-color-scheme: dark) {
    .output-link {
      border-color: rgba(107, 191, 184, 0.3);
    }
    .output-link:hover {
      background: rgba(107, 191, 184, 0.08);
    }
  }
</style>
