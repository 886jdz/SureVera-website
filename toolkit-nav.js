// SureVera Toolkit — shared navigation with categories
(function () {
  const categories = [
    { label: "Marketing", items: [
      { name: "Phone Mockups", href: "mockup-tool.html", icon: "M5 2h14a2 2 0 012 2v16a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2 0 012-2z" },
      { name: "Store Screenshots", href: "screenshot-builder.html", icon: "M3 3h18v18H3zM8.5 8.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" },
      { name: "Social Templates", href: "social-templates.html", icon: "M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z" },
      { name: "Banner Ads", href: "banner-creator.html", icon: "M2 7h20v10H2zM12 17v4M8 21h8" },
      { name: "QR Codes", href: "qr-generator.html", icon: "M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h3v3h-3z" },
      { name: "City Cards", href: "city-cards.html", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z" },
      { name: "Review Cards", href: "review-cards.html", icon: "M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" },
    ]},
    { label: "Content & Growth", items: [
      { name: "Content Calendar", href: "content-calendar.html", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
      { name: "Store Listing", href: "store-listing.html", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
      { name: "Release Notes", href: "release-notes.html", icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" },
      { name: "Competitors", href: "competitor-board.html", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
      { name: "Revenue Calc", href: "revenue-calculator.html", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    ]},
    { label: "Operations", items: [
      { name: "Launch Checklist", href: "launch-checklist.html", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
      { name: "SureVera Rebrand", href: "rebrand-checklist.html", icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" },
      { name: "City Planner", href: "city-planner.html", icon: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0zM12 13a3 3 0 100-6 3 3 0 000 6z" },
      { name: "City Data Sources", href: "city-data.html", icon: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" },
      { name: "Outreach Toolkit", href: "outreach-toolkit.html", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
      { name: "Outreach Tracker", href: "outreach-tracker.html", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
      { name: "Incident Log", href: "incident-log.html", icon: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" },
      { name: "Infrastructure", href: "infrastructure.html", icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" },
      { name: "Dev Log", href: "dev-log.html", icon: "M4 6h16M4 10h16M4 14h16M4 18h16" },
    ]},
    { label: "Support", items: [
      { name: "FAQ Builder", href: "faq-builder.html", icon: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
      { name: "Support Templates", href: "canned-responses.html", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
    ]},
    { label: "Brand & Legal", items: [
      { name: "Brand Kit", href: "brand-kit.html", icon: "M12 2L2 7l10 5 10-5zM2 17l10 5 10-5M2 12l10 5 10-5" },
      { name: "Press Kit", href: "press-kit.html", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2" },
      { name: "Legal Reference", href: "legal-reference.html", icon: "M3 6l9-4 9 4v12l-9 4-9-4V6zM12 2v20" },
      { name: "Link in Bio", href: "links.html", icon: "M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" },
    ]},
    { label: "External", items: [
      { name: "Admin Dashboard", href: "https://surebite-api-production-fb8f.up.railway.app/admin", icon: "M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z", external: true },
    ]},
  ];

  // Flatten for current-page detection
  const allTools = categories.flatMap(c => c.items);
  const currentPath = window.location.pathname.split("/").pop() || "toolkit.html";

  // Inject CSS
  const style = document.createElement("style");
  style.textContent = `
    .toolbar { position: relative; }
    .toolbar-nav {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
      position: absolute;
      right: 2rem;
      top: 50%;
      transform: translateY(-50%);
    }
    .nav-home-btn {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.9rem;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      color: rgba(255,255,255,0.85);
      font-size: 0.8rem;
      font-weight: 600;
      font-family: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: background 0.2s;
    }
    .nav-home-btn:hover { background: rgba(255,255,255,0.18); }
    .nav-home-btn svg { width: 16px; height: 16px; }

    .nav-dropdown-wrapper { position: relative; }
    .nav-dropdown-btn {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      padding: 0.4rem 0.9rem;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 8px;
      color: rgba(255,255,255,0.85);
      font-size: 0.8rem;
      font-weight: 600;
      font-family: inherit;
      cursor: pointer;
      transition: background 0.2s;
    }
    .nav-dropdown-btn:hover { background: rgba(255,255,255,0.18); }
    .nav-dropdown-btn svg { width: 14px; height: 14px; transition: transform 0.2s; }
    .nav-dropdown-wrapper.open .nav-dropdown-btn svg { transform: rotate(180deg); }

    .nav-dropdown-menu {
      display: none;
      position: absolute;
      top: calc(100% + 8px);
      right: 0;
      background: #FFF;
      border: 1px solid #E2E8F0;
      border-radius: 12px;
      box-shadow: 0 12px 40px rgba(0,0,0,0.12);
      min-width: 240px;
      max-height: 70vh;
      overflow-y: auto;
      padding: 0.4rem;
      z-index: 1000;
    }
    .nav-dropdown-wrapper.open .nav-dropdown-menu { display: block; }

    .nav-dropdown-menu::-webkit-scrollbar { width: 6px; }
    .nav-dropdown-menu::-webkit-scrollbar-track { background: transparent; }
    .nav-dropdown-menu::-webkit-scrollbar-thumb { background: #CBD5E1; border-radius: 3px; }

    .nav-cat-label {
      padding: 0.5rem 0.75rem 0.25rem;
      font-size: 0.65rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #94A3B8;
      user-select: none;
    }
    .nav-cat-label:not(:first-child) {
      margin-top: 0.25rem;
      border-top: 1px solid #F1F5F9;
      padding-top: 0.6rem;
    }

    .nav-dropdown-menu a {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      padding: 0.45rem 0.75rem;
      border-radius: 8px;
      text-decoration: none;
      color: #334155;
      font-size: 0.8rem;
      font-weight: 500;
      transition: background 0.15s;
    }
    .nav-dropdown-menu a:hover { background: #F1F5F9; }
    .nav-dropdown-menu a.active {
      background: #EFF6FF;
      color: #1B3A6B;
      font-weight: 600;
    }
    .nav-dropdown-menu a svg {
      width: 16px;
      height: 16px;
      flex-shrink: 0;
      stroke: #64748B;
    }
    .nav-dropdown-menu a.active svg { stroke: #1B3A6B; }

    @media (max-width: 600px) {
      .toolbar-nav { right: 1rem; }
      .nav-home-btn span { display: none; }
    }
  `;
  document.head.appendChild(style);

  // Build nav HTML
  const toolbar = document.querySelector(".toolbar");
  if (!toolbar) return;

  const nav = document.createElement("div");
  nav.className = "toolbar-nav";

  // Home button
  const homeLink = document.createElement("a");
  homeLink.href = "toolkit.html";
  homeLink.className = "nav-home-btn";
  homeLink.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0h4"/></svg><span>Home</span>`;

  // Dropdown wrapper
  const wrapper = document.createElement("div");
  wrapper.className = "nav-dropdown-wrapper";

  const btn = document.createElement("button");
  btn.className = "nav-dropdown-btn";
  btn.innerHTML = `Tools <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;

  const menu = document.createElement("div");
  menu.className = "nav-dropdown-menu";

  // Build categorized menu
  categories.forEach((cat) => {
    const label = document.createElement("div");
    label.className = "nav-cat-label";
    label.textContent = cat.label;
    menu.appendChild(label);

    cat.items.forEach((tool) => {
      const a = document.createElement("a");
      a.href = tool.href;
      if (tool.external) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
      if (tool.href === currentPath) a.className = "active";
      const extIcon = tool.external ? ` <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="opacity:0.4;margin-left:auto"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>` : "";
      a.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${tool.icon}"/></svg>${tool.name}${extIcon}`;
      menu.appendChild(a);
    });
  });

  wrapper.appendChild(btn);
  wrapper.appendChild(menu);
  nav.appendChild(homeLink);
  nav.appendChild(wrapper);
  toolbar.appendChild(nav);

  // Toggle dropdown
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    wrapper.classList.toggle("open");
  });

  // Close on outside click
  document.addEventListener("click", () => {
    wrapper.classList.remove("open");
  });
  menu.addEventListener("click", (e) => e.stopPropagation());
})();
