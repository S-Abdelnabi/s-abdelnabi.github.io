// =============================================================================
//  TALKS & MEDIA (talks.html)
// =============================================================================

// How many talks are visible before the "Show all talks" toggle.
const TALKS_VISIBLE = 7;

// -----------------------------------------------------------------------------
//  TALKS — newest first. One entry per talk *title*; list every place you gave it.
//  kind:   "talk" | "keynote" | "panel" | "seminar"
//  at:     [{ name, url (optional), year }]
//  slides / video: optional links
// -----------------------------------------------------------------------------
const TALKS = [
  { title: "AI Agents May Always Fall for Prompt Injections: Casting Prompt Injection via the Lens of Contextual Integrity",
    kind: "talk",
    at: [{ name: "KU Leuven Summer School on Security and Privacy in the Age of AI", year: 2026,
           url: "https://cybersecurity-research.be/summer-school-on-security-privacy-in-the-age-of-ai-2026/#speakers" }],
    slides: "files/prompt-injection-ci.pdf" },

  { title: "Colosseum: Auditing Collusion in Cooperative Multi-Agent Systems",
    kind: "seminar",
    at: [{ name: "Updates in Cooperative AI", year: 2026,
           url: "https://www.cooperativeai.com/seminars/colosseum-auditing-collusion-in-cooperative-multi-agent-systems" }],
    slides: "files/Cooperative_AI_seminar.pdf" },

  { title: "The Challenge of Test Awareness in AI Evaluation",
    kind: "talk",
    at: [{ name: "KAUST Rising Stars in AI Symposium (selected talk)", year: 2026, url: "https://www.kaust.edu.sa/events/rsais26/" }],
    slides: "files/hawthorne_effect_neurips.pdf" },

  { title: "What Does It Mean for AI Agents to Preserve Privacy?",
    kind: "talk",
    at: [{ name: "Huawei Trustworthy AI Summit", year: 2026 },
         { name: "Graz Security Week (summer school)", year: 2025, url: "https://securityweek.at/" }],
    slides: "files/graz_security_week_presentation.pdf" },

  { title: "Science for AI Workshop — Shaping Public AI for Science, Innovation & European Impact",
    kind: "panel",
    at: [{ name: "AI in Science Summit", year: 2025, url: "https://ais25.eu/thematic-workshope/science-for-ai-tech" }] },

  { title: "Firewalls to Secure Dynamic LLM Agentic Networks",
    kind: "talk",
    at: [{ name: "Brave", year: 2025 }, { name: "Google DeepMind", year: 2025 }, { name: "Qualcomm", year: 2025 }] },

  { title: "Women in AI Security Workshop",
    kind: "panel",
    at: [{ name: "The Alan Turing Institute", year: 2025, url: "https://www.turing.ac.uk/events/women-ai-security-workshop-0" }] },

  { title: "Towards Aligned, Interpretable, and Steerable Safe AI Agents",
    kind: "talk",
    at: [{ name: "TU Graz", year: 2025 }, { name: "UMass Amherst Security and Privacy Seminar", year: 2025 },
         { name: "CISPA", year: 2025 }, { name: "ELLIS Institute Tübingen Scientific Symposium", year: 2025 }] },

  { title: "On the Security of Real-World LLM-Integrated Applications",
    kind: "talk",
    at: [{ name: "European Symposium on Security and Artificial Intelligence (ESSAI)", year: 2024, url: "https://essai-conference.eu/" }] },

  { title: "On New Security and Safety Challenges Posed by LLMs and How to Evaluate Them",
    kind: "keynote",
    at: [{ name: "HIDA PhD Meet-up (keynote)", year: 2024, url: "https://www.helmholtz-hida.de/en/hida-news/get-connected/" },
         { name: "MLSec Seminars", year: 2024 }],
    video: "https://www.youtube.com/watch?v=gKsiUi3qMiA&ab_channel=MLSec" },

  { title: "On Evaluating Language Models and Their Security and Safety Implications",
    kind: "talk",
    at: [{ name: "Vector Institute", year: 2023 }, { name: "ETH Zürich", year: 2023 }] },

  { title: "LLM-Deliberation: Evaluating LLMs with Interactive Multi-Agent Negotiation Games",
    kind: "seminar",
    at: [{ name: "ACL SIGSEC", year: 2023 }],
    video: "https://www.youtube.com/watch?v=OAXUkjd7mec&ab_channel=ACLSIGSEC" },

  { title: "Compromising LLMs: The Advent of AI Malware",
    kind: "talk",
    at: [{ name: "Black Hat USA", year: 2023 }] },

  { title: "Security of Generative AI and Generative AI in Security",
    kind: "panel",
    at: [{ name: "DIMVA", year: 2023 }] },

  { title: "Not What You've Signed Up For: Investigating the Security of LLM-Integrated Applications",
    kind: "seminar",
    at: [{ name: "Privacy and Security in ML Seminars", year: 2023 }] },

  { title: "How to Improve Automated Fact-Checking",
    kind: "talk",
    at: [{ name: "Max Planck Institute for Software Systems", year: 2022 }] },

  { title: "Multi-modal Fact-checking: Out-of-Context Images and How to Catch Them",
    kind: "seminar",
    at: [{ name: "UCL Information Security Seminars", year: 2022 }],
    video: "https://www.youtube.com/watch?v=JKwRA-PM4xI" },
];

