// =============================================================================
//  SERVICE & TEACHING (service.html)
// =============================================================================

// -----------------------------------------------------------------------------
//  Rows with a date on the left.  when: free text ("2026", "2025–", ...)
// -----------------------------------------------------------------------------
const ADVISORY = [
  { when: "2026 –", title: `Member, <a href="https://digital-strategy.ec.europa.eu/en/policies/ai-scientific-panel">EU AI Act Scientific Panel</a>`,
    sub: "One of 60 independent experts advising the EU AI Office and national authorities on implementing the AI Act and assessing the risks of general-purpose AI models." },
  { when: "", title: `Grant reviewer, <a href="https://www.cooperativeai.com/">Cooperative AI Foundation</a>` },
];

const ORGANIZING = [
  { when: "2026", title: `Co-chair, <a href="https://aisec.cc/">AISec 2026</a>`, sub: "ACM Workshop on Artificial Intelligence and Security" },
  { when: "2026", title: `Co-organizer, <a href="https://palm-neurips-2026.github.io/">PALM workshop</a>`, sub: "NeurIPS 2026" },
  { when: "2026", title: `Co-organizer, <a href="https://sites.google.com/view/eimlicml2026/home">2nd Workshop on Epistemic Intelligence in Machine Learning</a>`, sub: "ICML 2026" },
  { when: "2025", title: `Co-organizer, <a href="https://llmsec-eurips.github.io/">Foundations of Language Model Security</a>`, sub: "EurIPS 2025" },
  { when: "2025", title: `Co-organizer, <a href="https://llmsafety-unconference.github.io/">LLM Safety and Security Workshop</a>`, sub: "ELLIS UnConference 2025" },
];

const COMPETITIONS = [
  { when: "2025", title: `Lead organizer, <a href="https://microsoft.github.io/llmail-inject/">LLMail-Inject: Adaptive Prompt Injection Challenge</a>`, sub: "IEEE SaTML 2025" },
  { when: "2024", title: `Co-organizer, <a href="https://ctf.spylab.ai/">LLM Capture-the-Flag Competition</a>`, sub: "IEEE SaTML 2024" },
];

// -----------------------------------------------------------------------------
//  Committees & reviewing — each venue becomes a chip:  "CCS  2025 · 2026"
// -----------------------------------------------------------------------------
const COMMITTEES = [
  { role: "Associate Chair",
    venues: [{ name: "IEEE S&P", years: ["2027"] }] },

  { role: "Program Committee",
    venues: [
      { name: "IEEE S&P",        years: ["2026"] },
      { name: "ACM CCS",         years: ["2025", "2026"] },
      { name: "USENIX Security", years: ["2025"] },
      { name: "IEEE SaTML",      years: ["2024", "2026"] },
      { name: "AAAI",            years: ["2025"] },
      { name: "AISec Workshop",  years: ["2023", "2024", "2025"] },
    ] },

  { role: "Reviewer", sub: "Conferences & journals",
    venues: [
      { name: "ICML",    years: ["2024", "2026"] },
      { name: "ICLR",    years: ["2024", "2025", "2026"] },
      { name: "NeurIPS", years: ["2023", "2025"] },
      { name: "CVPR",    years: ["2022", "2023"] },
      { name: "ICCV",    years: ["2023"] },
      { name: "ECCV",    years: ["2022"] },
      { name: "IEEE TPAMI", years: ["2021", "2022", "2024"] },
      { name: "TMLR",    years: [] },
    ] },

  { role: "Reviewer", sub: "Workshops",
    venues: [
      { name: "ICML Neural Conversational AI Workshop", years: ["2023"] },
      { name: "ICLR Workshop on Synthetic Data Generation", years: ["2021"] },
    ] },
];

// -----------------------------------------------------------------------------
//  Mentoring & teaching
// -----------------------------------------------------------------------------
const MENTORING = [
  { when: "2025", title: `Mentor, <a href="https://www.cai-research-fellowship.com/">Cooperative AI Research Fellowship</a>` },
  { when: "",     title: `Mentor, <a href="https://erafellowship.org/">ERA Fellowship</a>` },
];

const TEACHING = [
  { when: "2026", title: `Lecturer — <a href="https://github.com/aisa-group/tue-ai-safety-course">AI Safety</a>`,
    sub: "University of Tübingen · co-taught with Maksym Andriushchenko and Jonas Geiping" },
  { when: "2020 – 2023", title: "Teaching Assistant, Saarland University",
    sub: `Opportunities and Risks of Large Language Models and Foundation Models (seminar) · <a href="https://cms.cispa.saarland/mlcysecws2122/">Machine Learning in Cybersecurity</a> · <a href="https://cms.sic.saarland/hlcvss20/">High-level Computer Vision</a>` },
  { when: "2017 – 2019", title: "Tutor, Saarland University",
    sub: "Image Processing and Computer Vision · Neural Networks Implementation and Applications · Interactive Systems" },
];
