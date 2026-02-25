---
title: "About"
hideMeta: true
---

<p class="about-intro">
<strong>POLAR</strong> (<em>Polemics in Online Language and Automated Recognition</em>) is a 24-month collaborative research project funded within the <strong>YUFE Alliance</strong> and hosted at <strong>Université Sorbonne Nouvelle</strong>.
</p>

<p class="about-intro">
The project investigates how online speakers express stance and controversy through <strong>covert or overt discursive strategies</strong> (e.g., distancing, alignment, rhetorical questions or remarks), and how such strategies can be <strong>identified qualitatively</strong> and then <strong>detected automatically</strong>.
</p>

---

## Research aims

<div class="aims-grid">
  <div class="aim-card">
    <div class="aim-icon">🔍</div>
    <div class="aim-body">
      <div class="aim-title">Identify & describe</div>
      <p>Distance and controversy markers functioning as polemic markers, and model how they operate in context.</p>
    </div>
  </div>
  <div class="aim-card">
    <div class="aim-icon">🤖</div>
    <div class="aim-body">
      <div class="aim-title">Explore & automate</div>
      <p>Tool-assisted approaches — automatic annotation, detection, clustering and text mining — to refine automatic decision-making for polemic detection.</p>
    </div>
  </div>
</div>

---

## Method in a nutshell

<div class="method-grid">
  <div class="method-card">
    <div class="method-label">Qualitative</div>
    <p>Manual identification of polemical strategies across linguistic, abstract (e.g., irony/metaphor), and argumentation levels.</p>
  </div>
  <div class="method-divider">↔</div>
  <div class="method-card">
    <div class="method-label">Quantitative & Computational</div>
    <p>Annotation, machine learning / NLP, and evaluation on large-scale social media data.</p>
  </div>
</div>

---

## Planned activities

<div class="timeline">
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <span class="timeline-date">May 2026 →</span>
      <p>A series of <strong>interdisciplinary webinars</strong> (4–5 across the project)</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <span class="timeline-date">Ongoing</span>
      <p>Regular <strong>collaboration meetings</strong> and in-person workshops</p>
    </div>
  </div>
  <div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
      <span class="timeline-date">2027</span>
      <p>Final <strong>colloquium / conference</strong> to present results and foster future collaborations</p>
    </div>
  </div>
</div>

<style>
  /* ── Intro ── */
  .about-intro {
    font-size: 1.05rem;
    line-height: 1.7;
    max-width: 72ch;
    color: var(--polar-text-soft) !important;
  }

  .about-intro strong {
    color: var(--polar-teal) !important;
  }

  /* ── Research aims ── */
  .aims-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 24px 0;
    max-width: 100%;
    box-sizing: border-box;
  }

  .aim-card {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    padding: 20px 22px;
    border: 1px solid var(--polar-border);
    border-radius: 16px;
    background: var(--polar-card);
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
    min-width: 0;
  }

  .aim-icon {
    font-size: 1.8rem;
    line-height: 1;
    flex-shrink: 0;
    margin-top: 2px;
  }

  .aim-title {
    margin: 0 0 8px;
    font-size: 1rem;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif !important;
    color: var(--polar-teal);
  }

  .aim-body p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--polar-text-soft) !important;
  }

  /* ── Method ── */
  .method-grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    gap: 20px;
    margin: 24px 0;
  }

  .method-card {
    padding: 20px 22px;
    border: 1px solid var(--polar-border);
    border-radius: 16px;
    background: var(--polar-card);
    box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  }

  .method-label {
    font-weight: 700;
    font-size: 0.9rem;
    font-family: 'DM Sans', sans-serif !important;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--polar-teal);
    margin-bottom: 10px;
  }

  .method-card p {
    margin: 0;
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--polar-text-soft) !important;
  }

  .method-divider {
    font-size: 1.4rem;
    color: rgba(26, 95, 90, 0.4);
    text-align: center;
    flex-shrink: 0;
  }

  /* ── Timeline ── */
  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 24px 0;
    padding-left: 8px;
    border-left: 2px solid rgba(26, 95, 90, 0.2);
  }

  .timeline-item {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    padding: 0 0 28px 24px;
    position: relative;
  }

  .timeline-dot {
    position: absolute;
    left: -7px;
    top: 4px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: var(--polar-teal);
    flex-shrink: 0;
  }

  .timeline-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .timeline-date {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--polar-teal);
    opacity: 0.7;
  }

  .timeline-content p {
    margin: 0;
    font-size: 0.97rem;
    line-height: 1.55;
    color: var(--polar-text-soft) !important;
  }

  .timeline-content strong {
    color: var(--polar-teal) !important;
  }

  /* ── Mobile ── */
  @media (max-width: 620px) {
    .aims-grid {
      grid-template-columns: 1fr;
    }
    .method-grid {
      grid-template-columns: 1fr;
    }
    .method-divider {
      transform: rotate(90deg);
      margin: -8px auto;
    }
  }
</style>
