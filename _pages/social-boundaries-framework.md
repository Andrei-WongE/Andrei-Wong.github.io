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
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  /* ============ THEME: THE CARTOGRAPHER'S LEDGER (EVERFOREST UNIFIED) ============ */
  :root,
  html[data-theme="light"] {
    --bg: #FDFBF7;
    --surface: #FFFFFF;
    --surface2: #F4F1EA;
    --border: #D3CEBE;
    --border-bright: #E2DED4;
    --text: #2D353B;
    --text-dim: #5C6A62;

    --primary: #3A7D6E; /* Light forest sage */
    --primary-dim: rgba(58, 125, 110, 0.12);
    --secondary: #357B62; /* Aqua */
    --secondary-dim: rgba(53, 123, 98, 0.12);
    --tertiary: #3B758C; /* Blue */
    --tertiary-dim: rgba(59, 117, 140, 0.12);
    --accent: #9D6800; /* Ochre / Amber */

    --font-heading: 'Playfair Display', serif;
    --font-body: 'Inter', -apple-system, sans-serif;
    --font-mono: 'JetBrains Mono', Consolas, monospace;
  }

  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) {
      --bg: #2D353B;
      --surface: #343F44;
      --surface2: #3D484D;
      --border: #3D484D;
      --border-bright: #475258;
      --text: #D3C6AA;
      --text-dim: #859289;

      --primary: #A7C080; /* Forest Sage */
      --primary-dim: rgba(167, 192, 128, 0.15);
      --secondary: #83C092; /* Aqua */
      --secondary-dim: rgba(131, 192, 146, 0.15);
      --tertiary: #7FBBB3; /* Blue */
      --tertiary-dim: rgba(127, 187, 179, 0.15);
      --accent: #DBBC7F; /* Amber */
    }
  }

  html[data-theme="dark"] {
    --bg: #2D353B;
    --surface: #343F44;
    --surface2: #3D484D;
    --border: #3D484D;
    --border-bright: #475258;
    --text: #D3C6AA;
    --text-dim: #859289;

    --primary: #A7C080;
    --primary-dim: rgba(167, 192, 128, 0.15);
    --secondary: #83C092;
    --secondary-dim: rgba(131, 192, 146, 0.15);
    --tertiary: #7FBBB3;
    --tertiary-dim: rgba(127, 187, 179, 0.15);
    --accent: #DBBC7F;
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
    max-width: 960px;
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
    padding: 6px 12px;
    border: 1px solid var(--border);
    background: var(--surface2);
    color: var(--text);
    font-family: var(--font-mono);
    font-size: 12px;
    cursor: pointer;
    border-radius: 3px;
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
    max-width: 960px;
    margin: 0 auto;
  }

  header {
    margin-bottom: 50px;
    text-align: center;
    border-bottom: 1px solid var(--border);
    padding-bottom: 36px;
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

  /* ============ CONTENT ============ */
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
    color: var(--text);
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
    padding: 36px 24px;
    overflow: auto;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .mermaid-wrap .mermaid {
    display: flex;
    justify-content: center;
    min-height: 480px;
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
    background: var(--surface2);
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

  /* ============ MERMAID SVG OVERRIDES (THE CARTOGRAPHER'S LEDGER) ============ */
  .mermaid svg {
    max-width: 100%;
    height: auto;
    font-family: var(--font-body) !important;
  }

  .mermaid .node rect,
  .mermaid .node polygon {
    rx: 3px !important;
    ry: 3px !important;
    stroke-width: 2px !important;
    transition: fill 0.25s ease, stroke 0.25s ease;
  }

  .mermaid .cluster rect {
    rx: 4px !important;
    ry: 4px !important;
    stroke-width: 2px !important;
    transition: fill 0.25s ease, stroke 0.25s ease;
  }

  .mermaid .cluster text,
  .mermaid .cluster-label span,
  .mermaid .cluster-label text {
    font-family: var(--font-body) !important;
    font-weight: 700 !important;
    letter-spacing: 0.04em !important;
    font-size: 13px !important;
  }

  .mermaid .node text,
  .mermaid .node .label {
    font-family: var(--font-body) !important;
    font-size: 12.5px !important;
    line-height: 1.4 !important;
  }

  .mermaid .edgeLabel {
    font-family: var(--font-mono) !important;
    font-size: 11px !important;
    font-weight: 500 !important;
    padding: 3px 7px !important;
    border-radius: 3px !important;
  }

  /* Light Theme Specific SVG Overrides */
  html[data-theme="light"] .mermaid .cluster rect {
    fill: #F4F1EA !important;
    stroke: #859289 !important;
  }
  html[data-theme="light"] .mermaid .cluster text,
  html[data-theme="light"] .mermaid .cluster-label span,
  html[data-theme="light"] .mermaid .cluster-label text {
    fill: #3A7D6E !important;
    color: #3A7D6E !important;
  }
  html[data-theme="light"] .mermaid .node rect {
    fill: #FFFFFF !important;
  }
  html[data-theme="light"] .mermaid .node text,
  html[data-theme="light"] .mermaid .node .label {
    fill: #2D353B !important;
    color: #2D353B !important;
  }
  html[data-theme="light"] .mermaid .cFoundations rect { stroke: #3B758C !important; }
  html[data-theme="light"] .mermaid .cMechanisms rect { stroke: #3A7D6E !important; }
  html[data-theme="light"] .mermaid .cSpatial rect { stroke: #9D6800 !important; }
  html[data-theme="light"] .mermaid .cRelational rect { stroke: #7D4E72 !important; }
  html[data-theme="light"] .mermaid .cOutcomes rect { stroke: #A34D3D !important; }
  html[data-theme="light"] .mermaid .cValidation rect { stroke: #357B62 !important; }
  html[data-theme="light"] .mermaid .edgePath path {
    stroke: #68736B !important;
    stroke-width: 2px !important;
  }
  html[data-theme="light"] .mermaid .edgeLabel {
    background-color: #EAE6DC !important;
    color: #2D353B !important;
    border: 1px solid #D3CEBE !important;
  }

  /* Dark Theme Specific SVG Overrides */
  html[data-theme="dark"] .mermaid .cluster rect {
    fill: #2D353B !important;
    stroke: #475258 !important;
  }
  html[data-theme="dark"] .mermaid .cluster text,
  html[data-theme="dark"] .mermaid .cluster-label span,
  html[data-theme="dark"] .mermaid .cluster-label text {
    fill: #A7C080 !important;
    color: #A7C080 !important;
  }
  html[data-theme="dark"] .mermaid .node rect {
    fill: #3D484D !important;
  }
  html[data-theme="dark"] .mermaid .node text,
  html[data-theme="dark"] .mermaid .node .label {
    fill: #D3C6AA !important;
    color: #D3C6AA !important;
  }
  html[data-theme="dark"] .mermaid .cFoundations rect { stroke: #7FBBB3 !important; }
  html[data-theme="dark"] .mermaid .cMechanisms rect { stroke: #A7C080 !important; }
  html[data-theme="dark"] .mermaid .cSpatial rect { stroke: #DBBC7F !important; }
  html[data-theme="dark"] .mermaid .cRelational rect { stroke: #D699B6 !important; }
  html[data-theme="dark"] .mermaid .cOutcomes rect { stroke: #E67E80 !important; }
  html[data-theme="dark"] .mermaid .cValidation rect { stroke: #83C092 !important; }
  html[data-theme="dark"] .mermaid .edgePath path {
    stroke: #859289 !important;
    stroke-width: 2px !important;
  }
  html[data-theme="dark"] .mermaid .edgeLabel {
    background-color: #2D353B !important;
    color: #A7C080 !important;
    border: 1px solid #475258 !important;
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

  /* ============ OVERFLOW & ZOOM ============ */
  .mermaid-wrap::-webkit-scrollbar { width: 8px; height: 8px; }
  .mermaid-wrap::-webkit-scrollbar-thumb { background: var(--border-bright); border-radius: 4px; }
  .mermaid-wrap.is-zoomed { cursor: grab; }
  .mermaid-wrap.is-panning { cursor: grabbing; user-select: none; }
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

  <div class="mermaid-section animate" style="--i:2">
    <h2>Conceptual Framework</h2>
    <div class="mermaid-wrap">
      <div class="zoom-controls">
        <button onclick="zoomDiagram(this, 1.2)" title="Zoom in">+</button>
        <button onclick="zoomDiagram(this, 0.8)" title="Zoom out">&minus;</button>
        <button onclick="resetZoom(this)" title="Reset zoom">&#8634;</button>
      </div>
      <div class="mermaid" id="diagram-container"></div>
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

<!-- Raw Diagram Source Template -->
<template id="mermaid-raw">
flowchart TD
  subgraph Foundations ["1. Ontological Foundations"]
      S["Simmel 2007: Social Fact"]:::cFoundations --> A["Abbott 1995: Boundaries precede Entities"]:::cFoundations
      A --> LM["Lamont & Molnár 2002: Symbolic vs. Social"]:::cFoundations
  end

  subgraph Mechanisms ["2. Generative Mechanisms"]
      T["Tilly 2004: Encounter, Imposition, Activation"]:::cMechanisms
      BW["Boundary Work & Social Closure"]:::cMechanisms
  end

  subgraph Spatial ["3. Physical & Spatial Expression"]
      PB["Physical Barriers: Highways/Railroads"]:::cSpatial --> SF["Social Frontiers: Abrupt Discontinuities"]:::cSpatial
      Ai["Aiello 2024 / Chyn 2023"]:::cSpatial --> PB
      IP["Iyer & Pryce 2024 / Legewie 2018"]:::cSpatial --> SF
  end

  subgraph Relational ["4. Theoretical Lens"]
      R["Relational Space: Löw 2017"]:::cRelational
  end

  subgraph Outcomes ["5. Empirical Consequences"]
      C["Crime & Conflict: Legewie 2018"]:::cOutcomes
      H["Health & Wellbeing: Lee 2025"]:::cOutcomes
      M["Mobility & Capital: Chyn 2023"]:::cOutcomes
  end

  Foundations --> Mechanisms
  Mechanisms --> Spatial
  Spatial --> Outcomes
  Relational -. Informs .-> Foundations
  Relational -. Informs .-> Spatial
  
  V["Validation: Zhang 2024 Areal Wombling"]:::cValidation -. Checks .-> Spatial

  classDef cFoundations stroke:#7FBBB3,stroke-width:2px;
  classDef cMechanisms stroke:#A7C080,stroke-width:2px;
  classDef cSpatial stroke:#DBBC7F,stroke-width:2px;
  classDef cRelational stroke:#D699B6,stroke-width:2px;
  classDef cOutcomes stroke:#E67E80,stroke-width:2px;
  classDef cValidation stroke:#83C092,stroke-width:2px,stroke-dasharray: 4 3;
</template>

<script type="module">
  import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs';
  import elkLayouts from 'https://cdn.jsdelivr.net/npm/@mermaid-js/layout-elk/dist/mermaid-layout-elk.esm.min.mjs';

  mermaid.registerLayoutLoaders(elkLayouts);

  // Synchronize site theme from localStorage or system preference
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

  // Dynamic Theme-Calibrated Mermaid Renderer
  async function renderDiagram() {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    var container = document.getElementById('diagram-container');
    var rawTpl = document.getElementById('mermaid-raw');
    if (!container || !rawTpl) return;

    var rawSrc = rawTpl.innerHTML.trim();
    container.removeAttribute('data-processed');
    container.innerHTML = '';

    mermaid.initialize({
      startOnLoad: false,
      theme: 'base',
      look: 'classic',
      layout: 'elk',
      themeVariables: isDark ? {
        darkMode: true,
        background: 'transparent',
        primaryColor: '#3D484D',
        primaryBorderColor: '#475258',
        primaryTextColor: '#D3C6AA',
        lineColor: '#859289',
        edgeLabelBackground: '#2D353B',
        clusterBkg: '#2D353B',
        clusterBorder: '#475258',
        titleColor: '#A7C080',
        textColor: '#D3C6AA',
        fontFamily: 'Inter, -apple-system, sans-serif',
        fontSize: '12.5px'
      } : {
        darkMode: false,
        background: 'transparent',
        primaryColor: '#FFFFFF',
        primaryBorderColor: '#D3CEBE',
        primaryTextColor: '#2D353B',
        lineColor: '#68736B',
        edgeLabelBackground: '#EAE6DC',
        clusterBkg: '#F4F1EA',
        clusterBorder: '#859289',
        titleColor: '#3A7D6E',
        textColor: '#2D353B',
        fontFamily: 'Inter, -apple-system, sans-serif',
        fontSize: '12.5px'
      }
    });

    try {
      var renderId = 'mermaid-' + Math.random().toString(36).substring(2, 9);
      var result = await mermaid.render(renderId, rawSrc);
      container.innerHTML = result.svg;
    } catch (err) {
      console.error('Mermaid rendering error:', err);
    }
  }

  // Initial render
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderDiagram);
  } else {
    renderDiagram();
  }

  // Theme Toggle Button Handler
  var toggleBtn = document.getElementById('theme-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function() {
      var nowDark = document.documentElement.getAttribute('data-theme') === 'dark';
      var nextTheme = nowDark ? 'light' : 'dark';
      localStorage.setItem('theme', nextTheme);
      applyTheme(nextTheme);
      renderDiagram();
    });
  }

  // System preference change listener
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
      if (!localStorage.getItem('theme')) {
        var sysTheme = e.matches ? 'dark' : 'light';
        applyTheme(sysTheme);
        renderDiagram();
      }
    });
  }
</script>

<script>
  function updateZoomState(wrap) {
    var target = wrap.querySelector('.mermaid');
    if (!target) return;
    var zoom = parseFloat(target.dataset.zoom || '1');
    wrap.classList.toggle('is-zoomed', zoom > 1);
  }
  function zoomDiagram(btn, factor) {
    var wrap = btn.closest('.mermaid-wrap');
    var target = wrap.querySelector('.mermaid');
    if (!target) return;
    var current = parseFloat(target.dataset.zoom || '1');
    var next = Math.min(Math.max(current * factor, 0.3), 5);
    target.dataset.zoom = next;
    target.style.transform = 'scale(' + next + ')';
    updateZoomState(wrap);
  }
  function resetZoom(btn) {
    var wrap = btn.closest('.mermaid-wrap');
    var target = wrap.querySelector('.mermaid');
    if (!target) return;
    target.dataset.zoom = '1';
    target.style.transform = 'scale(1)';
    updateZoomState(wrap);
  }
  document.querySelectorAll('.mermaid-wrap').forEach(function(wrap) {
    wrap.addEventListener('wheel', function(e) {
      if (!e.ctrlKey && !e.metaKey) return;
      e.preventDefault();
      var target = wrap.querySelector('.mermaid');
      if (!target) return;
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
      if (!target || parseFloat(target.dataset.zoom || '1') <= 1) return;
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
