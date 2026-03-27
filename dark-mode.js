// SureVera Toolkit — Dark Mode Toggle
// Uses the app's C_DARK palette: BG #0D1B2E, SURFACE #132240, SURFACE_HIGH #1A3060
(function () {
  const STORAGE_KEY = "surevera-toolkit-dark-mode";

  // Check saved preference or system preference
  function getPreference() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== null) return saved === "true";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  }

  function applyTheme(dark) {
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    localStorage.setItem(STORAGE_KEY, dark);
    // Update toggle button if it exists
    const btn = document.getElementById("dark-mode-toggle");
    if (btn) {
      btn.innerHTML = dark
        ? `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>`
        : `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`;
    }
  }

  // Apply immediately to prevent flash
  applyTheme(getPreference());

  // Inject CSS variables
  const style = document.createElement("style");
  style.textContent = `
    :root, [data-theme="light"] {
      --tk-bg: #F0F3F8;
      --tk-bg-page: #F0F3F8;
      --tk-surface: #FFFFFF;
      --tk-surface-high: #F9FAFB;
      --tk-text: #1E293B;
      --tk-text-sec: #64748B;
      --tk-text-muted: #94A3B8;
      --tk-border: #E2E8F0;
      --tk-border-strong: #CBD5E1;
      --tk-card-shadow: 0 1px 4px rgba(0,0,0,0.06);
      --tk-card-hover-shadow: 0 12px 30px rgba(0,0,0,0.08);
      --tk-input-bg: #F8FAFC;
      --tk-drop-border: #94A3B8;
      --tk-drop-hover-bg: #FFF7F3;
      --tk-drop-hover-border: #E8612A;
      --tk-toolbar-grad: linear-gradient(135deg, #0D1B2E 0%, #1B3A6B 100%);
      --tk-navy: #1B3A6B;
      --tk-navy-dark: #0D1B2E;
    }

    [data-theme="dark"] {
      --tk-bg: #0D1B2E;
      --tk-bg-page: #0A1422;
      --tk-surface: #132240;
      --tk-surface-high: #1A3060;
      --tk-text: #FFFFFF;
      --tk-text-sec: #8B9EC7;
      --tk-text-muted: #5A6E99;
      --tk-border: rgba(255,255,255,0.10);
      --tk-border-strong: rgba(255,255,255,0.20);
      --tk-card-shadow: 0 1px 4px rgba(0,0,0,0.3);
      --tk-card-hover-shadow: 0 12px 30px rgba(0,0,0,0.4);
      --tk-input-bg: #1A3060;
      --tk-drop-border: #5A6E99;
      --tk-drop-hover-bg: #1A3060;
      --tk-drop-hover-border: #E8612A;
      --tk-toolbar-grad: linear-gradient(135deg, #060E1A 0%, #0D1B2E 100%);
      --tk-navy: #2557D6;
      --tk-navy-dark: #0D1B2E;
    }

    /* ── Global overrides using CSS variables ── */
    [data-theme="dark"] body {
      background: var(--tk-bg-page) !important;
      color: var(--tk-text) !important;
    }

    [data-theme="dark"] .toolbar {
      background: var(--tk-toolbar-grad) !important;
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }

    /* Cards, controls, panels */
    [data-theme="dark"] .controls,
    [data-theme="dark"] .result-card,
    [data-theme="dark"] .tool-card,
    [data-theme="dark"] .feature-card,
    [data-theme="dark"] section.stats,
    [data-theme="dark"] .card,
    [data-theme="dark"] [class*="card"],
    [data-theme="dark"] [class*="panel"] {
      background: var(--tk-surface) !important;
      border-color: var(--tk-border) !important;
      box-shadow: var(--tk-card-shadow) !important;
      color: var(--tk-text) !important;
    }

    [data-theme="dark"] .tool-card:hover {
      box-shadow: var(--tk-card-hover-shadow) !important;
    }

    /* Text */
    [data-theme="dark"] h1,
    [data-theme="dark"] h2,
    [data-theme="dark"] h3,
    [data-theme="dark"] h4 {
      color: var(--tk-text) !important;
    }

    [data-theme="dark"] p,
    [data-theme="dark"] label,
    [data-theme="dark"] .subtitle,
    [data-theme="dark"] .stat-label,
    [data-theme="dark"] .cities-more {
      color: var(--tk-text-sec) !important;
    }

    [data-theme="dark"] .footer {
      color: var(--tk-text-muted) !important;
    }

    [data-theme="dark"] .section-title {
      color: var(--tk-text) !important;
    }

    [data-theme="dark"] .section-label {
      color: #E8612A !important;
    }

    /* Inputs & selects */
    [data-theme="dark"] select,
    [data-theme="dark"] input[type="text"],
    [data-theme="dark"] input[type="url"],
    [data-theme="dark"] input[type="email"],
    [data-theme="dark"] textarea {
      background: var(--tk-input-bg) !important;
      color: var(--tk-text) !important;
      border-color: var(--tk-border-strong) !important;
    }

    [data-theme="dark"] select option {
      background: var(--tk-surface);
      color: var(--tk-text);
    }

    /* Drop zones */
    [data-theme="dark"] .drop-zone {
      background: var(--tk-surface) !important;
      border-color: var(--tk-drop-border) !important;
      color: var(--tk-text-sec) !important;
    }
    [data-theme="dark"] .drop-zone:hover,
    [data-theme="dark"] .drop-zone.drag-over {
      background: var(--tk-drop-hover-bg) !important;
      border-color: var(--tk-drop-hover-border) !important;
    }
    [data-theme="dark"] .drop-zone p {
      color: var(--tk-text-sec) !important;
    }

    /* Sections with gray backgrounds */
    [data-theme="dark"] .problem,
    [data-theme="dark"] .screenshots,
    [data-theme="dark"] .cities,
    [data-theme="dark"] section[class] {
      background: var(--tk-bg-page) !important;
    }

    /* Override specific white/light backgrounds */
    [data-theme="dark"] .features,
    [data-theme="dark"] .grades {
      background: var(--tk-bg) !important;
    }

    /* Screenshot slots */
    [data-theme="dark"] .screenshot-slot {
      background: var(--tk-surface) !important;
      border-color: var(--tk-text-muted) !important;
    }
    [data-theme="dark"] .screenshot-slot .placeholder {
      color: var(--tk-text-muted) !important;
    }

    /* City tags */
    [data-theme="dark"] .city-tag {
      background: var(--tk-surface) !important;
      border-color: var(--tk-border) !important;
      color: var(--tk-text-sec) !important;
    }
    [data-theme="dark"] .city-tag:hover {
      border-color: #4B7BF5 !important;
      color: #4B7BF5 !important;
    }

    /* Grade pills */
    [data-theme="dark"] .grade-pill.grade-a { background: #0D2818 !important; }
    [data-theme="dark"] .grade-pill.grade-b { background: #1C1400 !important; }
    [data-theme="dark"] .grade-pill.grade-c { background: #1C0A00 !important; }
    [data-theme="dark"] .grade-pill.grade-f { background: #2D0A0A !important; }
    [data-theme="dark"] .grade-pill .label { opacity: 0.9; }

    /* Stat numbers */
    [data-theme="dark"] .stat-number {
      color: #4B7BF5 !important;
    }

    /* Feature icons keep their colors */

    /* Nav */
    [data-theme="dark"] nav {
      background: rgba(13, 27, 46, 0.95) !important;
      border-bottom-color: rgba(255,255,255,0.06) !important;
    }
    [data-theme="dark"] nav.scrolled {
      box-shadow: 0 2px 20px rgba(0,0,0,0.3) !important;
    }
    [data-theme="dark"] .nav-links a {
      color: var(--tk-text-sec) !important;
    }
    [data-theme="dark"] .nav-links a:hover {
      color: var(--tk-text) !important;
    }

    /* Dropdown menu (toolkit nav) */
    [data-theme="dark"] .nav-dropdown-menu {
      background: var(--tk-surface) !important;
      border-color: var(--tk-border) !important;
      box-shadow: 0 12px 40px rgba(0,0,0,0.5) !important;
    }
    [data-theme="dark"] .nav-dropdown-menu a {
      color: var(--tk-text-sec) !important;
    }
    [data-theme="dark"] .nav-dropdown-menu a:hover {
      background: var(--tk-surface-high) !important;
    }
    [data-theme="dark"] .nav-dropdown-menu a.active {
      background: var(--tk-surface-high) !important;
      color: #4B7BF5 !important;
    }
    [data-theme="dark"] .nav-dropdown-menu a.active svg {
      stroke: #4B7BF5 !important;
    }

    /* Buttons keep their brand colors */
    [data-theme="dark"] .download-btn {
      background: #2557D6 !important;
    }
    [data-theme="dark"] .download-btn:hover {
      background: #1E4ABF !important;
    }

    /* Links page special handling */
    [data-theme="dark"] .links-page {
      background: linear-gradient(180deg, #0A1422 0%, #0D1B2E 100%) !important;
    }

    /* Size cards / preset buttons */
    [data-theme="dark"] [class*="size-card"],
    [data-theme="dark"] [class*="preset"],
    [data-theme="dark"] [class*="chip"]:not(.added),
    [data-theme="dark"] [class*="tag"],
    [data-theme="dark"] [class*="pill-btn"],
    [data-theme="dark"] [class*="tab-btn"]:not(.active),
    [data-theme="dark"] [class*="sample"] {
      background: var(--tk-surface) !important;
      border-color: var(--tk-border) !important;
      color: var(--tk-text-sec) !important;
    }

    /* Keyword chip added state — green highlight in dark mode */
    [data-theme="dark"] .keyword-chip.added {
      border-color: #16A34A !important;
      color: #16A34A !important;
      background: rgba(22, 163, 74, 0.15) !important;
    }

    /* Active tab button in dark mode */
    [data-theme="dark"] .tab-btn.active {
      background: #1B3A6B !important;
      border-color: #1B3A6B !important;
      color: #FFFFFF !important;
    }

    /* Copy button copied state in dark mode */
    [data-theme="dark"] .copy-btn.copied {
      border-color: #16A34A !important;
      color: #16A34A !important;
      background: rgba(22, 163, 74, 0.15) !important;
    }

    /* Copy all button copied state in dark mode */
    [data-theme="dark"] .copy-all-btn.copied {
      background: linear-gradient(135deg, #16A34A 0%, #15803D 100%) !important;
    }

    /* Toggle button styling */
    #dark-mode-toggle {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 34px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      color: rgba(255,255,255,0.85);
      cursor: pointer;
      transition: background 0.2s;
      flex-shrink: 0;
    }
    #dark-mode-toggle:hover {
      background: rgba(255,255,255,0.18);
    }

    /* Smooth transition */
    body, .toolbar, .controls, .result-card, .tool-card, .drop-zone,
    .nav-dropdown-menu, nav, select, input, textarea {
      transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
    }
  `;
  document.head.appendChild(style);

  // Wait for DOM, then inject toggle button into toolbar nav
  function injectToggle() {
    // Try to find the toolbar-nav (added by toolkit-nav.js)
    let navArea = document.querySelector(".toolbar-nav");
    if (!navArea) {
      // If no toolbar-nav yet, attach to toolbar directly
      const toolbar = document.querySelector(".toolbar");
      if (!toolbar) return;
      navArea = document.createElement("div");
      navArea.style.cssText = "position:absolute;right:2rem;top:50%;transform:translateY(-50%);display:flex;align-items:center;gap:0.5rem;";
      toolbar.style.position = "relative";
      toolbar.appendChild(navArea);
    }

    const toggle = document.createElement("button");
    toggle.id = "dark-mode-toggle";
    toggle.title = "Toggle dark mode";
    toggle.setAttribute("aria-label", "Toggle dark mode");
    navArea.insertBefore(toggle, navArea.firstChild);

    // Set initial icon
    applyTheme(getPreference());

    toggle.addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      applyTheme(!isDark);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => setTimeout(injectToggle, 50));
  } else {
    setTimeout(injectToggle, 50);
  }
})();