// -----------------------------------------------------------------------------
//  MEDIA & OUTREACH — grouped into cards.
//  icon: any name from js/icons.js
// -----------------------------------------------------------------------------
const MEDIA = [
  { title: "Press & interviews", icon: "newspaper",
    items: [
      { text: `Interviews on our indirect prompt injection work in
               <a href="https://www.vice.com/en/article/7kxzzz/hackers-bing-ai-scammer">Vice</a>,
               <a href="https://www.wired.com/story/chatgpt-prompt-injection-attack-security/">Wired</a>,
               <a href="https://www.zeit.de/digital/2023-03/cyberangriffe-microsoft-bing-chat-piraten">Zeit</a>, and
               <a href="https://www.technologyreview.com/2023/04/03/1070893/three-ways-ai-chatbots-are-a-security-disaster">MIT Technology Review</a>`,
        sub: "2023" },
      { text: `<a href="https://cispa.de/en/cooperation-cispa-sequire">CISPA</a> communication channels`, sub: "2023" },
    ] },

  { title: "Podcasts, documentaries & panels", icon: "mic",
    items: [
      { text: `<a href="https://www.youtube.com/watch?v=X6IdnKv_KO0&t=4429s&ab_channel=AISaturdaysLagos">Research Cohort — Implementation and Evaluation of a Research Paper</a>`,
        sub: "Invited panelist, AI Saturdays Lagos · 2024" },
      { text: `<a href="https://www.youtube.com/watch?v=9XPGRdZSuzE&t=1146s&ab_channel=Y-Kollektiv"><em>ChatGPT: What happens when the AI takes over?</em></a>`,
        sub: "Y-Kollektiv documentary · 2023" },
      { text: `<a href="https://thecyberwire.com/podcasts/research-saturday/276/not"><em>A dark side to LLMs</em></a>`,
        sub: "CyberWire podcast · 2023" },
      { text: `<a href="https://cispa.de/en/deepfakes"><em>Deepfakes and Fingerprinting</em></a>`,
        sub: "CISPA tl;dr podcast · 2022" },
    ] },

  { title: "Blogs", icon: "pen-line",
    items: [
      { text: `<a href="https://msrc.microsoft.com/blog/2024/12/announcing-the-adaptive-prompt-injection-challenge-llmail-inject/">Announcing the Adaptive Prompt Injection Challenge (LLMail-Inject)</a> and
               <a href="https://msrc.microsoft.com/blog/2025/03/announcing-the-winners-of-the-adaptive-prompt-injection-challenge-llmail-inject/">announcing the winners</a>`,
        sub: "Microsoft Security Response Center · 2024–2025" },
      { text: `<a href="https://montrealethics.ai/llm-deliberation-evaluating-llms-with-interactive-multi-agent-negotiation-games/">LLM-Deliberation: Evaluating LLMs with Interactive Multi-Agent Negotiation Games</a>`,
        sub: "Montreal AI Ethics Institute" },
    ] },

  { title: "Policy & industry adoption", icon: "landmark",
    items: [
      { text: `Our indirect prompt injection work is referenced by the
               <a href="https://www.bsi.bund.de/SharedDocs/Cybersicherheitswarnungen/EN/2023/2023-249034-1032.html">German Federal Office for Information Security (BSI)</a>,
               <a href="https://securityintelligence.com/articles/ai-prompt-injection-nist-report/">NIST</a>,
               <a href="https://genai.owasp.org/llmrisk/llm01-prompt-injection/">OWASP</a>,
               <a href="https://attack.mitre.org/">MITRE</a>, and
               <a href="https://www.microsoft.com/en-us/msrc/aibugbar">Microsoft's AI bug bar</a>`,
        sub: "and introduced terminology now used across research and industry" },
      { text: `<a href="https://techcommunity.microsoft.com/blog/microsoftsecurityandcompliance/architecting-secure-gen-ai-applications-preventing-indirect-prompt-injection-att/4221859">Architecting secure GenAI applications: preventing indirect prompt injection</a>`,
        sub: "Microsoft Tech Community" },
    ] },
];
