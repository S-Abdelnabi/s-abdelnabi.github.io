// =============================================================================
//  GROUP — members, alumni, open positions, and FAQ (group.html).
// =============================================================================

// -----------------------------------------------------------------------------
//  MEMBERS
//  role:  "pi" | "postdoc" | "phd" | "visiting" | "intern"   (controls grouping)
//  photo: optional, e.g. "images/people/haritz.jpg" (square works best).
//         Without a photo, initials are shown.
//  note:  optional extra line, may contain HTML.
// -----------------------------------------------------------------------------
const MEMBERS = [
  { name: "Sahar Abdelnabi", role: "pi", url: "index.html", photo: "images/photo.jpg",
    note: "Principal Investigator" },

  { name: "Haritz Puerto", role: "postdoc", url: "https://haritzpuerto.github.io/" },

  { name: "Daniel Donnelly", role: "phd", url: "https://www.linkedin.com/in/daniel-donnelly-428701170/" },
  { name: "Jeanne Salle", role: "phd", url: "https://scholar.google.com/citations?user=qr-gsXMAAAAJ",
    note: `Co-advised with <a href="https://www.andriushchenko.me/">Maksym Andriushchenko</a>` },
  { name: "Katharina Deckenbach", role: "phd", url: "https://www.linkedin.com/in/katharina-deckenbach/" },
  { name: "Johannes Taraz", role: "phd", url: "https://jotaraz.github.io/" },
  { name: "Evan Chapple", role: "phd", url: "https://scholar.google.com/citations?user=h_rRYt4AAAAJ&hl=en" },

  { name: "Abhinav Kumar", role: "visiting", url: "https://www.securegradients.com/" },
  { name: "Haneen Najjar", role: "visiting", url: "https://haneenn24.github.io/" },

  { name: "Joshua Swanson", role: "intern", url: "https://scholar.google.com/citations?user=jiecQyEAAAAJ&hl=en" },
  { name: "Dorian Benhamou Goldfajn", role: "intern", url: "https://scholar.google.com/citations?user=U8ARMesAAAAJ&hl=en" },
];

// Headings for each role (and their order on the page).
const ROLES = [
  { id: "pi",       label: "Group leader" },
  { id: "postdoc",  label: "Postdoctoral researchers", one: "Postdoc" },
  { id: "phd",      label: "PhD students",             one: "PhD student" },
  { id: "visiting", label: "Visiting PhD students",    one: "Visiting PhD student" },
  { id: "intern",   label: "Research interns",         one: "Research intern" },
];

// -----------------------------------------------------------------------------
//  ALUMNI — former members, newest first. When someone leaves, move them here.
//
//  { name: "Jane Doe", url: "https://...", role: "Research intern", years: "2025–2026",
//    now: "PhD student at ETH Zürich" },
//
//  role / years / now / url are all optional.
// -----------------------------------------------------------------------------
const ALUMNI = [
  { name: "Luca Scionis", url: "https://scholar.google.com/citations?user=4fxF0HMAAAAJ&hl=it",
    role: "Visiting PhD student" },
  { name: "Yasmine Kaced", url: "https://www.linkedin.com/in/yasmine-kaced-48698229b/",
    role: "CaCTüS program research intern" },
  { name: "Mariam Lomishvili", url: "https://www.linkedin.com/in/mariam-lomishvili-b6825b2b1/",
    role: "CaCTüS program research intern" },
];

// Shown in the Alumni section while the list above is empty.
const ALUMNI_EMPTY_TEXT = "The group started in October 2025 — former members will be listed here.";

// How many alumni are visible before the "Show all" toggle.
const ALUMNI_VISIBLE = 8;

// -----------------------------------------------------------------------------
//  HIRING
// -----------------------------------------------------------------------------
const APPLY_FORM = "https://docs.google.com/forms/d/e/1FAIpQLSfERP8qmSWHeDLFQ_NAyyaxcznDrzjJZDNbosPgJDJa0d0MKA/viewform?usp=sharing&ouid=113360022370444423586";

// Topics we are currently recruiting for (chips at the top of "Join us").
const HIRING_TOPICS = [
  "Sycophancy & decision making",
  "Autonomous agents & memory",
  "Multi-agent safety, security & privacy",
  "LLM training dynamics",
  "AI control & oversight",
  "AI for AI research",
];

