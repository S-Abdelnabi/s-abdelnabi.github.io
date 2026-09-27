// =============================================================================
//  SITE SETTINGS — name, links, navigation tabs, and background (home page).
//  Text fields may contain HTML (e.g. <a href="...">links</a>).
//  Use backticks `like this` for text that contains quotes.
// =============================================================================

const SITE = {
  name: "Sahar Abdelnabi",

  // Your name as it appears in author lists — it is bolded automatically.
  me: "Sahar Abdelnabi",

  lastUpdated: "September 2026",

  // true → green dot on the "Group" tab and a "We're hiring" link on the home page.
  hiring: true,

  // Tabs in the top bar (in this order). `id` must match <body data-page="..."> of that page.
  nav: [
    { id: "home",         label: "Home",          href: "index.html" },
    { id: "publications", label: "Publications",  href: "publications.html" },
    { id: "group",        label: "Group",         href: "group.html" },
    { id: "talks",        label: "Talks & Media", href: "talks.html" },
    { id: "service",      label: "Service",       href: "service.html" },
    { id: "awards",       label: "Awards",        href: "awards.html" },
  ],

  cv: "files/CV_SaharAbdelnabi.pdf",

  // Buttons under your name on the home page (and icons in the footer).
  // icon: any name from js/icons.js (e.g. "mail", "brand-github", "brand-x", "brand-linkedin", "brand-bluesky").
  links: [
    { label: "Email",          icon: "mail",               href: "mailto:sahar.abdelnabi@tue.ellis.eu" },
    { label: "Google Scholar", icon: "brand-googlescholar", href: "https://scholar.google.de/citations?user=QEiYbDYAAAAJ&hl=en" },
    { label: "GitHub",         icon: "brand-github",       href: "https://github.com/S-Abdelnabi" },
    { label: "X / Twitter",    icon: "brand-x",            href: "https://twitter.com/sahar_abdelnabi" },
    { label: "CV",             icon: "file-text",          href: "files/CV_SaharAbdelnabi.pdf" },
  ],
};

// -----------------------------------------------------------------------------
//  BACKGROUND — shown at the bottom of the home page.
//  Items after the first `show` are behind a "show more" toggle.
// -----------------------------------------------------------------------------
const BACKGROUND = {
  show: 3,
  experience: [
    { title: "Principal Investigator & Independent Research Group Leader",
      org: "ELLIS Institute Tübingen · Max Planck Institute for Intelligent Systems · Tübingen AI Center",
      date: "Oct 2025 – present" },
    { title: "AI Security Researcher",
      org: "Microsoft Security Response Center (MSRC), Microsoft Research Cambridge, UK",
      date: "Feb 2024 – Sep 2025" },
    { title: "PhD Candidate",
      org: "CISPA Helmholtz Center for Information Security",
      date: "2019 – 2024" },
    { title: "Research Assistant",
      org: "Max Planck Institute for Informatics",
      note: "with Prof. Dr. Andreas Bulling",
      date: "2017 – 2019" },
    { title: "Quality Assurance Engineer",
      org: "Mentor Graphics (now Siemens EDA), Egypt",
      date: "2013 – 2017" },
  ],
  education: [
    { title: "Ph.D. in Computer Science",
      org: "CISPA Helmholtz Center for Information Security & Saarland University",
      note: `Advisor: Prof. Dr. Mario Fritz · <span class="award">Summa cum laude</span>`,
      date: "2019 – 2024" },
    { title: "M.Sc. in Computer Science",
      org: "Saarland University",
      note: "GPA 1.2 (thesis 1.0)",
      date: "2017 – 2019" },
    { title: "M.Sc. in Computer and Systems Engineering",
      org: "Ain Shams University, Egypt",
      date: "2013 – 2017" },
    { title: "B.Sc. in Computer and Systems Engineering",
      org: "Ain Shams University, Egypt",
      date: "2008 – 2013" },
  ],
};
