/* =============================================================================
   Site script — builds the tab bar, footer, and every list from the files in
   data/. You shouldn't need to edit this file to update content.

   How it works: an element like <div data-render="news"></div> in a page is
   filled by the matching function in RENDER below.
   ============================================================================= */
(function () {
  "use strict";

  // ---------------------------------------------------------------- helpers --
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Read a top-level `const` from a data file (undefined if the file failed to load).
  function data(name) {
    try { return new Function("return typeof " + name + " !== 'undefined' ? " + name + " : undefined")(); }
    catch (e) { return undefined; }
  }

  function icon(name, cls) {
    const def = (typeof ICONS !== "undefined" && ICONS[name]) || null;
    if (!def) return "";
    const [kind, body] = def;
    const paint = kind === "f"
      ? 'fill="currentColor"'
      : 'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"';
    return `<svg class="icon${cls ? " " + cls : ""}" viewBox="0 0 24 24" ${paint} aria-hidden="true">${body}</svg>`;
  }

  function attr(s) { return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;"); }
  function strip(html) { const d = document.createElement("div"); d.innerHTML = html; return d.textContent || ""; }
  function link(text, url) { return url ? `<a href="${attr(url)}">${text}</a>` : text; }
  function month(date) {
    const [, m, d] = String(date).split("-");
    return m ? MONTHS[+m - 1] + (d ? " " + (+d) : "") : "";
  }

  function dataError(file) {
    return `<div class="data-error">Couldn't read <code>${file}</code>. It may have a small typo
      (a missing comma, bracket or quote). Open the browser console (F12) to see the line number.</div>`;
  }

  let uid = 0;
  // Wraps list items so everything after `visible` sits behind a "Show more" button.
  // items: [{ html, sep }]  — `sep` items (e.g. year headers) never count toward `visible`.
  function collapsible(tag, cls, items, visible, what) {
    const id = "list-" + (++uid);
    let shown = 0, extra = 0, out = [];
    items.forEach((it, i) => {
      let isExtra;
      if (it.sep) {
        // a separator is hidden if the next real item is hidden
        const nextShown = shown < visible;
        isExtra = !nextShown;
      } else {
        isExtra = shown >= visible;
        if (isExtra) extra++; else shown++;
      }
      out.push(isExtra ? it.html.replace(/^<li/, "<li data-extra hidden") : it.html);
    });
    let html = `<${tag} class="${cls}" id="${id}">${out.join("")}</${tag}>`;
    if (extra > 0) {
      const more = what ? `Show all ${what} (${extra} more)` : `Show ${extra} more`;
      const less = what ? `Show fewer ${what}` : "Show less";
      html += `<button class="more" type="button" aria-expanded="false" aria-controls="${id}"
        data-more="${more}" data-less="${less}"><span>${more}</span>${icon("chevron-down")}</button>`;
    }
    return html;
  }

  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".more[aria-controls]");
    if (!btn) return;
    const list = document.getElementById(btn.getAttribute("aria-controls"));
    const open = btn.getAttribute("aria-expanded") !== "true";
    list.querySelectorAll("[data-extra]").forEach((el) => { el.hidden = !open; });
    btn.setAttribute("aria-expanded", String(open));
    btn.querySelector("span").textContent = btn.dataset[open ? "less" : "more"];
  });

  function fold(title, count, body, open, extraAttrs) {
    return `<details class="fold"${open ? " open" : ""}${extraAttrs || ""}>
      <summary><span class="fold-title">${title}</span>${count != null ? `<span class="count">${count}</span>` : ""}${icon("chevron-down", "chev")}</summary>
      <div class="fold-body">${body}</div></details>`;
  }

  function hydrateIcons(root) {
    (root || document).querySelectorAll("[data-icon]").forEach((el) => {
      el.outerHTML = icon(el.getAttribute("data-icon"), el.getAttribute("class") || "");
    });
  }

  // ------------------------------------------------------------- chrome ------
  function renderTopbar() {
    const site = data("SITE");
    if (!site) return;
    const page = document.body.dataset.page;
    const tabs = site.nav.map((t) =>
      `<a class="tab" href="${t.href}"${t.id === page ? ' aria-current="page"' : ""}>${t.label}${
        t.id === "group" && site.hiring ? '<span class="dot" title="We\'re hiring"></span>' : ""}</a>`).join("");
    const bar = document.createElement("header");
    bar.className = "topbar";
    bar.innerHTML = `<div class="topbar-inner">
        <a class="brand" href="index.html"><img src="images/favicon.svg" alt="">${site.name}</a>
        <nav class="tabs" aria-label="Main">${tabs}
          <a class="tab tab-cv" href="${site.cv}">${icon("download")}CV</a>
        </nav>
      </div>`;
    document.body.prepend(bar);
    const active = bar.querySelector('[aria-current="page"]');
    if (active && active.scrollIntoView && window.innerWidth < 920) {
      bar.querySelector(".tabs").scrollLeft = active.offsetLeft - 16;
    }
  }

  function renderFooter() {
    const site = data("SITE");
    if (!site) return;
    const f = document.createElement("footer");
    f.className = "footer";
    const social = site.links.filter((l) => l.icon.startsWith("brand-") || l.icon === "mail")
      .map((l) => `<a href="${attr(l.href)}" aria-label="${attr(l.label)}" title="${attr(l.label)}">${icon(l.icon)}</a>`).join("");
    f.innerHTML = `<div class="footer-inner">
      <span>© ${new Date().getFullYear()} ${site.name} · Last updated ${site.lastUpdated}</span>
      <span class="footer-links">${social}</span></div>`;
    document.body.append(f);
  }

  // ------------------------------------------------------------ renderers ----
  const RENDER = {};

  RENDER.links = function (el) {
    const site = data("SITE");
    if (!site) return dataError("data/site.js");
    return site.links.map((l) => `<a class="pill" href="${attr(l.href)}">${icon(l.icon)}${l.label}</a>`).join("");
  };

  RENDER.hiring = function (el) {
    const site = data("SITE");
    return site && site.hiring
      ? `<a class="hiring" href="group.html#join">${icon("user-plus")}We're hiring</a>` : "";
  };

  // News --------------------------------------------------------------------
  const NEWS_ICON = {
    award: ["trophy", "gold"], paper: ["file-text", ""], talk: ["mic", "green"], funding: ["hand-coins", "green"],
    service: ["users", "slate"], group: ["compass", ""], teaching: ["graduation-cap", "slate"], policy: ["landmark", "slate"],
  };
  RENDER.news = function () {
    const news = data("NEWS");
    if (!news) return dataError("data/news.js");
    const since = data("NEWS_SINCE") || 0;
    const visible = data("NEWS_VISIBLE") || 6;
    const items = [];
    let year = null;
    news.filter((n) => parseInt(n.date, 10) >= since).forEach((n) => {
      const y = parseInt(n.date, 10);
      if (y !== year) { year = y; items.push({ sep: true, html: `<li class="yr">${y}</li>` }); }
      const [ic, tone] = NEWS_ICON[n.type] || ["circle-dot", ""];
      items.push({ html: `<li><span class="when">${month(n.date)}</span>
        <span class="ico ${tone}">${icon(ic)}</span><div class="what">${n.text}</div></li>` });
    });
    return collapsible("ul", "dated", items, visible, "news");
  };

  // Background (home) -------------------------------------------------------
  RENDER.background = function () {
    const bg = data("BACKGROUND");
    if (!bg) return dataError("data/site.js");
    const col = (title, ic, list) => {
      const items = list.map((x) => ({ html: `<li><div class="d">${x.date}</div><div class="t">${x.title}</div>
        <div class="o">${x.org}</div>${x.note ? `<div class="n">${x.note}</div>` : ""}</li>` }));
      return `<div><h3 class="sub-title">${icon(ic)}${title}</h3>${collapsible("ul", "timeline", items, bg.show || 3, "")}</div>`;
    };
    return `<div class="cols">${col("Experience", "briefcase", bg.experience)}${col("Education", "graduation-cap", bg.education)}</div>`;
  };

  // Publications ------------------------------------------------------------
  const PUB_TYPES = [
    { id: "conference", label: "Conference" },
    { id: "journal", label: "Journal" },
    { id: "workshop", label: "Workshop" },
    { id: "preprint", label: "Preprint" },
  ];
  const LINKS = {
    paper: ["Paper", "file-text"], pdf: ["PDF", "file-text"], arxiv: ["arXiv", "file-text"],
    code: ["Code", "code"], data: ["Dataset", "database"], project: ["Project page", "globe"],
    blog: ["Blog", "pen-line"], slides: ["Slides", "presentation"], video: ["Video", "video"],
    poster: ["Poster", "layers"], challenge: ["Challenge", "flag"],
  };

  function authorsHTML(str) {
    const me = (data("SITE") || {}).me || "";
    const names = String(str).split(/\s*,\s*/).filter(Boolean);
    const fmt = (n) => (me && n.replace(/[*†‡]+$/, "") === me ? `<span class="me">${n}</span>` : n);
    const LIMIT = 9, HEAD = 6;
    if (names.length <= LIMIT) return names.map(fmt).join(", ");
    const mi = names.findIndex((n) => n.replace(/[*†‡]+$/, "") === me);
    let short = names.slice(0, HEAD).map(fmt).join(", ");
    if (mi >= HEAD) short += ", …, " + fmt(names[mi]);
    const hidden = names.length - HEAD - (mi >= HEAD ? 1 : 0);
    return `<span class="a-short">${short}, <button type="button" data-authors>+${hidden} more</button></span>` +
           `<span class="a-full" hidden>${names.map(fmt).join(", ")}</span>`;
  }
  document.addEventListener("click", (e) => {
    const b = e.target.closest("[data-authors]");
    if (!b) return;
    const box = b.closest(".pub-authors");
    box.querySelector(".a-short").hidden = true;
    box.querySelector(".a-full").hidden = false;
  });

  function pubHTML(p) {
    const links = p.links || {};
    const main = links.paper || links.pdf || links.arxiv;
    const awards = [].concat(p.award || []).map((a) => `<span class="award">${icon("trophy")}${a}</span>`).join("");
    const buttons = Object.keys(links).filter((k) => links[k]).map((k) => {
      const [label, ic] = LINKS[k] || [k, "link"];
      return `<a href="${attr(links[k])}">${icon(ic)}${label}</a>`;
    }).join("");
    const type = p.type || "conference";
    return `<article class="pub" data-type="${type}">
      <div><span class="venue ${type}">${p.venue}</span></div>
      <div>
        <div class="pub-title">${link(p.title, main)}${p.selected ? icon("star", "star") : ""}</div>
        <div class="pub-authors">${authorsHTML(p.authors)}</div>
        <div class="pub-meta"><span class="pub-venue">${p.venueFull || p.venue + " " + p.year}</span>${awards}</div>
        ${buttons ? `<div class="pub-links">${buttons}</div>` : ""}
      </div></article>`;
  }

  RENDER.publications = function (el) {
    const pubs = data("PUBLICATIONS");
    if (!pubs) return dataError("data/publications.js");
    const openYears = data("PUB_OPEN_YEARS") || 1;
    const state = { type: "all", selected: false, q: "" };

    const counts = { all: pubs.length };
    PUB_TYPES.forEach((t) => { counts[t.id] = pubs.filter((p) => (p.type || "conference") === t.id).length; });
    const nSelected = pubs.filter((p) => p.selected).length;

    const chips = [{ id: "all", label: "All" }].concat(PUB_TYPES).filter((t) => counts[t.id] > 0)
      .map((t) => `<button type="button" class="chip" data-type="${t.id}" aria-pressed="${t.id === "all"}">${t.label}<span class="n">${counts[t.id]}</span></button>`).join("");

    el.innerHTML = `
      <div class="toolbar">
        <label class="search">${icon("search")}<span class="visually-hidden">Search publications</span>
          <input type="search" placeholder="Search papers…" autocomplete="off"></label>
        <span class="sep"></span>
        <div class="chips" role="group" aria-label="Publication type">${chips}</div>
        <span class="sep"></span>
        ${nSelected ? `<button type="button" class="chip" data-selected aria-pressed="false">${icon("star")}Selected<span class="n">${nSelected}</span></button>` : ""}
      </div>
      <div class="legend">
        ${PUB_TYPES.filter((t) => counts[t.id]).map((t) => `<span><i class="${t.id}"></i>${t.label}</span>`).join("")}
        <span>* equal contribution</span>
        ${nSelected ? `<span>${icon("star", "star")} selected</span>` : ""}
      </div>
      <div class="pub-list"></div>`;
    const list = el.querySelector(".pub-list");

    function draw() {
      const q = state.q.trim().toLowerCase();
      const filtered = state.type !== "all" || state.selected || q;
      const match = pubs.filter((p) =>
        (state.type === "all" || (p.type || "conference") === state.type) &&
        (!state.selected || p.selected) &&
        (!q || strip([p.title, p.authors, p.venue, p.venueFull, p.year, [].concat(p.award || []).join(" ")].join(" ")).toLowerCase().includes(q)));
      if (!match.length) { list.innerHTML = `<p class="empty">No publications match.</p>`; return; }
      const years = [...new Set(match.map((p) => p.year))].sort((a, b) => b - a);
      const allYears = [...new Set(pubs.map((p) => p.year))].sort((a, b) => b - a);
      list.innerHTML = years.map((y) => {
        const items = match.filter((p) => p.year === y);
        const open = filtered || allYears.indexOf(y) < openYears;
        return fold(y, items.length + (items.length === 1 ? " paper" : " papers"), items.map(pubHTML).join(""), open);
      }).join("");
    }

    el.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      if (chip.hasAttribute("data-selected")) {
        state.selected = !state.selected;
        chip.setAttribute("aria-pressed", String(state.selected));
      } else {
        state.type = chip.dataset.type;
        el.querySelectorAll(".chip[data-type]").forEach((c) => c.setAttribute("aria-pressed", String(c === chip)));
      }
      draw();
    });
    el.querySelector("input").addEventListener("input", (e) => { state.q = e.target.value; draw(); });
    draw();
    return null; // already rendered
  };

  // Group --------------------------------------------------------------------
  const AVATAR_COLORS = ["#1e40af", "#059669", "#3b82f6", "#047857", "#1e3a8a", "#0f766e"];
  function initials(name) {
    const parts = name.split(/\s+/).filter(Boolean);
    return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : "")).toUpperCase();
  }
  function avatar(p) {
    if (p.photo) return `<img class="avatar" src="${attr(p.photo)}" alt="" loading="lazy">`;
    let h = 0; for (const c of p.name) h = (h * 31 + c.charCodeAt(0)) >>> 0;
    return `<span class="avatar" style="background:${AVATAR_COLORS[h % AVATAR_COLORS.length]}" aria-hidden="true">${initials(p.name)}</span>`;
  }

  RENDER.members = function () {
    const members = data("MEMBERS"), roles = data("ROLES");
    if (!members || !roles) return dataError("data/group.js");
    return roles.map((r) => {
      const people = members.filter((m) => m.role === r.id);
      if (!people.length) return "";
      const cards = people.map((m) => `<div class="person${m.role === "pi" ? " pi" : ""}">${avatar(m)}<div>
          <div class="person-name">${link(m.name, m.url)}</div>
          <div class="person-role">${m.note && m.role === "pi" ? m.note : r.one || r.label}${m.note && m.role !== "pi" ? "<br>" + m.note : ""}</div>
        </div></div>`).join("");
      return `<h3 class="sub-title">${r.label}</h3><div class="people">${cards}</div>`;
    }).join("");
  };

  RENDER.alumni = function () {
    const alumni = data("ALUMNI");
    if (!alumni) return dataError("data/group.js");
    if (!alumni.length) return `<p class="section-lede" style="margin:0">${data("ALUMNI_EMPTY_TEXT") || ""}</p>`;
    const dated = alumni.some((a) => a.years);
    const items = alumni.map((a) => ({ html: `<li${dated ? "" : ' class="nowhen"'}>${dated ? `<span class="when">${a.years || ""}</span>` : ""}<div>
        <div class="t">${link(a.name, a.url)}</div>
        <div class="s">${[a.role, a.now ? "now " + a.now : ""].filter(Boolean).join(" · ")}</div></div></li>` }));
    return collapsible("ul", "rows", items, data("ALUMNI_VISIBLE") || 8, "alumni");
  };

  RENDER.topics = function () {
    const t = data("HIRING_TOPICS");
    if (!t) return dataError("data/group.js");
    return `<div class="tags">${t.map((x) => `<span class="tag">${x}</span>`).join("")}</div>`;
  };

  function more(label, body) {
    return `<details class="inline-more"><summary>${label}${icon("chevron-down")}</summary><div>${
      Array.isArray(body) ? `<ul>${body.map((d) => `<li>${d}</li>`).join("")}</ul>` : body}</div></details>`;
  }

  RENDER.positions = function () {
    const pos = data("POSITIONS");
    if (!pos) return dataError("data/group.js");
    return `<ul class="rows">${pos.map((p) => {
      const closed = p.status === "closed";
      return `<li${closed ? ' class="is-closed"' : ""}><span class="state${closed ? " closed" : ""}">${closed ? "Closed" : "Open"}</span><div>
        <div class="t">${p.title}</div><div class="s">${p.text || ""}</div>
        ${p.details ? more("Details", p.details) : ""}</div></li>`;
    }).join("")}</ul>`;
  };

  function openCalls() { return (data("CALLS") || []).filter((c) => c.status !== "closed"); }

  RENDER.calls = function (el) {
    const calls = data("CALLS");
    if (!calls) return dataError("data/group.js");
    const open = openCalls();
    if (!open.length) return `<p class="section-lede" style="margin:0">No project-specific calls right now — see the general positions below.</p>`;
    return `<ul class="rows calls">${open.map((c, i) => `<li id="call-${i + 1}"><span class="when">${month(c.date)} ${parseInt(c.date, 10) || ""}</span><div>
        <div class="t">${c.title}</div>
        ${c.who ? `<div class="who">${c.who}</div>` : ""}
        <div class="s">${c.text || ""}</div>
        ${c.details ? more("More about the project", c.details) : ""}
        <div class="call-links">${c.apply ? `<a class="btn" href="${attr(c.apply)}">${icon("send")}Apply for this project</a>` : ""}${
          c.post ? `<a class="btn btn-ghost" href="${attr(c.post)}">${icon("megaphone")}Announcement</a>` : ""}</div>
      </div></li>`).join("")}</ul>`;
  };

  // Home page notice listing open calls (renders nothing when there are none).
  RENDER.callnotice = function () {
    const open = openCalls();
    if (!open.length) return "";
    return open.map((c, i) => `<a class="notice" href="group.html#call-${i + 1}">
        <span class="notice-ico">${icon("megaphone")}</span>
        <span><strong>Open call:</strong> ${strip(c.title)}${c.who ? ` <span class="notice-who">— ${strip(c.who)}</span>` : ""}</span>
        ${icon("arrow-right", "notice-arrow")}</a>`).join("");
  };

  RENDER.lookingfor = function () {
    const lf = data("LOOKING_FOR");
    if (!lf) return dataError("data/group.js");
    return `${lf.intro ? `<p class="lookfor-intro">${lf.intro}</p>` : ""}
      <ul class="lookfor">${(lf.items || []).map((i) =>
        `<li>${icon("check")}<div><strong>${i.lead}.</strong> ${i.text}</div></li>`).join("")}</ul>
      ${lf.note ? `<p class="lookfor-note">${icon("info")}<span>${lf.note}</span></p>` : ""}`;
  };

  RENDER.applyform = function (el) {
    const url = data("APPLY_FORM");
    return url ? `<a class="btn" href="${attr(url)}">${icon("send")}Fill in the interest form</a>` : "";
  };

  RENDER.faq = function () {
    const faq = data("FAQ");
    if (!faq) return dataError("data/group.js");
    return `<div class="faq">${faq.map((f) => fold(f.q, null, f.a, false)).join("")}</div>`;
  };

  // Talks & media -------------------------------------------------------------
  const TALK_KIND = {
    talk: ["Talk", "mic", "green"], keynote: ["Keynote", "megaphone", "gold"],
    panel: ["Panel", "users", ""], seminar: ["Seminar", "presentation", "slate"],
  };
  RENDER.talks = function () {
    const talks = data("TALKS");
    if (!talks) return dataError("data/talks.js");
    const items = talks.map((t) => {
      const years = t.at.map((a) => a.year).filter(Boolean);
      const latest = years.length ? Math.max.apply(null, years) : "";
      const multiYear = new Set(years).size > 1;
      const where = t.at.map((a) => link(a.name, a.url) + (multiYear && a.year ? ` (${a.year})` : "")).join(" · ");
      const [label, ic, tone] = TALK_KIND[t.kind] || TALK_KIND.talk;
      const extras = [t.slides ? `<a href="${attr(t.slides)}">${icon("presentation")}Slides</a>` : "",
                      t.video ? `<a href="${attr(t.video)}">${icon("video")}Video</a>` : ""].join("");
      return { html: `<li><span class="when">${latest}</span><span class="ico ${tone}">${icon(ic)}</span>
        <div class="what"><span class="kind">${label}</span><span class="t">${t.title}</span>
          <span class="s">${where}${extras ? `<span class="talk-links">${extras}</span>` : ""}</span></div></li>` };
    });
    return collapsible("ul", "dated", items, data("TALKS_VISIBLE") || 7, "talks");
  };

  RENDER.media = function () {
    const media = data("MEDIA");
    if (!media) return dataError("data/talks.js");
    return `<div class="grid-2">${media.map((g) => `<div class="card">
      <div class="card-head">${icon(g.icon)}<h3>${g.title}</h3></div>
      <ul>${g.items.map((i) => `<li>${i.text}${i.sub ? `<span class="s">${i.sub}</span>` : ""}</li>`).join("")}</ul></div>`).join("")}</div>`;
  };

  // Service -------------------------------------------------------------------
  // <div data-render="rows" data-source="ORGANIZING"></div>
  RENDER.rows = function (el) {
    const src = el.dataset.source, rows = data(src);
    if (!rows) return dataError("data/service.js");
    const items = rows.map((r) => ({ html: `<li><span class="when">${r.when || ""}</span><div>
      <div class="t">${r.title}</div>${r.sub ? `<div class="s">${r.sub}</div>` : ""}</div></li>` }));
    return collapsible("ul", "rows", items, +(el.dataset.visible || 99), el.dataset.what || "");
  };

  RENDER.committees = function () {
    const c = data("COMMITTEES");
    if (!c) return dataError("data/service.js");
    return c.map((r) => `<div class="role-row">
      <div class="role">${r.role}${r.sub ? `<span class="s">${r.sub}</span>` : ""}</div>
      <div class="venues">${r.venues.map((v) => `<span class="venue-chip">${v.name}${
        v.years && v.years.length ? `<span>${v.years.join(" · ")}</span>` : ""}</span>`).join("")}</div>
    </div>`).join("");
  };

  // Awards --------------------------------------------------------------------
  RENDER.grants = function () {
    const g = data("GRANTS");
    if (!g) return dataError("data/awards.js");
    return `<ul class="rows plain">${g.map((x) =>
      `<li><span class="when">${x.year || ""}</span><div>${x.text}</div></li>`).join("")}</ul>`;
  };

  const AWARD_KIND = {
    award: ["trophy", "gold"], distinction: ["medal", "gold"], talk: ["mic", "green"],
    fellowship: ["badge-check", ""], degree: ["graduation-cap", ""], scholarship: ["school", "slate"],
  };
  RENDER.awards = function () {
    const a = data("AWARDS");
    if (!a) return dataError("data/awards.js");
    const items = a.map((x) => {
      const [ic, tone] = AWARD_KIND[x.kind] || AWARD_KIND.award;
      return { html: `<li><span class="when">${x.year}</span><span class="ico ${tone}">${icon(ic)}</span>
        <div class="what"><span class="t">${link(x.title, x.url)}</span>${x.sub ? `<span class="s">${x.sub}</span>` : ""}</div></li>` };
    });
    return collapsible("ul", "dated", items, data("AWARDS_VISIBLE") || 7, "awards");
  };

  // ------------------------------------------------------------------ boot ---
  // Old one-page links (e.g. /#hiring) → new pages.
  const OLD_ANCHORS = {
    "#group": "group.html", "#hiring": "group.html#join", "#publications": "publications.html",
    "#media": "talks.html#media", "#service": "service.html", "#talks": "talks.html",
    "#experience": "index.html#background",
  };

  function boot() {
    if (document.body.dataset.page === "home" && OLD_ANCHORS[location.hash]) {
      location.replace(OLD_ANCHORS[location.hash]);
      return;
    }
    renderTopbar();
    document.querySelectorAll("[data-render]").forEach((el) => {
      const fn = RENDER[el.dataset.render];
      if (!fn) return;
      try {
        const html = fn(el);
        if (html != null) el.innerHTML = html;
      } catch (err) {
        console.error(err);
        el.innerHTML = dataError("the data file for “" + el.dataset.render + "”");
      }
    });
    hydrateIcons();
    renderFooter();
    // Content is added after load, so jump to #anchors again once it's in place.
    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) setTimeout(() => target.scrollIntoView(), 0);
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
