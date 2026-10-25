---
name: "Andrei Wong Espejo Design System"
description: "Precision, grid-structured design system for urban geography research."
colors:
  primary: "#A7C080"
  secondary: "#83C092"
  tertiary: "#7FBBB3"
  accent-yellow: "#DBBC7F"
  accent-yellow-light: "#9D6800"
  neutral-bg: "#2D353B"
  neutral-bg-light: "#343F44"
  neutral-bg-lighter: "#3D484D"
  neutral-text: "#D3C6AA"
  neutral-text-muted: "#859289"
typography:
  display:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "2.441em"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "1em"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  default: "4px"
  sm: "3px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  default: "16px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-bg}"
    rounded: "{rounded.full}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
---

# Design System: Andrei Wong Espejo

## 1. Overview

**Creative North Star: "The Cartographer's Ledger 2.0"**

This system represents a technical, structured, and data-driven approach to personal academic branding. Drawing inspiration from geographical coordinates, spatial data cells, and topographic maps, the interface avoids decorative SaaS embellishments in favor of precise structural grids, highly readable tabular layout systems, and a soft forest-inspired palette.

### Key Characteristics:
- **Structural Gridlines**: Section boundaries and tabular data use thin, clean borders to segment information like a spreadsheet or ledger.
- **Topographic Color Scheme**: Grounded in the Everforest palette, leveraging warm charcoal surfaces and sage green highlights to represent natural geography.
- **High Information Density**: Content-dense CV grids, lists, and directories are clearly aligned without unnecessary card enclosures.
- **Double-Bezel Architecture**: Machined nested framing (12px outer shell, 8px inner core) for primary research initiatives.

## 2. Colors

The color palette is derived from the Everforest Medium Dark scheme, presenting a high-contrast but soft, warm-tone technical aesthetic that maximizes reading comfort.

### Primary
- **Forest Sage** (#A7C080): Used for primary action buttons, main hyperlinks, and high-visibility status cues.

### Secondary
- **Everforest Aqua** (#83C092): Used for secondary states, hover states, and interactive accents.

### Tertiary
- **Everforest Blue** (#7FBBB3): Used for visited links, spatial method tags, and category pills.

### Accent Yellow
- **Everforest Yellow** (#DBBC7F / light #9D6800): Used for prominent scholarly subtitles, active research highlights, and warm typographic contrast.

### Neutral
- **Warm Charcoal Base** (#2D353B): The main body background.
- **Charcoal Panel** (#343F44): Used for sidebar widgets, navigation bars, and contained list sections.
- **Charcoal Border** (#3D484D): The border color for tables, grid segments, and outline buttons.
- **Warm Off-White** (#D3C6AA): The primary body and heading text color.
- **Muted Topographic Gray** (#859289): Used for metadata, captions, and secondary label text.

### Named Rules
**The Rarity of Green Rule.** The primary Forest Sage green (#A7C080) is reserved strictly for active elements and links. It should cover no more than 10% of any screen surface to maintain its highlighting power.

**The Natural Contrast Rule.** Never use pure black (#000000) or pure white (#FFFFFF). Contrast is always established through the organic warm grays and off-whites of the Everforest palette.

## 3. Typography

**Display Font:** Inter, -apple-system, sans-serif  
**Body Font:** Inter, -apple-system, sans-serif  
**Mono / Coordinate Font:** JetBrains Mono, Monaco, Consolas, monospace  

The typeface is a unified sans-serif stack utilizing "Inter" for its technical clarity, clean tracking, and legibility at high information densities.

### Hierarchy
- **Display** (800, clamp(2rem, 4vw, 2.85rem), 1.15, -0.03em): Used for the site header and main page titles (h1).
- **Headline** (600, 1.953em, 1.3): Used for section titles (h2).
- **Title** (500, 1.563em, 1.4): Used for subsection headers (h3).
- **Body** (400, 1em, 1.6): Used for all descriptive paragraphs and CV descriptions. Max line length: 65ch.
- **Label** (500, 0.75em, 0.05em): Used for dates, metadata, categories, and tags.

### Named Rules
**The Inter-Align Rule.** All typography must align strictly to the base 4px grid to maintain the structural appearance of a data grid.

## 4. Elevation & Shapes

The system is flat by default to reflect the aesthetic of a printed map ledger. Shadows are entirely structural and minimal.

### Rounded Vocabulary:
- **Pills / CTAs**: `rounded-full` (`9999px`)
- **Outer Double-Bezel**: `12px`
- **Inner Core / Hero Panels**: `8px`
- **Ledger Boxes / Modals**: `6px`
- **Default Buttons / Tags**: `4px`
- **Micro Badges**: `3px`

### Named Rules
**Tonal Layering Rule.** Use background colors (Warm Charcoal Base vs. Charcoal Panel) to isolate modules. Do not use generic drop shadows to represent cards or hover elevations.

## 5. Components

### Buttons
- **Shape**: Rounded full pill (`9999px`) with trailing circular icon container.
- **Primary**: Forest Sage background (#A7C080) with Charcoal text (#2D353B), padded (10px 20px).
- **Hover / Focus**: Transition to Everforest Aqua (#83C092) with spring physics (`cubic-bezier(0.32, 0.72, 0, 1)`).

### Navigation
- **Style**: Contained header or sidebar with sharp text links, using Forest Sage (#A7C080) for active/hover states, with built-in tactile sound toggle and theme switch.

### Data Tables / Work Ledger
- **Style**: Thin borders (#3D484D) separating academic publications, datasets, and CV entries in a grid.
- **Hover**: Background changes to Charcoal Panel (#343F44) on row hover.
