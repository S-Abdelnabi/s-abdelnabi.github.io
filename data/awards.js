// =============================================================================
//  AWARDS & FUNDING (awards.html)
// =============================================================================

// -----------------------------------------------------------------------------
//  GRANTS — one line each, newest first:  { year: "2026", text: `...` }
//  year can be empty ("") if you'd rather not show one. text can contain HTML.
// -----------------------------------------------------------------------------
const GRANTS = [
  { year: "2026", text: `<strong>Lead PI</strong>, UK AI Security Institute <a href="https://www.aisi.gov.uk/blog/funding-60-projects-to-advance-ai-alignment-research">grant</a> on evaluation awareness (£662,715)` },
  { year: "2026", text: `<strong>PI</strong>, Coefficient Giving <a href="https://tue.ellis.eu/news/pi-sahar-abdelnabi-awarded-funding-from-coefficient-giving">grant</a> on AI for sound reasoning: sycophancy and decision making ($196,000)` },
  { year: "2025",     text: `<strong>Co-PI</strong>, Open Philanthropy grant on deception in LLMs (main PI: Ruta Binkyte; $88,550)` },
  { year: "2023", text: `Academic Research Grant for Google Cloud research credits` },
  { year: "2021", text: `Academic Research Grant for Google Cloud research credits` },
];

// -----------------------------------------------------------------------------
//  AWARDS & HONORS — newest first.
//  kind → icon:  award (trophy) · talk · fellowship · scholarship · degree · distinction
// -----------------------------------------------------------------------------
const AWARDS_VISIBLE = 7;

const AWARDS = [
  { year: 2026, kind: "talk",
    title: "Selected speaker, KAUST Rising Stars in AI Symposium",
    url: "https://www.kaust.edu.sa/events/rsais26/" },

  { year: 2025, kind: "award",
    title: "Best Paper Award, ACL 2025",
    sub: `Awarded to 4 of more than 3,000 accepted papers; also an oral presentation and panel discussion — <a href="https://aclanthology.org/2025.acl-long.1454/">A Theory of Response Sampling in LLMs</a>` },

  { year: 2025, kind: "distinction",
    title: "Spotlight, NeurIPS 2025",
    sub: `<a href="https://arxiv.org/abs/2505.14617">The Hawthorne Effect in Reasoning Models</a>` },

  { year: 2025, kind: "distinction",
    title: "Survey Certification, TMLR",
    sub: `<a href="https://arxiv.org/abs/2502.19649">Taxonomy, Opportunities, and Challenges of Representation Engineering for LLMs</a>` },

  { year: 2024, kind: "degree",
    title: "PhD with Summa cum laude",
    sub: "CISPA Helmholtz Center for Information Security & Saarland University" },

  { year: 2024, kind: "distinction",
    title: "Spotlight, NeurIPS 2024 Datasets & Benchmarks",
    sub: `<a href="https://arxiv.org/abs/2406.07954">Dataset and Lessons Learned from the 2024 SaTML LLM Capture-the-Flag Competition</a>` },

  { year: 2023, kind: "fellowship",
    title: "Vector Distinguished Postdoctoral Fellowship (declined)",
    url: "https://vectorinstitute.ai/programs/vector-postdoctoral-fellows/" },

  { year: 2023, kind: "award",
    title: "Best Paper Award & oral presentation, AISec 2023",
    sub: `<a href="https://arxiv.org/abs/2302.12173">Not What You've Signed Up For: Indirect Prompt Injection</a>` },

  { year: 2021, kind: "distinction",
    title: "Oral presentation, ICCV 2021",
    sub: `<a href="https://arxiv.org/abs/2007.08457">Artificial Fingerprinting for Generative Models</a>` },

  { year: 2019, kind: "scholarship",
    title: "Saarland University scholarship for international students",
    sub: "DAAD STIBET III scholarship grant" },

  { year: 2016, kind: "scholarship",
    title: "IEEE Computational Intelligence Society Outstanding Student-Paper Travel Grant",
    sub: "IEEE CIBCB 2016" },
];