// -----------------------------------------------------------------------------
//  OPEN CALLS — announcements for a specific project (e.g. a co-advised position).
//  Newest first. Shown at the top of "Join us" and as a notice on the home page.
//  Set status: "closed" (or delete the entry) when the call is over.
//
//  date     "YYYY-MM"
//  title    the project
//  who      who you're looking for / co-advisors (one line)
//  text     short summary (one or two sentences)
//  details  (optional) longer description, shown behind a "More about the project" toggle
//  apply    link to the application form
//  post     (optional) link to the announcement (e.g. your X / Bluesky post)
// -----------------------------------------------------------------------------
const CALLS = [
  {
    date: "2026-09",
    status: "open",
    title: "Privacy and contextual integrity in AI agents",
    who: `Postdoc or PhD student · co-advised with <a href="https://mireshghallah.github.io/">Niloofar Mireshghallah</a> (CMU) · start as soon as possible`,
    text: `Fully funded, based in Tübingen with potential research visits at CMU. The project spans single- and multi-agent settings, with the goal of making privacy and contextual integrity concrete enough to train and evaluate systems where privacy and utility have to be studied together.`,
    details: `<p>Today's agents tend to see instructions, messages, memories, and tool outputs as one flattened stream of text.
      They are not very good at distinguishing information that is useful from information that is appropriate to use here,
      for this person now with their current preferences and relationships, and for this purpose.</p>
      <p>The project spans single-agent and multi-agent settings. In a single turn, an agent may face ambiguous instructions,
      incomplete authority, conflicting goals, stale assumptions, or context that has been deliberately manipulated. Over weeks
      or months, the same agent may accumulate memories, observe changing teams and dependencies, and act on earlier inferences
      that were never explicitly authorized. In a network, agents representing different users must coordinate, but their
      interaction may either protect private boundaries or dissolve them.</p>
      <p>The position is fully funded and based in Tübingen (formal primary host), with potential research visits at CMU
      (details to be discussed with the applicant). We have generous funding and compute.</p>`,
    apply: "https://docs.google.com/forms/d/e/1FAIpQLSd_LmrBlnovzNTcl4Jgors5x1f-jhTcnmy8lUq6DquleCy_JA/viewform?usp=dialog",
    post: "https://x.com/sahar_abdelnabi/status/2095917318408732769",
  },
];

// -----------------------------------------------------------------------------
//  GENERAL POSITIONS — one line each.
//  status: "open" | "closed"   (closed ones are shown greyed out; delete to remove)
//  details (optional): extra info behind a "Details" toggle
// -----------------------------------------------------------------------------
const POSITIONS = [
  { title: "PhD students", status: "open",
    text: "PhD positions in Tübingen on AI safety, security, and alignment. Rolling applications.",
    details: `A Master's degree (or finishing one) and familiarity with current AI research, e.g. through a thesis, AI safety fellowships, seminars,
      or conferences; a publication record is <em>not</em> required. Apply via the <a href="${APPLY_FORM}">interest form</a>,
      and/or through the <a href="https://ellis.eu/phd-postdoc">ELLIS PhD Program</a>, <a href="https://learning-systems.org/">CLS</a>,
      or <a href="https://imprs.is.mpg.de/">IMPRS-IS</a>.` },

  { title: "Postdoctoral researchers", status: "open",
    text: `Postdoc opportunities on AI safety, security, and alignment. Get in touch via the <a href="${APPLY_FORM}">interest form</a>.` },

  { title: "Visiting PhD students", status: "open",
    text: `Funded research stays of 3–6 months in Tübingen, for PhD students with a strong computer science background and research experience. Apply via the <a href="${APPLY_FORM}">interest form</a>.` },

  { title: "Research interns", status: "open",
    text: `Predoctoral research internships in Tübingen. Apply via the <a href="${APPLY_FORM}">interest form</a>.` },
];

// -----------------------------------------------------------------------------
//  WHAT I'M LOOKING FOR — guidance for application statements, shown in
//  "Join us" right before "How to apply". Each item: a short bold lead + text.
// -----------------------------------------------------------------------------
const LOOKING_FOR = {
  intro: "Tell me about yourself in your own words, and be specific. A strong statement covers:",
  items: [
    { lead: "Your relevant experience",
      text: "Why do you want to apply with me, and broadly describe your interest in research and science." },
    { lead: "How it connects to our work",
      text: `Your thoughts and previous experience, in light of the topics our group is working on
             (see our <a href="publications.html">publications</a> and the topics above).` },
    { lead: "What excites you",
      text: "Which areas of collaboration and research excite you the most, and why." },
    { lead: "Your plans",
      text: "Your thoughts and plans for a PhD with the group." },
  ],
  note: "Please don't send generic or AI-generated statements or emails. I want to hear your own thinking.",
};

// Frequently asked questions (collapsed by default).
const FAQ = [
  { q: "What should I write in my statement?",
    a: `Describe your relevant experience and interest in research, and why and how it may fit 
        the topics our group is working on. See <a href="#looking-for">What I'm looking for</a> above.` },
  { q: "Can I use AI to write my statement or email?",
    a: "You can if you use it to polish your own thoughts and ideas. Please don't use it to stuff keywords. Generic or AI-generated statements and emails are all similar and don't tell me anything about you." },
  { q: "How do I apply for a specific project (an open call)?",
    a: "Each open call links to its own application form, use that one. The general interest form is for all other positions." },
  { q: "Will I hear back after filling in the form?",
    a: "I review each application and reach out if there's a good fit. I cannot reach out or reply to all emails." },
  { q: "Do I need publications to apply?",
    a: "No. What matters most is passion, curiosity, research potential, and willingness to learn." },
  { q: "Do I need to speak German?",
    a: "No. No knowledge of German is required." },
  { q: "Should I also apply through a PhD program?",
    a: `You can. The <a href="https://ellis.eu/phd-postdoc">ELLIS PhD Program</a>, <a href="https://learning-systems.org/">CLS</a>, and <a href="https://imprs.is.mpg.de/">IMPRS-IS</a> each have their own calls and deadlines — you can apply there and also fill in the form.` },
];
