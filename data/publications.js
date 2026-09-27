// =============================================================================
//  PUBLICATIONS (publications.html)
//
//  Papers are grouped by `year` automatically (newest year first); within a
//  year they appear in the order below. To add a paper, copy an entry and edit it.
//
//  title       paper title
//  authors     comma-separated; your name (SITE.me) is bolded automatically.
//              Add * after a name for equal contribution. Long lists collapse.
//  venue       short label for the colored badge, e.g. "NeurIPS"
//  venueFull   (optional) longer venue line; defaults to "venue year"
//  year        number
//  type        "conference" | "journal" | "workshop" | "preprint"   (badge color + filter)
//  award       (optional) text, or a list: ["Oral", "Best Paper Award"]
//  selected    (optional) true → marked with a star and shown under "Selected"
//  links       (optional) any of: paper, pdf, arxiv, code, data, project, blog, slides, video, poster, challenge
//              The title links to `paper` (or `pdf` / `arxiv`).
// =============================================================================

// How many of the most recent years are expanded when the page loads.
const PUB_OPEN_YEARS = 1;

const PUBLICATIONS = [

  // ---------------------------------------------------------------- 2026 ----
  { title: "AI Agents May Always Fall for Prompt Injections",
    authors: "Sahar Abdelnabi, Eugene Bagdasarian",
    venue: "NeurIPS", year: 2026, type: "conference", selected: true,
    links: { paper: "https://arxiv.org/abs/2605.17634",
             code: "https://github.com/compass-group-tue/prompt_injections_so_back" } },

  { title: "Models That Know How Evaluations Are Designed Score Safer",
    authors: "Katharina Deckenbach*, Haritz Puerto*, Jonas Geiping, Sahar Abdelnabi",
    venue: "NeurIPS", venueFull: "NeurIPS 2026 · Evaluations & Datasets Track", year: 2026, type: "conference",
    links: { paper: "https://arxiv.org/abs/2605.28591",
             code: "https://github.com/compass-group-tue/arxiv2026_evaluation_meta_knowledge",
             data: "https://huggingface.co/collections/compass-group-tue/evaluation-meta-knowledge",
             project: "https://compass-group-tue.github.io/arxiv2026_evaluation_meta_knowledge/" } },

  { title: "Colosseum: Auditing Collusion in Cooperative Multi-Agent Systems",
    authors: "Mason Nakamura*, Abhinav Kumar*, Saswat Das*, Sahar Abdelnabi, Saaduddin Mahmud, Ferdinando Fioretto, Shlomo Zilberstein, Eugene Bagdasarian",
    venue: "NeurIPS", venueFull: "NeurIPS 2026 · Evaluations & Datasets Track", year: 2026, type: "conference",
    links: { paper: "https://arxiv.org/abs/2602.15198",
             code: "https://github.com/umass-ai-safety/colosseum",
             slides: "files/Cooperative_AI_seminar.pdf" } },

  { title: "No More, No Less: Task Alignment in Terminal Agents",
    authors: "Sina Mavali, David Pape, Jonathan Evertz, Samira Abedini, Devansh Srivastav, Thorsten Eisenhofer, Sahar Abdelnabi, Lea Schönherr",
    venue: "NeurIPS", venueFull: "NeurIPS 2026 · Evaluations & Datasets Track", year: 2026, type: "conference",
    links: { paper: "https://arxiv.org/abs/2605.12233",
             code: "https://github.com/Dormant-Neurons/tab",
             data: "https://huggingface.co/datasets/symbolorate/tab" } },

  { title: "Skill-Inject: Measuring Agent Vulnerability to Skill File Attacks",
    authors: "David Schmotz, Luca Beurer-Kellner, Sahar Abdelnabi, Maksym Andriushchenko",
    venue: "NeurIPS", venueFull: "NeurIPS 2026 · Evaluations & Datasets Track", year: 2026, type: "conference",
    links: { paper: "https://arxiv.org/abs/2602.20156",
             code: "https://github.com/aisa-group/skill-inject",
             project: "https://www.skill-inject.com/",
             blog: "https://aisagroup.substack.com/p/skill-inject-measuring-agent-vulnerability" } },

  { title: "LLMail-Inject: A Dataset from a Realistic Adaptive Prompt Injection Challenge",
    authors: "Sahar Abdelnabi, Aideen Fay, Ahmed Salem, Egor Zverev, Kai-Chieh Liao, Chi-Huang Liu, Chun-Chih Kuo, Jannis Weigend, Danyael Manlangit, Alex Apostolov, Haris Umair, João Donato, Masayuki Kawakita, Athar Mahboob, Tran Huu Bach, Tsun-Han Chiang, Myeongjin Cho, Hajin Choi, Byeonghyeon Kim, Hyeonjin Lee, Benjamin Pannell, Conor McCauley, Mark Russinovich, Andrew Paverd, Giovanni Cherubin",
    venue: "EMNLP Findings", venueFull: "Findings of EMNLP 2026", year: 2026, type: "conference", selected: true,
    links: { paper: "https://arxiv.org/abs/2506.09956",
             code: "https://github.com/microsoft/llmail-inject-challenge",
             data: "https://huggingface.co/datasets/microsoft/llmail-inject-challenge",
             challenge: "https://microsoft.github.io/llmail-inject/" } },

  { title: "Position: Safety Must Precede the Deployment of Open-Ended AI Agents",
    authors: "Ivaxi Sheth, Jan Wehner*, Sahar Abdelnabi*, Ruta Binkyte*, Mario Fritz",
    venue: "ICML", year: 2026, type: "conference",
    links: { paper: "https://arxiv.org/abs/2502.04512" } },

  { title: "Firewalls to Secure Dynamic LLM Agentic Networks",
    authors: "Sahar Abdelnabi*, Amr Gomaa*, Eugene Bagdasarian, Per Ola Kristensson, Reza Shokri",
    venue: "TMLR", venueFull: "Transactions on Machine Learning Research (TMLR), 2026", year: 2026, type: "journal", selected: true,
    links: { paper: "https://arxiv.org/abs/2502.01822",
             code: "https://github.com/amrgomaaelhady/Firewall-Agentic-Networks" } },

  { title: "Position: Stateless Yet Not Forgetful: Implicit Memory as a Hidden Channel in LLMs",
    authors: "Ahmed Salem, Andrew Paverd, Sahar Abdelnabi",
    venue: "SaTML", venueFull: "IEEE SaTML 2026", year: 2026, type: "conference",
    links: { paper: "https://arxiv.org/abs/2602.08563",
             code: "https://github.com/microsoft/implicitMemory",
             data: "https://huggingface.co/datasets/sahar-abdelnabi/ImplicitMemoryFinancialAdvice" } },

  { title: "ConVerse: Benchmarking Contextual Safety in Agent-to-Agent Conversations",
    authors: "Amr Gomaa, Ahmed Salem, Sahar Abdelnabi",
    venue: "EACL Findings", venueFull: "Findings of EACL 2026", year: 2026, type: "conference",
    links: { paper: "https://aclanthology.org/2026.findings-eacl.170/",
             arxiv: "https://arxiv.org/abs/2511.05359",
             code: "https://github.com/amrgomaaelhady/ConVerse" } },

  { title: "Measuring Security Without Fooling Ourselves: Why Benchmarking Agents Is Hard",
    authors: "Sahar Abdelnabi, Chris Hicks, Konrad Rieck, Ahmad-Reza Sadeghi",
    venue: "arXiv", venueFull: "Preprint, 2026", year: 2026, type: "preprint",
    links: { paper: "https://arxiv.org/abs/2605.22568" } },

  { title: "Decomposing and Measuring Evaluation Awareness",
    authors: "Changling Li, Terry Jingchen Zhang, Jie Zhang, Zhijing Jin, Sahar Abdelnabi, Maksym Andriushchenko",
    venue: "arXiv", venueFull: "Preprint, 2026", year: 2026, type: "preprint",
    links: { paper: "https://arxiv.org/abs/2605.23055" } },

  { title: "Hidden in Memory: Sleeper Memory Poisoning in LLM Agents",
    authors: "Sidharth Pulipaka, Stanislau Hlebik, Leonidas Raghav, Sahar Abdelnabi, Vyas Raina, Ivaxi Sheth, Mario Fritz",
    venue: "arXiv", venueFull: "Preprint, 2026", year: 2026, type: "preprint",
    links: { paper: "https://arxiv.org/abs/2605.15338" } },

  { title: "Detecting Multi-Agent Collusion Through Multi-Agent Interpretability",
    authors: "Aaron Rose, Carissa Cullen, Sahar Abdelnabi, Philip Torr, Brandon Gary Kaplowitz, Christian Schroeder de Witt",
    venue: "arXiv", venueFull: "Preprint, 2026", year: 2026, type: "preprint",
    links: { paper: "https://arxiv.org/abs/2604.01151" } },

  // ---------------------------------------------------------------- 2025 ----
  { title: "The Hawthorne Effect in Reasoning Models: Evaluating and Steering Test Awareness",
    authors: "Sahar Abdelnabi, Ahmed Salem",
    venue: "NeurIPS", year: 2025, type: "conference", award: "Spotlight", selected: true,
    links: { paper: "https://arxiv.org/abs/2505.14617",
             code: "https://github.com/microsoft/Test_Awareness_Steering",
             blog: "https://www.lesswrong.com/posts/B2o6nrxwKxLPsSYdh/do-llms-comply-differently-during-tests-is-this-a-hidden",
             slides: "files/hawthorne_effect_neurips.pdf" } },

  { title: "Contextual Integrity in LLMs via Reasoning and Reinforcement Learning",
    authors: "Guangchen Lan, Huseyin A. Inan, Sahar Abdelnabi, Janardhan Kulkarni, Lukas Wutschitz, Reza Shokri, Christopher G. Brinton, Robert Sim",
    venue: "NeurIPS", year: 2025, type: "conference",
    links: { paper: "https://arxiv.org/abs/2506.04245",
             code: "https://github.com/EricGLan/CI-RL",
             data: "https://huggingface.co/datasets/huseyinatahaninan/ContextualIntegritySyntheticDataset",
             blog: "https://www.microsoft.com/en-us/research/blog/reducing-privacy-leaks-in-ai-two-approaches-to-contextual-integrity/" } },

  { title: "Taxonomy, Opportunities, and Challenges of Representation Engineering for Large Language Models",
    authors: "Jan Wehner, Sahar Abdelnabi, Daniel Tan, David Krueger, Mario Fritz",
    venue: "TMLR", venueFull: "Transactions on Machine Learning Research (TMLR), 2025", year: 2025, type: "journal",
    award: "Survey Certification",
    links: { paper: "https://arxiv.org/abs/2502.19649" } },

  { title: "Context-Aware Reasoning On Parametric Knowledge for Inferring Causal Variables",
    authors: "Ivaxi Sheth, Sahar Abdelnabi, Mario Fritz",
    venue: "EMNLP Findings", venueFull: "Findings of EMNLP 2025", year: 2025, type: "conference",
    links: { paper: "https://aclanthology.org/2025.findings-emnlp.1194/",
             arxiv: "https://arxiv.org/abs/2409.02604",
             code: "https://github.com/ivaxi0s/inferring-causal-variables" } },

  { title: "A Theory of Response Sampling in LLMs: Part Descriptive and Part Prescriptive",
    authors: "Sarath Sivaprasad*, Pramod Kaushik*, Sahar Abdelnabi, Mario Fritz",
    venue: "ACL", venueFull: "ACL 2025 (main)", year: 2025, type: "conference",
    award: ["Best Paper Award", "Oral"], selected: true,
    links: { paper: "https://aclanthology.org/2025.acl-long.1454/",
             arxiv: "https://arxiv.org/abs/2402.11005" } },

  { title: "Get My Drift? Catching LLM Task Drift with Activation Deltas",
    authors: "Sahar Abdelnabi*, Aideen Fay*, Giovanni Cherubin, Ahmed Salem, Mario Fritz, Andrew Paverd",
    venue: "SaTML", venueFull: "IEEE SaTML 2025", year: 2025, type: "conference", selected: true,
    links: { paper: "https://arxiv.org/abs/2406.00799",
             code: "https://github.com/microsoft/TaskTracker" } },

  { title: "Can LLMs Separate Instructions From Data? And What Do We Even Mean By That?",
    authors: "Egor Zverev, Sahar Abdelnabi, Soroush Tabesh, Mario Fritz, Christoph H. Lampert",
    venue: "ICLR", year: 2025, type: "conference", selected: true,
    links: { paper: "https://arxiv.org/abs/2403.06833",
             code: "https://github.com/egozverev/Should-It-Be-Executed-Or-Processed" } },

  { title: "Terrarium: Revisiting the Blackboard for Multi-Agent Safety, Privacy, and Security Studies",
    authors: "Mason Nakamura*, Abhinav Kumar*, Saaduddin Mahmud, Sahar Abdelnabi, Shlomo Zilberstein, Eugene Bagdasarian",
    venue: "arXiv", venueFull: "Preprint, 2025", year: 2025, type: "preprint",
    links: { paper: "https://arxiv.org/abs/2510.14312",
             code: "https://github.com/umass-aisec/Terrarium",
             project: "https://aisec.cs.umass.edu/Terrarium/latest/" } },

  { title: "Agent Skills Enable a New Class of Realistic and Trivially Simple Prompt Injections",
    authors: "David Schmotz, Sahar Abdelnabi, Maksym Andriushchenko",
    venue: "arXiv", venueFull: "Preprint, 2025", year: 2025, type: "preprint",
    links: { paper: "https://arxiv.org/abs/2510.26328" } },

  // ---------------------------------------------------------------- 2024 ----
  { title: "Cooperation, Competition, and Maliciousness: LLM-Stakeholders Interactive Negotiation",
    authors: "Sahar Abdelnabi, Amr Gomaa, Sarath Sivaprasad, Lea Schönherr, Mario Fritz",
    venue: "NeurIPS", venueFull: "NeurIPS 2024 · Datasets & Benchmarks Track", year: 2024, type: "conference", selected: true,
    links: { paper: "https://arxiv.org/abs/2309.17234",
             code: "https://github.com/S-Abdelnabi/LLM-Deliberation",
             project: "https://amrgomaaelhady.github.io/LLM-Deliberation-Demo/",
             video: "https://www.youtube.com/watch?v=OAXUkjd7mec&ab_channel=ACLSIGSEC" } },

  { title: "Dataset and Lessons Learned from the 2024 SaTML LLM Capture-the-Flag Competition",
    authors: "Edoardo Debenedetti*, Javier Rando*, Daniel Paleka*, Silaghi Fineas Florin, Dragos Albastroiu, Niv Cohen, Yuval Lemberg, Reshmi Ghosh, Rui Wen, Ahmed Salem, Giovanni Cherubin, Santiago Zanella-Beguelin, Robin Schmid, Victor Klemm, Takahiro Miki, Chenhao Li, Stefan Kraft, Mario Fritz, Florian Tramèr, Sahar Abdelnabi, Lea Schönherr",
    venue: "NeurIPS", venueFull: "NeurIPS 2024 · Datasets & Benchmarks Track", year: 2024, type: "conference",
    award: "Spotlight", selected: true,
    links: { paper: "https://arxiv.org/abs/2406.07954",
             data: "https://huggingface.co/datasets/ethz-spylab/ctf-satml24",
             code: "https://github.com/ethz-spylab/satml-llm-ctf",
             blog: "https://spylab.ai/blog/results-competition/" } },

  { title: "Tell Me What You Like and I Know What You Will Share: Topical Interest Influences Behavior Toward News From High and Low Credible Sources",
    authors: "Rebecca Weil, Sahar Abdelnabi, Mario Fritz, Rakibul Hasan",
    venue: "EuroS&P WS", venueFull: "IEEE EuroS&P Workshops 2024", year: 2024, type: "workshop",
    links: { paper: "https://doi.org/10.1109/EuroSPW61312.2024.00062" } },

  // ---------------------------------------------------------------- 2023 ----
  { title: "Not What You've Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection",
    authors: "Kai Greshake*, Sahar Abdelnabi*, Shailesh Mishra, Christoph Endres, Thorsten Holz, Mario Fritz",
    venue: "AISec", venueFull: "AISec Workshop @ ACM CCS 2023", year: 2023, type: "workshop",
    award: ["Best Paper Award", "Oral"], selected: true,
    links: { paper: "https://arxiv.org/abs/2302.12173",
             code: "https://github.com/greshake/llm-security" } },

  { title: "Fact-Saboteurs: A Taxonomy of Evidence Manipulation Attacks against Fact-Verification Systems",
    authors: "Sahar Abdelnabi, Mario Fritz",
    venue: "USENIX Sec", venueFull: "USENIX Security 2023", year: 2023, type: "conference",
    links: { paper: "https://arxiv.org/abs/2209.03755",
             code: "https://github.com/S-Abdelnabi/Fact-Saboteurs" } },

  { title: "From Attachments to SEO: Click Here to Learn More about Clickbait PDFs!",
    authors: "Giada Stivala, Sahar Abdelnabi, Andrea Mengascini, Mariano Graziano, Mario Fritz, Giancarlo Pellegrino",
    venue: "ACSAC", venueFull: "ACSAC 2023", year: 2023, type: "conference",
    links: { paper: "https://arxiv.org/abs/2308.01273",
             data: "https://www.kaggle.com/datasets/emerald101/from-attachments-to-seo" } },

  // ---------------------------------------------------------------- 2022 ----
  { title: "Open-Domain, Content-based, Multi-modal Fact-checking of Out-of-Context Images via Online Resources",
    authors: "Sahar Abdelnabi, Rakibul Hasan, Mario Fritz",
    venue: "CVPR", year: 2022, type: "conference",
    links: { paper: "https://openaccess.thecvf.com/content/CVPR2022/html/Abdelnabi_Open-Domain_Content-Based_Multi-Modal_Fact-Checking_of_Out-of-Context_Images_via_Online_Resources_CVPR_2022_paper.html",
             arxiv: "https://arxiv.org/abs/2112.00061",
             code: "https://github.com/S-Abdelnabi/OoC-multi-modal-fc",
             project: "https://s-abdelnabi.github.io/OoC-multi-modal-fc/" } },

  // ---------------------------------------------------------------- 2021 ----
  { title: "Adversarial Watermarking Transformer: Towards Tracing Text Provenance with Data Hiding",
    authors: "Sahar Abdelnabi, Mario Fritz",
    venue: "IEEE S&P", year: 2021, type: "conference", selected: true,
    links: { paper: "https://arxiv.org/abs/2009.03015",
             code: "https://github.com/S-Abdelnabi/awt" } },

  { title: "Artificial Fingerprinting for Generative Models: Rooting Deepfake Attribution in Training Data",
    authors: "Ning Yu*, Vladislav Skripniuk*, Sahar Abdelnabi, Mario Fritz",
    venue: "ICCV", year: 2021, type: "conference", award: "Oral", selected: true,
    links: { paper: "https://arxiv.org/abs/2007.08457",
             code: "https://github.com/ningyu1991/ArtificialGANFingerprints" } },

  { title: "What's in the Box: Deflecting Adversarial Attacks by Randomly Deploying Adversarially-Disjoint Models",
    authors: "Sahar Abdelnabi, Mario Fritz",
    venue: "MTD", venueFull: "ACM Moving Target Defense Workshop @ CCS 2021", year: 2021, type: "workshop",
    links: { paper: "https://arxiv.org/abs/2102.05104",
             code: "https://github.com/S-Abdelnabi/AdversariallyDisjoint" } },

  // ---------------------------------------------------------------- 2020 ----
  { title: "VisualPhishNet: Zero-Day Phishing Website Detection by Visual Similarity",
    authors: "Sahar Abdelnabi, Katharina Krombholz, Mario Fritz",
    venue: "CCS", venueFull: "ACM CCS 2020", year: 2020, type: "conference",
    links: { paper: "https://arxiv.org/abs/1909.00300",
             code: "https://github.com/S-Abdelnabi/VisualPhishNet" } },

  // ------------------------------------------------------------ earlier ----
  { title: "Towards High-Frequency SSVEP-Based Target Discrimination with an Extended Alphanumeric Keyboard",
    authors: "Sahar Abdelnabi, Michael Xuelin Huang, Andreas Bulling",
    venue: "SMC", venueFull: "IEEE International Conference on Systems, Man and Cybernetics (SMC) 2019", year: 2019, type: "conference",
    links: { paper: "https://doi.org/10.1109/SMC.2019.8914634",
             pdf: "https://www.collaborative-ai.org/publications/abdelnabi19_smc.pdf" } },

  { title: "Epileptic Seizure Prediction Using Zero-Crossings Analysis of EEG Wavelet Detail Coefficients",
    authors: "Sahar Abdelnabi, Seif Eldawlatly, Mahmoud I. Khalil",
    venue: "CIBCB", venueFull: "IEEE Conference on Computational Intelligence in Bioinformatics and Computational Biology (CIBCB) 2016", year: 2016, type: "conference",
    links: { paper: "https://doi.org/10.1109/CIBCB.2016.7758115" } },
];
