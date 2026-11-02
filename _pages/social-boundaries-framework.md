---
title: "Social Boundaries Framework"
permalink: /social-boundaries-framework/
---
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Conceptual Framework: Social Boundaries</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  /* ============ THEME: THE CARTOGRAPHER'S LEDGER (EVERFOREST UNIFIED) ============ */
  :root,
  html[data-theme="light"] {
    --bg: #FDFBF7;
    --surface: #FFFFFF;
    --surface2: #F4F1EA;
    --surface3: #EAE6DC;
    --border: #D3CEBE;
    --border-subtle: #E2DED4;
    --text: #2D353B;
    --text-dim: #5C6A62;
    --text-muted: #859289;

    --primary: #3A7D6E; /* Light forest sage */
    --primary-dim: rgba(58, 125, 110, 0.12);
    --secondary: #357B62; /* Aqua */
    --secondary-dim: rgba(53, 123, 98, 0.12);
    --tertiary: #3B758C; /* Blue */
    --tertiary-dim: rgba(59, 117, 140, 0.12);
    --accent: #9D6800; /* Ochre / Amber */
    --accent-coral: #A34D3D;
    --accent-plum: #7D4E72;

    --diagram-bg: #FAF7F0;
    --compartment-bg: #F4F1EA;
    --compartment-border: #D3CEBE;
    --compartment-header-bg: #EAE6DC;
    --card-bg: #FFFFFF;
    --card-border: #D3CEBE;
    --rail-color: #68736B;
    --badge-bg: #EAE6DC;
    --badge-text: #2D353B;
    --badge-border: #D3CEBE;

    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    --font-mono: 'JetBrains Mono', Consolas, Monaco, monospace;
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #2D353B;
      --surface: #343F44;
      --surface2: #2B3439;
      --surface3: #22292D;
      --border: #3D484D;
      --border-subtle: #475258;
      --text: #D3C6AA;
      --text-dim: #9DA9A0;
      --text-muted: #859289;

      --primary: #A7C080; /* Forest Sage */
      --primary-dim: rgba(167, 192, 128, 0.15);
      --secondary: #83C092; /* Aqua */
      --secondary-dim: rgba(131, 192, 146, 0.15);
      --tertiary: #7FBBB3; /* Blue */
      --tertiary-dim: rgba(127, 187, 179, 0.15);
      --accent: #DBBC7F; /* Amber */
      --accent-coral: #E67E80;
      --accent-plum: #D699B6;

      --diagram-bg: #242C30;
      --compartment-bg: #2A3338;
      --compartment-border: #3D484D;
      --compartment-header-bg: #1E2528;
      --card-bg: #344046;
      --card-border: #475258;
      --rail-color: #859289;
      --badge-bg: #1E2528;
      --badge-text: #A7C080;
      --badge-border: #475258;
    }
  }

  html[data-theme="dark"] {
    --bg: #2D353B;
    --surface: #343F44;
    --surface2: #2B3439;
    --surface3: #22292D;
    --border: #3D484D;
    --border-subtle: #475258;
    --text: #D3C6AA;
    --text-dim: #9DA9A0;
    --text-muted: #859289;

    --primary: #A7C080;
    --primary-dim: rgba(167, 192, 128, 0.15);
    --secondary: #83C092;
    --secondary-dim: rgba(131, 192, 146, 0.15);
    --tertiary: #7FBBB3;
    --tertiary-dim: rgba(127, 187, 179, 0.15);
    --accent: #DBBC7F;
    --accent-coral: #E67E80;
    --accent-plum: #D699B6;

    --diagram-bg: #242C30;
    --compartment-bg: #2A3338;
    --compartment-border: #3D484D;
    --compartment-header-bg: #1E2528;
    --card-bg: #344046;
    --card-border: #475258;
    --rail-color: #859289;
    --badge-bg: #1E2528;
    --badge-text: #A7C080;
    --badge-border: #475258;
  }

  /* ============ RESET + BASE ============ */
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background-color: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    line-height: 1.6;
    padding: 30px 20px 60px;
    min-height: 100vh;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  /* ============ TOP NAV BAR ============ */
  .top-nav {
    max-width: 1040px;
    margin: 0 auto 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--border);
    padding-bottom: 16px;
  }

  .nav-back {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--font-mono);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: var(--primary);
    text-decoration: none;
    font-weight: 500;
    transition: transform 0.2s ease, color 0.2s ease;
  }

  .nav-back:hover {
    color: var(--secondary);
    transform: translateX(-3px);
  }

  .theme-toggle-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border: 1px solid var(--border);
    background: var(--surface2);
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 12px;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
  }

  .theme-toggle-btn:hover {
    border-color: var(--primary);
    color: var(--primary);
  }

  /* ============ ANIMATION ============ */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .animate {
    animation: fadeUp 0.6s ease-out both;
    animation-delay: calc(var(--i, 0) * 0.1s);
  }

  /* ============ LAYOUT ============ */
  .container {
    max-width: 1040px;
    margin: 0 auto;
  }

  header {
    margin-bottom: 45px;
    text-align: center;
    border-bottom: 1px solid var(--border);
    padding-bottom: 32px;
  }

  h1 {
    font-family: var(--font-heading);
    font-size: 46px;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 12px;
    color: var(--text);
    line-height: 1.15;
  }

  .meta {
    font-family: var(--font-mono);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary);
  }

  /* ============ CONTENT SUMMARY ============ */
  .summary {
    column-count: 2;
    column-gap: 40px;
    margin-bottom: 50px;
    font-size: 15.5px;
    text-align: justify;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    .summary { column-count: 1; }
  }

  .summary p { margin-bottom: 18px; }
  .summary b { font-weight: 600; color: var(--primary); }

  /* ============ CARTOGRAPHER'S LEDGER FRAMEWORK CONTAINER ============ */
  .ledger-section {
    margin-bottom: 60px;
  }

  .ledger-section h2 {
    font-family: var(--font-heading);
    font-size: 28px;
    margin-bottom: 24px;
    text-align: center;
    position: relative;
    color: var(--text);
  }

  .ledger-section h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: var(--primary);
    margin: 12px auto 0;
  }

  .ledger-canvas {
    position: relative;
    background: var(--diagram-bg);
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 36px 28px;
    overflow: auto;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .ledger-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    padding-bottom: 14px;
    border-bottom: 1px dashed var(--border);
    font-family: var(--font-mono);
    font-size: 11.5px;
    color: var(--text-muted);
  }

  .ledger-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
  }

  .legend-item {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .legend-pip {
    width: 10px;
    height: 10px;
    border-radius: 2px;
  }

  .zoom-controls {
    display: flex;
    gap: 4px;
  }

  .zoom-controls button {
    width: 30px;
    height: 30px;
    border: 1px solid var(--border);
    background: var(--surface2);
    color: var(--text-dim);
    font-family: var(--font-mono);
    font-size: 15px;
    cursor: pointer;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
  }

  .zoom-controls button:hover {
    border-color: var(--primary);
    color: var(--primary);
    background: var(--primary-dim);
  }

  /* ============ ARCHITECTURAL LEDGER SPINE ============ */
  .ledger-spine {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0;
    max-width: 900px;
    margin: 0 auto;
    transition: transform 0.2s ease;
    transform-origin: top center;
  }

  /* Compartment Shells */
  .compartment {
    width: 100%;
    background: var(--compartment-bg);
    border: 1px solid var(--compartment-border);
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 2px 8px rgba(0,0,0,0.02);
    transition: all 0.25s ease;
  }

  .compartment-header {
    background: var(--compartment-header-bg);
    border-bottom: 1px solid var(--compartment-border);
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: var(--font-mono);
    font-size: 11.5px;
    letter-spacing: 1.5px;
    font-weight: 600;
  }

  .compartment-title {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .compartment-coord {
    font-size: 10.5px;
    color: var(--text-muted);
    font-weight: 400;
  }

  .compartment-body {
    padding: 20px;
  }

  /* Academic Citation Cards */
  .card-grid {
    display: grid;
    gap: 16px;
  }

  .card-grid-1 { grid-template-columns: 1fr; }
  .card-grid-2 { grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); }
  .card-grid-3 { grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }

  .scholar-card {
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: 4px;
    padding: 14px 16px;
    position: relative;
    transition: all 0.2s ease;
  }

  .scholar-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
  }

  /* Accent Borders by Phase */
  .accent-blue { border-left: 3px solid var(--tertiary); }
  .accent-sage { border-left: 3px solid var(--primary); }
  .accent-amber { border-left: 3px solid var(--accent); }
  .accent-plum { border-left: 3px solid var(--accent-plum); }
  .accent-coral { border-left: 3px solid var(--accent-coral); }
  .accent-aqua { border-left: 3px solid var(--secondary); }

  .card-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
  }

  .author-tag {
    font-family: var(--font-mono);
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.5px;
  }

  .theme-chip {
    font-family: var(--font-mono);
    font-size: 10px;
    padding: 2px 6px;
    border-radius: 2px;
    background: var(--surface2);
    color: var(--text-muted);
  }

  .concept-title {
    font-size: 14.5px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 4px;
    line-height: 1.35;
  }

  .concept-desc {
    font-size: 12.5px;
    color: var(--text-dim);
    line-height: 1.45;
  }

  /* Connector Channels */
  .channel-track {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 48px;
    position: relative;
    justify-content: center;
  }

  .channel-line {
    width: 2px;
    height: 100%;
    background: var(--rail-color);
  }

  .channel-line-dashed {
    width: 2px;
    height: 100%;
    background: repeating-linear-gradient(to bottom, var(--rail-color) 0, var(--rail-color) 4px, transparent 4px, transparent 8px);
  }

  .channel-badge {
    position: absolute;
    background: var(--badge-bg);
    border: 1px solid var(--badge-border);
    color: var(--badge-text);
    padding: 3px 10px;
    border-radius: 4px;
    font-family: var(--font-mono);
    font-size: 10.5px;
    font-weight: 600;
    letter-spacing: 0.5px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.05);
    white-space: nowrap;
  }

  .arrow-down {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid var(--rail-color);
    position: absolute;
    bottom: -1px;
  }

  /* Specialized Sub-Flow within Phase 1 */
  .internal-flow {
    display: flex;
    flex-direction: column;
    gap: 12px;
    position: relative;
  }

  .internal-step {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .step-index {
    font-family: var(--font-mono);
    font-size: 11px;
    color: var(--text-muted);
    width: 24px;
    text-align: center;
    flex-shrink: 0;
  }

  .step-connector {
    width: 2px;
    height: 16px;
    background: var(--rail-color);
    margin-left: 23px;
    position: relative;
  }

  .step-connector::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3px;
    width: 0;
    height: 0;
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid var(--rail-color);
  }

  /* Two-column Spatial Grid with Integrated Validation Track */
  .spatial-layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 20px;
    align-items: stretch;
  }

  @media (max-width: 800px) {
    .spatial-layout { grid-template-columns: 1fr; }
  }

  .spatial-main {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .validation-rail {
    background: var(--card-bg);
    border: 1px dashed var(--secondary);
    border-radius: 4px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
  }

  .validation-tag {
    font-family: var(--font-mono);
    font-size: 10.5px;
    font-weight: 600;
    color: var(--secondary);
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 6px;
  }

  .bridge-indicator {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 12px;
    padding-top: 10px;
    border-top: 1px dashed var(--border);
    font-family: var(--font-mono);
    font-size: 10.5px;
    color: var(--secondary);
  }

  /* ============ FOOTER ============ */
  footer {
    border-top: 1px solid var(--border);
    padding-top: 30px;
    font-size: 14px;
    color: var(--text-dim);
    font-style: italic;
    text-align: center;
  }

  .ledger-canvas::-webkit-scrollbar { width: 8px; height: 8px; }
  .ledger-canvas::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  .ledger-canvas.is-zoomed { cursor: grab; }
  .ledger-canvas.is-panning { cursor: grabbing; user-select: none; }
</style>
</head>
<body>

<div class="top-nav">
  <a href="{{ '/' | relative_url }}" class="nav-back">&larr; Andrei Wong Espejo</a>
  <button id="theme-toggle" class="theme-toggle-btn" aria-label="Toggle theme">
    <span id="theme-icon">🌙</span> <span id="theme-text">Theme</span>
  </button>
</div>

<div class="container">

  <header class="animate" style="--i:0">
    <div class="meta">Research Synthesis</div>
    <h1>The Social Boundary</h1>
    <p class="meta">From Simmel to Spatial Frontiers</p>
  </header>

  <div class="summary animate" style="--i:1">
    <p>
      The conceptual journey begins with the recognition that boundaries are not merely passive lines on a map but active social processes. <b>Simmel (1908/2007)</b> posits that boundaries are social facts that perform the "othering" necessary for group identity. <b>Abbott (1995)</b> takes this further, arguing that boundaries often precede the entities they define.
    </p>
    <p>
      Boundaries are maintained through specific relational mechanisms. <b>Tilly (2004)</b> identifies processes such as encounter, imposition, and activation. This is complemented by <b>Lamont & Molnár's (2002)</b> essential distinction between <i>symbolic boundaries</i> (conceptual categorizations) and <i>social boundaries</i> (objectified patterns of social exclusion).
    </p>
    <p>
      Social boundaries frequently "anchor" to physical features. <b>Aiello et al. (2024)</b> and <b>Chyn et al. (2023)</b> demonstrate how large-scale infrastructure acts as persistent physical barriers. When these manifest as abrupt changes in residential mix, they become <b>Social Frontiers (Iyer & Pryce 2024)</b>.
    </p>
    <p>
      The "boundary effect" has tangible outcomes: elevated crime (<b>Legewie 2018</b>), increased depression (<b>Lee et al. 2025</b>), and reduced mobility (<b>Chyn 2023</b>). Modern methods like Areal Wombling (<b>Zhang et al. 2024</b>) now validate these detected boundaries against resident perceptions.
    </p>
  </div>

  <div class="ledger-section animate" style="--i:2">
    <h2>Conceptual Framework</h2>
    
    <div class="ledger-canvas" id="ledger-viewport">
      
      <div class="ledger-toolbar">
        <div class="ledger-legend">
          <span class="legend-item"><span class="legend-pip" style="background: var(--tertiary);"></span> Ontology</span>
          <span class="legend-item"><span class="legend-pip" style="background: var(--primary);"></span> Mechanisms</span>
          <span class="legend-item"><span class="legend-pip" style="background: var(--accent);"></span> Spatial</span>
          <span class="legend-item"><span class="legend-pip" style="background: var(--accent-plum);"></span> Lens</span>
          <span class="legend-item"><span class="legend-pip" style="background: var(--accent-coral);"></span> Outcomes</span>
          <span class="legend-item"><span class="legend-pip" style="background: var(--secondary);"></span> Validation</span>
        </div>
        <div class="zoom-controls">
          <button onclick="zoomLedger(1.2)" title="Zoom in">+</button>
          <button onclick="zoomLedger(0.8)" title="Zoom out">&minus;</button>
          <button onclick="resetLedger()" title="Reset zoom">&#8634;</button>
        </div>
      </div>

      <div class="ledger-spine" id="ledger-graph">

        <!-- PHASE 04: THEORETICAL LENS -->
        <div class="compartment" style="max-width: 680px;">
          <div class="compartment-header">
            <span class="compartment-title" style="color: var(--accent-plum);">
              PHASE 04 // THEORETICAL LENS
            </span>
            <span class="compartment-coord">REF. LÖW-2017</span>
          </div>
          <div class="compartment-body">
            <div class="scholar-card accent-plum">
              <div class="card-meta">
                <span class="author-tag" style="color: var(--accent-plum);">Löw (2017)</span>
                <span class="theme-chip">Constitution of Space</span>
              </div>
              <div class="concept-title">Relational Space</div>
              <div class="concept-desc">Space is continuously constituted through the spacing of social goods and living entities, acting as an active medium rather than a static container.</div>
            </div>
          </div>
        </div>

        <!-- CONNECTOR 1 -->
        <div class="channel-track">
          <div class="channel-line-dashed"></div>
          <span class="channel-badge">Informs Ontological Grounding</span>
          <div class="arrow-down"></div>
        </div>

        <!-- PHASE 01: ONTOLOGICAL FOUNDATIONS -->
        <div class="compartment">
          <div class="compartment-header">
            <span class="compartment-title" style="color: var(--tertiary);">
              PHASE 01 // ONTOLOGICAL FOUNDATIONS
            </span>
            <span class="compartment-coord">AXIS. SIMMEL &rarr; ABBOTT &rarr; LAMONT</span>
          </div>
          <div class="compartment-body">
            <div class="internal-flow">
              
              <div class="scholar-card accent-blue">
                <div class="card-meta">
                  <span class="author-tag" style="color: var(--tertiary);">Simmel (1908/2007)</span>
                  <span class="theme-chip">Primary Axiom</span>
                </div>
                <div class="concept-title">Boundary as Social Fact</div>
                <div class="concept-desc">The boundary is not a spatial fact with sociological consequences, but a social fact that projects itself spatially to perform mutual identity 'othering'.</div>
              </div>

              <div class="step-connector"></div>

              <div class="scholar-card accent-blue">
                <div class="card-meta">
                  <span class="author-tag" style="color: var(--tertiary);">Abbott (1995)</span>
                  <span class="theme-chip">Sequential Priority</span>
                </div>
                <div class="concept-title">Boundaries Precede Entities</div>
                <div class="concept-desc">It is wrong to look for entities first and boundaries later; social boundaries and sites of difference crystallize before coherent group entities emerge.</div>
              </div>

              <div class="step-connector"></div>

              <div class="scholar-card accent-blue">
                <div class="card-meta">
                  <span class="author-tag" style="color: var(--tertiary);">Lamont &amp; Molnár (2002)</span>
                  <span class="theme-chip">Categorical Shift</span>
                </div>
                <div class="concept-title">Symbolic vs. Social Boundaries</div>
                <div class="concept-desc">Symbolic boundaries (conceptual categorizations &amp; cultural lines) become objectified patterns of exclusion and durable inequality (social boundaries).</div>
              </div>

            </div>
          </div>
        </div>

        <!-- CONNECTOR 2 -->
        <div class="channel-track">
          <div class="channel-line"></div>
          <span class="channel-badge">Generative Activation</span>
          <div class="arrow-down"></div>
        </div>

        <!-- PHASE 02: GENERATIVE MECHANISMS -->
        <div class="compartment">
          <div class="compartment-header">
            <span class="compartment-title" style="color: var(--primary);">
              PHASE 02 // GENERATIVE MECHANISMS
            </span>
            <span class="compartment-coord">RELATIONAL WORK &amp; CLOSURE</span>
          </div>
          <div class="compartment-body">
            <div class="card-grid card-grid-2">
              
              <div class="scholar-card accent-sage">
                <div class="card-meta">
                  <span class="author-tag" style="color: var(--primary);">Tilly (2004)</span>
                  <span class="theme-chip">Relational Processes</span>
                </div>
                <div class="concept-title">Encounter, Imposition &amp; Activation</div>
                <div class="concept-desc">Durable boundaries are continuously produced and re-enacted through site encounter, boundary imposition, and selective categorical activation.</div>
              </div>

              <div class="scholar-card accent-sage">
                <div class="card-meta">
                  <span class="author-tag" style="color: var(--primary);">Weberian / Gieryn</span>
                  <span class="theme-chip">Institutionalization</span>
                </div>
                <div class="concept-title">Boundary Work &amp; Social Closure</div>
                <div class="concept-desc">Actors monopolize social, economic, and locational advantages by turning subjective cultural distinctions into hard physical barriers to entry.</div>
              </div>

            </div>
          </div>
        </div>

        <!-- CONNECTOR 3 -->
        <div class="channel-track">
          <div class="channel-line"></div>
          <span class="channel-badge">Spatial Manifestation</span>
          <div class="arrow-down"></div>
        </div>

        <!-- PHASE 03: PHYSICAL & SPATIAL EXPRESSION (WITH VALIDATION RAIL) -->
        <div class="compartment">
          <div class="compartment-header">
            <span class="compartment-title" style="color: var(--accent);">
              PHASE 03 // PHYSICAL &amp; SPATIAL EXPRESSION
            </span>
            <span class="compartment-coord">FRONTIERS &amp; BOUNDARY WOMBLING</span>
          </div>
          <div class="compartment-body">
            
            <div class="spatial-layout">
              
              <!-- Main Spatial Track -->
              <div class="spatial-main">
                
                <div class="scholar-card accent-amber">
                  <div class="card-meta">
                    <span class="author-tag" style="color: var(--accent);">Aiello (2024) / Chyn (2023)</span>
                    <span class="theme-chip">Infrastructure Anchoring</span>
                  </div>
                  <div class="concept-title">Physical Barriers: Highways &amp; Railroads</div>
                  <div class="concept-desc">Large-scale infrastructural divides act as historical urban anchors, constraining everyday traversal and locking in geographic polarization.</div>
                </div>

                <div style="display: flex; justify-content: center;">
                  <div style="width: 2px; height: 16px; background: var(--rail-color); position: relative;">
                    <div style="position: absolute; bottom: 0; left: -3px; width: 0; height: 0; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 5px solid var(--rail-color);"></div>
                  </div>
                </div>

                <div class="scholar-card accent-amber">
                  <div class="card-meta">
                    <span class="author-tag" style="color: var(--accent);">Iyer &amp; Pryce (2024) / Legewie (2018)</span>
                    <span class="theme-chip">Sharp Discontinuities</span>
                  </div>
                  <div class="concept-title">Social Frontiers: Abrupt Discontinuities</div>
                  <div class="concept-desc">Boundaries characterized by steep, step-level transitions in socioeconomic composition between adjacent neighborhoods, intensifying social tension.</div>
                </div>

              </div>

              <!-- Verification Track -->
              <div class="validation-rail">
                <span class="validation-tag">Methodological Validation</span>
                <div class="concept-title" style="font-size: 13.5px; margin-bottom: 4px;">Zhang et al. (2024)</div>
                <div class="concept-desc" style="font-size: 12px; margin-bottom: 10px;">
                  <b>Areal Wombling Detection</b> statistically pinpoints boundary intensity, verifying algorithmic borders against qualitative resident boundary perceptions.
                </div>
                <div class="bridge-indicator">
                  <span>&larr; Validates &amp; Calibrates Detected Frontiers</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        <!-- CONNECTOR 4 -->
        <div class="channel-track">
          <div class="channel-line"></div>
          <span class="channel-badge">Precipitates Measurable Outcomes</span>
          <div class="arrow-down"></div>
        </div>

        <!-- PHASE 05: EMPIRICAL CONSEQUENCES -->
        <div class="compartment">
          <div class="compartment-header">
            <span class="compartment-title" style="color: var(--accent-coral);">
              PHASE 05 // EMPIRICAL CONSEQUENCES
            </span>
            <span class="compartment-coord">INDIVIDUAL &amp; SYSTEMIC OUTCOMES</span>
          </div>
          <div class="compartment-body">
            <div class="card-grid card-grid-3">
              
              <div class="scholar-card accent-coral">
                <div class="card-meta">
                  <span class="author-tag" style="color: var(--accent-coral);">Chyn (2023)</span>
                  <span class="theme-chip">Mobility Decay</span>
                </div>
                <div class="concept-title">Mobility &amp; Capital</div>
                <div class="concept-desc">Sharp boundaries sever local movement networks, suppressing intergenerational mobility and network capital accumulation.</div>
              </div>

              <div class="scholar-card accent-coral">
                <div class="card-meta">
                  <span class="author-tag" style="color: var(--accent-coral);">Legewie (2018)</span>
                  <span class="theme-chip">Inter-Group Friction</span>
                </div>
                <div class="concept-title">Crime &amp; Conflict</div>
                <div class="concept-desc">Discontinuous demographic edges act as localized friction points, driving statistically elevated rates of conflict and racial policing.</div>
              </div>

              <div class="scholar-card accent-coral">
                <div class="card-meta">
                  <span class="author-tag" style="color: var(--accent-coral);">Lee et al. (2025)</span>
                  <span class="theme-chip">Psychosocial Cost</span>
                </div>
                <div class="concept-title">Health &amp; Wellbeing</div>
                <div class="concept-desc">Living in close proximity to entrenched social frontiers correlates with elevated chronic depressive symptoms and neighborhood distress.</div>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  </div>

  <div class="bridge animate" style="--i:3; font-family: var(--font-body); font-size: 15.5px; margin-bottom: 40px; text-align: justify; column-count: 2; column-gap: 40px; line-height: 1.7;">
    <p style="margin-bottom: 20px;">
      A central question this graph begets is "How can we scientifically measure social boundaries?". Their degree of intensity of transition, length and width, and how to quantify exposure to a boundary?
    </p>
    <p style="margin-bottom: 20px;">
      Quantitative methods have been proposed to achieve this aim, although most focus primarily on measuring boundary intensity. More on this in the next <a href="{{ '/files/Spatial_bayesian_models.html' | relative_url }}" style="color: var(--primary); font-weight: 600; text-decoration: underline;">section</a>. I promise you will pick up a few bruises along this intellectual journey.
    </p>
  </div>
  
  <footer class="animate" style="--i:4">
    Version 1.0 &copy; 2026
  </footer>

</div>

<script>
  // Theme Toggle Engine
  function getPreferredTheme() {
    var stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored;
    return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var icon = document.getElementById('theme-icon');
    var text = document.getElementById('theme-text');
    if (icon) icon.textContent = theme === 'dark' ? '☀️' : '🌙';
    if (text) text.textContent = theme === 'dark' ? 'Light' : 'Dark';
  }

  var currentTheme = getPreferredTheme();
  applyTheme(currentTheme);

  var toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      var nowDark = document.documentElement.getAttribute('data-theme') === 'dark';
      var nextTheme = nowDark ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme);
    });
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }

  // Interactive Zoom & Pan Engine for the Ledger Viewport
  var currentScale = 1;
  var graph = document.getElementById('ledger-graph');
  var viewport = document.getElementById('ledger-viewport');

  function updateZoomUI() {
    if (viewport) {
      viewport.classList.toggle('is-zoomed', currentScale > 1);
    }
  }

  function zoomLedger(factor) {
    if (!graph) return;
    currentScale = Math.min(Math.max(currentScale * factor, 0.6), 2.0);
    graph.style.transform = 'scale(' + currentScale + ')';
    updateZoomUI();
  }

  function resetLedger() {
    if (!graph) return;
    currentScale = 1;
    graph.style.transform = 'scale(1)';
    updateZoomUI();
  }

  if (viewport) {
    viewport.addEventListener('wheel', function(e) {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      var factor = e.deltaY < 0 ? 1.1 : 0.9;
      zoomLedger(factor);
    }, { passive: false });

    var isPanning = false;
    var startX, startY, scrollL, scrollT;

    viewport.addEventListener('mousedown', function(e) {
      if (e.target.closest('.zoom-controls, .theme-toggle-btn')) return;
      if (currentScale <= 1) return;
      isPanning = true;
      viewport.classList.add('is-panning');
      startX = e.clientX;
      startY = e.clientY;
      scrollL = viewport.scrollLeft;
      scrollT = viewport.scrollTop;
    });

    window.addEventListener('mousemove', function(e) {
      if (!isPanning) return;
      viewport.scrollLeft = scrollL - (e.clientX - startX);
      viewport.scrollTop = scrollT - (e.clientY - startY);
    });

    window.addEventListener('mouseup', function() {
      isPanning = false;
      if (viewport) viewport.classList.remove('is-panning');
    });
  }
</script>
</body>
</html>
