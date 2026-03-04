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
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Source+Sans+Pro:wght@300;400;600&family=JetBrains+Mono:wght@400&display=swap" rel="stylesheet">
<style>
  /* ============ THEME: EDITORIAL (EVERFOREST) ============ */
  :root {
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif; /* Using Inter for consistency */
    --font-mono: 'JetBrains Mono', monospace;

    --bg: #fdfbf7;
    --surface: #ffffff;
    --surface2: #f4f1ea;
    --border: rgba(43, 30, 22, 0.1);
    --border-bright: rgba(43, 30, 22, 0.2);
    --text: #2b1e16;
    --text-dim: #5c4b40;

    --primary: #c16645; /* terracotta */
    --primary-dim: rgba(193, 102, 69, 0.1);
    --secondary: #6b8e23; /* olive/sage */
    --secondary-dim: rgba(107, 142, 35, 0.1);
    --tertiary: #4682b4; /* steel blue */
    --tertiary-dim: rgba(70, 130, 180, 0.1);
    --accent: #8b4513; /* saddle brown */
  }

  /* Support both system preference and site-wide toggle */
  @media (prefers-color-scheme: dark) {
    :root {
      --bg: #2D353B;
      --surface: #343F44;
      --surface2: #3D484D;
      --border: rgba(79, 88, 94, 0.3);
      --border-bright: rgba(71, 82, 88, 0.4);
      --text: #D3C6AA;
      --text-dim: #9DA9A0;

      --primary: #A7C080; /* Green */
      --primary-dim: rgba(167, 192, 128, 0.15);
      --secondary: #7FBBB3; /* Blue */
      --secondary-dim: rgba(127, 187, 179, 0.15);
      --tertiary: #83C092; /* Aqua */
      --tertiary-dim: rgba(131, 192, 146, 0.15);
    }
  }

  html[data-theme="dark"] {
      --bg: #2D353B;
      --surface: #343F44;
      --surface2: #3D484D;
      --border: rgba(79, 88, 94, 0.3);
      --border-bright: rgba(71, 82, 88, 0.4);
      --text: #D3C6AA;
      --text-dim: #9DA9A0;

      --primary: #A7C080; /* Green */
      --primary-dim: rgba(167, 192, 128, 0.15);
      --secondary: #7FBBB3; /* Blue */
      --secondary-dim: rgba(127, 187, 179, 0.15);
      --tertiary: #83C092; /* Aqua */
      --tertiary-dim: rgba(131, 192, 146, 0.15);
  }

  /* ============ RESET + BASE ============ */
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background-color: var(--bg);
    color: var(--text);
    font-family: var(--font-body);
    line-height: 1.6;
    padding: 60px 20px;
    min-height: 100vh;
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
    max-width: 900px;
    margin: 0 auto;
  }

  header {
    margin-bottom: 60px;
    text-align: center;
    border-bottom: 1px solid var(--border);
    padding-bottom: 40px;
  }

  h1 {
    font-family: var(--font-heading);
    font-size: 48px;
    font-weight: 700;
    font-style: italic;
    margin-bottom: 12px;
    color: var(--text);
  }

  .meta {
    font-family: var(--font-mono);
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary);
  }

  /* ============ CONTENT ============ */
  .summary {
    column-count: 2;
    column-gap: 40px;
    margin-bottom: 60px;
    font-size: 16px;
    text-align: justify;
  }

  @media (max-width: 768px) {
    .summary { column-count: 1; }
  }

  .summary p { margin-bottom: 20px; }
  .summary b { font-weight: 600; color: var(--primary); }

  /* ============ MERMAID CONTAINER ============ */
  .mermaid-section {
    margin-bottom: 60px;
  }

  .mermaid-section h2 {
    font-family: var(--font-heading);
    font-size: 28px;
    margin-bottom: 24px;
    text-align: center;
    position: relative;
  }

  .mermaid-section h2::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: var(--primary);
    margin: 12px auto 0;
  }

  .mermaid-wrap {
    position: relative;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 40px;
    overflow: auto;
    box-shadow: 0 4px 20px rgba(0,0,0,0.03);
  }

  .mermaid-wrap .mermaid {
    display: flex;
    justify-content: center;
    transition: transform 0.2s ease;
    transform-origin: top center;
  }

  .zoom-controls {
    position: absolute;
    top: 12px;
    right: 12px;
    display: flex;
    gap: 4px;
    z-index: 10;
  }

  .zoom-controls button {
    width: 32px;
    height: 32px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-dim);
    font-family: var(--font-mono);
    font-size: 16px;
    cursor: pointer;
    border-radius: 2px;
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

  /* ============ MERMAID SVG OVERRIDES ============ */
  .mermaid .node rect {
    rx: 4 !important;
    ry: 4 !important;
  }

  .mermaid .cluster rect {
    rx: 8 !important;
    ry: 8 !important;
    fill: var(--surface2) !important;
    stroke: var(--border) !important;
    stroke-dasharray: 5,5 !important;
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

  /* ============ OVERFLOW PROTECTION ============ */
  .mermaid-wrap::-webkit-scrollbar { width: 8px; height: 8px; }
  .mermaid-wrap::-webkit-scrollbar-thumb { background: var(--border-bright); border-radius: 4px; }
  .mermaid-wrap.is-zoomed { cursor: grab; }
  .mermaid-wrap.is-panning { cursor: grabbing; user-select: none; }
</style>
</head>
<body>

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

  <div class="mermaid-section animate" style="--i:2">
    <h2>Conceptual Framework</h2>
    <div class="mermaid-wrap">
      <div class="zoom-controls">
        <button onclick="zoomDiagram(this, 1.2)" title="Zoom in">+</button>
        <button onclick="zoomDiagram(this, 0.8)" title="Zoom out">&minus;</button>
        <button onclick="resetZoom(this)" title="Reset zoom">&#8634;</button>
      </div>
      <pre class="mermaid">
        flowchart TD
          subgraph Foundations ["1. Ontological Foundations"]
              S["Simmel 2007: Social Fact"] --> A["Abbott 1995: Boundaries precede Entities"]
              A --> LM["Lamont & Molnár 2002: Symbolic vs. Social"]
          end

          subgraph Mechanisms ["2. Generative Mechanisms"]
              T["Tilly 2004: Encounter, Imposition, Activation"]
              BW["Boundary Work & Social Closure"]
          end

          subgraph Spatial ["3. Physical & Spatial Expression"]
              PB["Physical Barriers: Highways/Railroads"] --> SF["Social Frontiers: Abrupt Discontinuities"]
              Ai["Aiello 2024/Chyn 2023"] --> PB
              IP["Iyer & Pryce 2024/Legewie 2018"] --> SF
          end

          subgraph Relational ["4. Theoretical Lens"]
              R["Relational Space: Löw 2017"]
          end

          subgraph Outcomes ["5. Empirical Consequences"]
              C["Crime & Conflict: Legewie 2018"]
              H["Health & Wellbeing: Lee 2025"]
              M["Mobility & Capital: Chyn 2023"]
          end

          Foundations --> Mechanisms
          Mechanisms --> Spatial
          Spatial --> Outcomes
          Relational -. Informs .-> Foundations
          Relational -. Informs .-> Spatial
          
          V["Validation: Zhang 2024 Areal Wombling"] -. Checks .-> Spatial
      </pre>
    </div>
  </div>

  <footer class="animate" style="--i:3">
    Synthesized for Research Protocol &copy; 2026
  </footer>

</div>

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  import elkLayouts from 'https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk/dist/mermaid-layout-elk.esm.min.mjs';

  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  mermaid.registerLayoutLoaders(elkLayouts);
  mermaid.initialize({
    startOnLoad: true,
    theme: 'base',
    look: 'classic',
    layout: 'elk',
    themeVariables: {
      primaryColor: isDark ? '#2d2622' : '#fdfbf7',
      primaryBorderColor: isDark ? '#e68a6a' : '#c16645',
      primaryTextColor: isDark ? '#f4f1ea' : '#2b1e16',
      lineColor: isDark ? '#b8a99a' : '#5c4b40',
      fontSize: '15px',
      fontFamily: "'Source Sans Pro', sans-serif",
      clusterBkg: isDark ? '#251f1c' : '#f4f1ea',
      clusterBorder: isDark ? '#433934' : '#dcd7cc',
    }
  });
</script>
<script>
  function updateZoomState(wrap) {
    var target = wrap.querySelector('.mermaid');
    var zoom = parseFloat(target.dataset.zoom || '1');
    wrap.classList.toggle('is-zoomed', zoom > 1);
  }
  function zoomDiagram(btn, factor) {
    var wrap = btn.closest('.mermaid-wrap');
    var target = wrap.querySelector('.mermaid');
    var current = parseFloat(target.dataset.zoom || '1');
    var next = Math.min(Math.max(current * factor, 0.3), 5);
    target.dataset.zoom = next;
    target.style.transform = 'scale(' + next + ')';
    updateZoomState(wrap);
  }
  function resetZoom(btn) {
    var wrap = btn.closest('.mermaid-wrap');
    var target = wrap.querySelector('.mermaid');
    target.dataset.zoom = '1';
    target.style.transform = 'scale(1)';
    updateZoomState(wrap);
  }
  document.querySelectorAll('.mermaid-wrap').forEach(function(wrap) {
    wrap.addEventListener('wheel', function(e) {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      var target = wrap.querySelector('.mermaid');
      var current = parseFloat(target.dataset.zoom || '1');
      var factor = e.deltaY < 0 ? 1.1 : 0.9;
      var next = Math.min(Math.max(current * factor, 0.3), 5);
      target.dataset.zoom = next;
      target.style.transform = 'scale(' + next + ')';
      updateZoomState(wrap);
    }, { passive: false });
    var startX, startY, scrollL, scrollT;
    wrap.addEventListener('mousedown', function(e) {
      if (e.target.closest('.zoom-controls')) return;
      var target = wrap.querySelector('.mermaid');
      if (parseFloat(target.dataset.zoom || '1') <= 1) return;
      wrap.classList.add('is-panning');
      startX = e.clientX;
      startY = e.clientY;
      scrollL = wrap.scrollLeft;
      scrollT = wrap.scrollTop;
    });
    window.addEventListener('mousemove', function(e) {
      if (!wrap.classList.contains('is-panning')) return;
      wrap.scrollLeft = scrollL - (e.clientX - startX);
      wrap.scrollTop = scrollT - (e.clientY - startY);
    });
    window.addEventListener('mouseup', function() {
      wrap.classList.remove('is-panning');
    });
  });
</script>
</body>
</html>
