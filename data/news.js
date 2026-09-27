// =============================================================================
//  NEWS — shown on the home page. Newest first.
//
//  { date: "YYYY-MM", type: "...", text: `...` }
//
//  type → icon:  award · paper · talk · funding · service · group · teaching · policy
//  text can contain HTML links. Use backticks `...` so quotes inside are fine.
//
//  To add an item: copy a line, paste it at the TOP of the list, edit it.
// =============================================================================

// Only items from this year onward are shown (older ones stay in the file).
const NEWS_SINCE = 2025;

// How many items are visible before the "Show all news" toggle.
const NEWS_VISIBLE = 6;

const NEWS = [
  { date: "2026-09", type: "paper",
    text: `Five papers accepted at <strong>NeurIPS 2026</strong>: one in the main track and four in the Evaluations &amp; Datasets track. See <a href="publications.html">publications</a>.` },

  { date: "2026-09", type: "group",
    text: `New open position, co-advised with <a href="https://mireshghallah.github.io/">Niloofar Mireshghallah</a>: we are looking for a postdoc or PhD student to work on <a href="group.html#join">privacy and contextual integrity in AI agents</a>.` },

  { date: "2026-06", type: "funding",
    text: `I am grateful to receive <a href="https://tue.ellis.eu/news/pi-sahar-abdelnabi-awarded-funding-from-coefficient-giving">funding from Coefficient Giving</a> to conduct research on sycophancy and decision making!` },

  { date: "2026-06", type: "policy",
    text: `I have been selected to serve on the <a href="https://digital-strategy.ec.europa.eu/en/policies/ai-scientific-panel">EU AI Act Scientific Panel</a>.` },

  { date: "2026-04", type: "teaching",
    text: `I am co-teaching <a href="https://github.com/aisa-group/tue-ai-safety-course/tree/main">a course on AI Safety</a> at the University of Tübingen.` },

  { date: "2026-04", type: "service",
    text: `I am serving as an Associate Chair for <a href="https://sp2027.ieee-security.org/">IEEE S&amp;P 2027</a>.` },

  { date: "2026-04", type: "service",
    text: `I am co-chairing the <a href="https://aisec.cc/">AISec workshop</a>; we look forward to excellent submissions!` },

  { date: "2026-04", type: "talk",
    text: `I gave a talk at the <a href="https://www.cooperativeai.com/seminars/">“Updates in Cooperative AI”</a> seminar series about our Colosseum framework (<a href="files/Cooperative_AI_seminar.pdf">slides</a>).` },

  { date: "2026-03", type: "service",
    text: `Our proposal for the <a href="https://sites.google.com/view/eimlicml2026/home">Epistemic Intelligence in Machine Learning</a> workshop was accepted at ICML 2026.` },

  { date: "2026-02", type: "talk",
    text: `I was selected as a speaker at the <a href="https://www.kaust.edu.sa/events/rsais26/">KAUST Rising Stars in AI Symposium 2026</a> and gave a talk on test awareness in LLMs (<a href="files/hawthorne_effect_neurips.pdf">slides</a>).` },

  { date: "2026-01", type: "funding",
    text: `Our project on evaluation awareness was selected for funding by <a href="https://institute-tue.ellis.eu/en/projects/cooperation-with-ai-security-institute">the UK AI Security Institute</a>!` },

  { date: "2025-10", type: "group",
    text: `I started the <a href="group.html">COMPASS research group</a> at the ELLIS Institute Tübingen and the Max Planck Institute for Intelligent Systems.` },

  { date: "2025-09", type: "paper",
    text: `Our paper <a href="https://arxiv.org/abs/2505.14617">“The Hawthorne Effect in Reasoning Models”</a> was accepted as a <strong>spotlight</strong> at NeurIPS 2025.` },

  { date: "2025-07", type: "talk",
    text: `I gave a talk at <a href="https://securityweek.at/">Graz Security Week</a> on privacy and AI agents (<a href="files/graz_security_week_presentation.pdf">slides</a>).` },

  { date: "2025-07", type: "award",
    text: `Our paper <a href="https://aclanthology.org/2025.acl-long.1454/">“A Theory of Response Sampling in LLMs”</a> received a <span class="award">Best Paper Award</span> at ACL 2025!` },

  // ---- Older items (hidden because of NEWS_SINCE above) ----
  { date: "2024-12", type: "award",
    text: `I defended my PhD with <span class="award">Summa cum laude</span>!` },

  { date: "2024-02", type: "group",
    text: `I joined Microsoft as an AI Security Researcher.` },

  { date: "2023-12", type: "award",
    text: `Our paper <a href="https://arxiv.org/abs/2302.12173">“Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection”</a> received a <span class="award">Best Paper Award</span> at AISec 2023.` },
];
