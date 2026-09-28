import type { Project, SkillCategory, JourneyMilestone, ExploringTopic } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Gayathri V.",
  shortName: "Gayathri",
  monogram: "GV",
  title: "B.Tech Artificial Intelligence & Data Science Student",
  institution: "Bannari Amman Institute of Technology",
  academicPeriod: "2025 – 2029",
  currentCgpa: "7.28",
  institutionalEmail: "gayathriv.ad25@bitsathy.ac.in",
  personalEmail: "gayathri03042@gmail.com",
  github: "https://github.com/gayathri1328",
  linkedin: "https://www.linkedin.com/in/gayathri-v-443078390",
  badge: "Currently building & exploring AI",
  tagline: "Exploring AI, Data Science and creative technology while turning ideas into intelligent real-world solutions.",
  aboutHeading: "More than a student. A builder in progress.",
  bio: "I am a B.Tech Artificial Intelligence & Data Science student at Bannari Amman Institute of Technology with an authentic passion for turning abstract concepts into practical, interactive software. Rather than treating computer science as mere textbook theory, I approach learning by writing code, testing architectures, and leading student hackathon initiatives.",
  bioSecondary: "I am actively strengthening my foundations in core programming, data structures, and database systems, while aggressively exploring modern AI frontiers like Generative AI, Large Language Models, RAG pipelines, and Computer Vision. Driven by long-term aspirations in entrepreneurship, my goal is to build technology that solves tangible problems with elegance and impact."
};

export const CORE_PILLARS = [
  {
    title: "BUILD",
    tagline: "Turning ideas into working applications",
    description: "Prototyping responsive web apps, intelligent retrievers, and software tools that address real user pain points.",
    gradient: "from-purple-500 to-indigo-600",
    borderGlow: "rgba(168, 85, 247, 0.4)",
    icon: "Hammer"
  },
  {
    title: "LEARN",
    tagline: "Constantly exploring new technologies",
    description: "Deepening knowledge across algorithms, mathematics of AI, database normalization, and modern frameworks.",
    gradient: "from-cyan-400 to-blue-600",
    borderGlow: "rgba(6, 182, 212, 0.4)",
    icon: "GraduationCap"
  },
  {
    title: "CREATE",
    tagline: "Combining technology with design",
    description: "Crafting polished, accessible visual aesthetics and fluid interactive experiences that elevate functional logic.",
    gradient: "from-pink-500 to-rose-600",
    borderGlow: "rgba(236, 72, 153, 0.4)",
    icon: "Palette"
  },
  {
    title: "EXPLORE",
    tagline: "Experimenting with AI and emerging tech",
    description: "Testing RAG pipelines, prompt engineering, vision models, and distributed cloud tools in hackathon sprints.",
    gradient: "from-amber-400 to-violet-500",
    borderGlow: "rgba(251, 191, 36, 0.4)",
    icon: "Compass"
  }
];

export const EDUCATION_DATA = {
  degree: "B.Tech – Artificial Intelligence & Data Science",
  institution: "Bannari Amman Institute of Technology",
  duration: "2025 – 2029",
  cgpa: "7.28",
  location: "Sathyamangalam, Tamil Nadu",
  learningAreas: [
    { name: "C Programming", category: "Core Systems" },
    { name: "C++", category: "Object Oriented" },
    { name: "Python", category: "Data & AI" },
    { name: "HTML & CSS", category: "Web Design" },
    { name: "JavaScript", category: "Web Scripting" },
    { name: "Data Structures", category: "Foundations" },
    { name: "DBMS", category: "Data Systems" },
    { name: "Computational Problem Solving", category: "Logic & Math" },
    { name: "AI / ML Concepts", category: "Core Intelligence" }
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "programming",
    number: "01",
    name: "Programming",
    description: "Foundational and algorithmic programming languages used for core logic and system implementations.",
    iconName: "Terminal",
    skills: [
      { name: "C", focus: "Memory model, pointer arithmetic, procedural logic", levelTag: "Core Foundation" },
      { name: "C++", focus: "OOP paradigms, standard template library, efficiency", levelTag: "Core Foundation" },
      { name: "Python", focus: "Data wrangling, script automation, AI/ML libraries", levelTag: "Practical Experience" },
      { name: "SQL", focus: "Relational queries, table design, data aggregation", levelTag: "Practical Experience" }
    ]
  },
  {
    id: "web-development",
    number: "02",
    name: "Web Development",
    description: "Building interactive, accessible, and responsive user interfaces that connect to intelligent backends.",
    iconName: "Globe",
    skills: [
      { name: "HTML5", focus: "Semantic markup, accessibility, modern DOM structure", levelTag: "Core Foundation" },
      { name: "CSS3 / Modern Styling", focus: "Flexbox, Grid, glassmorphism, keyframe animation", levelTag: "Practical Experience" },
      { name: "JavaScript (ES6+)", focus: "Async/await, DOM manipulation, event loops, REST APIs", levelTag: "Practical Experience" }
    ]
  },
  {
    id: "ai-data",
    number: "03",
    name: "AI & Data",
    description: "Exploring machine learning workflows, data preprocessing, and next-generation language and vision models.",
    iconName: "Cpu",
    skills: [
      { name: "Machine Learning", focus: "Supervised & unsupervised learning principles", levelTag: "Practical Experience" },
      { name: "Data Analysis", focus: "Exploratory analysis, feature extraction, trend detection", levelTag: "Practical Experience" },
      { name: "Computer Vision", focus: "YOLO detection principles, spatial tracking, video analysis", levelTag: "Practical Experience" },
      { name: "NLP", focus: "Tokenization, text normalization, embeddings", levelTag: "Active Exploration" },
      { name: "Generative AI", focus: "Prompt design, generative pipelines, context augmentation", levelTag: "Active Exploration" },
      { name: "LLM Applications", focus: "Model integration, interactive querying, chat flows", levelTag: "Practical Experience" },
      { name: "RAG (Retrieval-Augmented)", focus: "Vector embeddings, contextual retrieval, semantic search", levelTag: "Practical Experience" }
    ]
  },
  {
    id: "tools-platforms",
    number: "04",
    name: "Tools & Platforms",
    description: "Development environments, version control, and cloud-native databases supporting iterative builds.",
    iconName: "Wrench",
    skills: [
      { name: "Git", focus: "Branching strategies, commit history, merge conflict resolution", levelTag: "Core Foundation" },
      { name: "GitHub", focus: "Remote repositories, collaborative workflows, version tracking", levelTag: "Core Foundation" },
      { name: "VS Code", focus: "Custom dev setups, extensions, integrated terminal debugging", levelTag: "Core Foundation" },
      { name: "Supabase", focus: "PostgreSQL backends, real-time data sync, auth storage", levelTag: "Practical Experience" },
      { name: "Antigravity", focus: "Modern agentic AI coding workspace and rapid iteration", levelTag: "Active Exploration" }
    ]
  },
  {
    id: "currently-exploring",
    number: "05",
    name: "Currently Exploring",
    description: "Advanced technological areas under active self-directed study and experimentation.",
    iconName: "Sparkles",
    skills: [
      { name: "Deep Learning", focus: "Neural network backpropagation, activation functions", levelTag: "Active Exploration" },
      { name: "Advanced Machine Learning", focus: "Ensemble techniques, model validation, loss functions", levelTag: "Active Exploration" },
      { name: "Generative AI Architectures", focus: "Transformer attention mechanisms, diffusion models", levelTag: "Active Exploration" },
      { name: "Advanced NLP", focus: "Multi-turn dialog state, semantic embeddings, fine-tuning", levelTag: "Active Exploration" },
      { name: "Advanced RAG Systems", focus: "Hybrid search, re-ranking strategies, chunk optimization", levelTag: "Active Exploration" },
      { name: "Cloud Computing", focus: "Serverless deployments, cloud storage, container fundamentals", levelTag: "Active Exploration" }
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "fourbidden-logic",
    title: "Fourbidden Logic",
    subtitle: "Personalized Learning Resource Retrieval with LLM & RAG",
    category: "AI / Education / Personalized Learning",
    badge: "Hackathon Highlight",
    team: "Fourbidden Logic",
    role: "Team Leader",
    description: "A personalized learning resource retrieval application engineered to deliver topic-focused educational materials through LLM and RAG concepts.",
    longDescription: "Fourbidden Logic was developed for the INTELLIX LLM & AI Optimization Hackathon. As Team Leader, I guided the project conceptualization, system flow, and integration of retrieval mechanisms that deliver targeted study resources instead of uncurated generic search results.",
    problem: "Students frequently experience cognitive overload when searching for specialized learning resources online, wading through disorganized forums and irrelevant search results.",
    solution: "By leveraging LLM comprehension alongside Retrieval-Augmented Generation (RAG) and semantic query retrieval connected to a Supabase database, Fourbidden Logic identifies student learning goals and matches them with high-signal, relevant explanations.",
    keyContributions: [
      "Led Team Fourbidden Logic during the INTELLIX Hackathon, defining application scope and technical direction",
      "Architected the semantic retrieval concept pairing user queries with domain study assets",
      "Integrated Supabase data storage for resource indexing and fast relational lookups",
      "Designed an intuitive web application interface for streamlined student interaction"
    ],
    technologies: ["LLM", "RAG", "Semantic Retrieval", "Supabase", "Web Application", "JavaScript"],
    liveUrl: "https://fourbidden-logic2.onrender.com/",
    accentColor: "#a855f7",
    gradient: "from-purple-600 via-indigo-600 to-pink-500",
    visualType: "rag-ai"
  },
  {
    id: "shenex",
    title: "SHENEX",
    subtitle: "Intelligent 360° Computer Vision Occupancy & Pattern Analysis",
    category: "Computer Vision / AI",
    badge: "Spatial Vision Intelligence",
    description: "An intelligent occupancy pattern analysis system utilizing computer vision to process 360° surveillance video, detect and track individuals, and quantify spatial dwell times.",
    longDescription: "SHENEX transforms raw surveillance footage into actionable spatial insights. Designed around YOLO computer vision models, it tracks person trajectories, estimates real-time room occupancy, and generates heatmaps that differentiate high-traffic bottlenecks from underutilized zones.",
    problem: "Facility managers and public venue operators lack automated, non-invasive mechanisms to understand how human traffic flows through physical spaces over time.",
    solution: "SHENEX applies continuous object detection and trajectory tracking across wide-angle cameras to build cumulative dwell-time matrices and visual traffic heatmaps without recording personally identifiable credentials.",
    keyContributions: [
      "Engineered the spatial detection pipeline based on YOLO deep vision architectures",
      "Implemented real-time person tracking and dwell-time duration estimation algorithms",
      "Designed visual heatmap synthesis logic to highlight density gradients and bottlenecks",
      "Formulated occupancy threshold triggers to detect sudden crowding anomalies"
    ],
    technologies: ["YOLO", "Computer Vision", "Person Detection", "Object Tracking", "Heatmap Analysis", "Dwell-Time Estimation", "Python"],
    // GitHub exists but URL not provided -> User rule: DO NOT invent URL.
    accentColor: "#06b6d4",
    gradient: "from-cyan-500 via-teal-500 to-blue-600",
    visualType: "computer-vision"
  },
  {
    id: "nexus",
    title: "NEXUS",
    subtitle: "Intelligent Freight Procurement Decision System",
    category: "AI Decision Support / Optimization",
    badge: "Multi-Stage Decision Engine",
    description: "An AI-driven decision-support system for global freight procurement that evaluates multi-variable voyage economics, risks, and carrier contract strategies.",
    longDescription: "NEXUS tackles the multi-million dollar challenge of global maritime freight procurement. It answers four central operational questions: Which vessel? When? Which contract strategy? Why? It guides procurement leaders through an 8-stage algorithmic pipeline from forecasting to automated explainability.",
    problem: "Global supply chain freight procurement relies heavily on volatile spot rates, fragmented carrier spreadsheets, and gut instinct, exposing shipments to sudden price spikes and vessel delay risks.",
    solution: "A sequential decision pipeline that ingests historical freight rates, forecasts volatility, simulates contract viability under maritime stress conditions, and generates human-readable reasoning for every chosen allocation.",
    keyContributions: [
      "Designed the 5-phase core decision cycle: FORECAST → VALIDATE → SIMULATE → OPTIMIZE → EXPLAIN",
      "Mapped the full 8-layer operational architecture from data ingestion to stress-testing",
      "Formulated the risk-adjusted cost optimization logic balancing spot contracts against long-term vessel charters",
      "Authored transparent explanation templates explaining trade-off decisions to supply chain stakeholders"
    ],
    technologies: ["Decision Intelligence", "Forecasting", "Simulation", "Optimization", "Risk Modeling", "Data Analytics"],
    hasArchitectureDiagram: true,
    architectureSteps: [
      { step: "01", label: "DATA", desc: "Ingestion of market rates, voyage routes, bunker costs, and historical lead times" },
      { step: "02", label: "FORECAST", desc: "Predictive price & capacity trends across major global maritime corridors" },
      { step: "03", label: "FEASIBILITY", desc: "Vessel draft, port berth availability, and customs readiness checks" },
      { step: "04", label: "VOYAGE", desc: "Routing simulation evaluating weather patterns, canal transit, and transit time" },
      { step: "05", label: "RISK", desc: "Geopolitical, demurrage, and carrier cancellation probability scoring" },
      { step: "06", label: "COST", desc: "Total landed cost evaluation including fuel surcharges and demurrage buffers" },
      { step: "07", label: "OPTIMIZE", desc: "Multi-objective mathematical solver balancing spot vs. long-term contracts" },
      { step: "08", label: "EXPLAIN", desc: "Natural-language reasoning summarizing trade-offs and rationale behind choice" }
    ],
    accentColor: "#f59e0b",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    visualType: "decision-system"
  },
  {
    id: "study-buddy",
    title: "Study Buddy",
    subtitle: "Interactive Student Productivity & Study Management Platform",
    category: "Web Application / Education",
    badge: "Deployed Web Experience",
    description: "An education-focused web platform designed to streamline student productivity, subject organization, and collaborative study routines.",
    longDescription: "Study Buddy was created to give students a unified, distraction-free environment to organize their academic schedules, track subject milestones, and maintain sustained focus during exam preparation cycles.",
    problem: "Students frequently juggle multiple disjointed tools for notes, task checklists, and exam schedules, fragmenting their daily study routines.",
    solution: "Study Buddy provides a cohesive, browser-based productivity dashboard that brings subject tracking, study timelines, and goal checkpoints together in one clean interface.",
    keyContributions: [
      "Constructed the complete frontend user experience using modern responsive web technologies",
      "Implemented intuitive task and schedule state management workflows",
      "Deployed the live interactive client on Netlify for seamless global access",
      "Optimized layout responsiveness across mobile and desktop viewports"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "Netlify", "Responsive UI"],
    liveUrl: "https://whimsical-kleicha-f847de.netlify.app/",
    accentColor: "#10b981",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    visualType: "education"
  },
  {
    id: "fleetguard-ai",
    title: "FleetGuard AI",
    subtitle: "Heavy-Vehicle Telematics & Driver Safety Concept System",
    category: "AI / Telematics / Safety",
    badge: "Safety Architecture",
    description: "An AI-powered heavy-vehicle telematics and driver-safety concept engineered to monitor driving patterns, alert against fatigue, and diagnose fleet telemetry.",
    longDescription: "FleetGuard AI investigates the intersection of edge AI and vehicular safety. Conceptualized for commercial transport fleets, it envisions continuous driver alertness monitoring combined with real-time telematics analysis to mitigate road incidents.",
    problem: "Heavy commercial transport operators suffer devastating accidents due to driver fatigue, blind spot hazards, and unmonitored erratic driving behaviors across long haul journeys.",
    solution: "An integrated telematics concept combining computer vision monitoring of driver gaze/facial fatigue indicators with onboard telemetry anomaly detection.",
    keyContributions: [
      "Conceptualized the vehicle telemetry and driver monitoring event pipeline",
      "Formulated alert state logic differentiating minor drowsiness cues from critical micro-sleep states",
      "Outlined edge deployment specifications suitable for low-latency onboard processors",
      "Designed dashboard mockups for fleet managers monitoring transit safety indices"
    ],
    technologies: ["AI Telematics", "Driver Safety", "Computer Vision Concepts", "Anomaly Detection", "IoT Data Modeling"],
    accentColor: "#ec4899",
    gradient: "from-pink-500 via-purple-500 to-indigo-600",
    visualType: "telematics"
  }
];

export const JOURNEY_MILESTONES: JourneyMilestone[] = [
  {
    year: "2025",
    phase: "The Spark & Matriculation",
    title: "Commenced B.Tech in AI & Data Science",
    organization: "Bannari Amman Institute of Technology",
    description: "Enrolled in the B.Tech Artificial Intelligence & Data Science program (2025–2029). Established core foundations in structured problem solving and computer engineering.",
    highlightBadge: "Academic Journey Begins",
    tags: ["Matriculation", "AI & Data Science", "Curiosity"]
  },
  {
    year: "2025",
    phase: "Foundational Foundations",
    title: "Mastering Core Programming & Logic",
    description: "Immersed in C programming, C++, basic data structures, and algorithmic logic. Built early console utilities and explored computational problem solving.",
    tags: ["C", "C++", "Data Structures", "Algorithmic Thinking"]
  },
  {
    year: "2025 – 2026",
    phase: "First Deployments",
    title: "Web Engineering & Study Buddy",
    description: "Transitioned from console programs to visual web software. Built and deployed Study Buddy to the web to solve everyday student organization friction.",
    tags: ["HTML/CSS", "JavaScript", "Netlify", "Productivity"]
  },
  {
    year: "2025",
    phase: "Hackathon Leadership",
    title: "INTELLIX: LLM & AI Optimization Hackathon",
    organization: "Team: Fourbidden Logic",
    role: "Team Leader",
    description: "Stepped up to lead team Fourbidden Logic in an intensive hackathon environment. Architected and deployed a personalized learning resource retrieval app using LLMs, RAG, and Supabase.",
    highlightBadge: "Team Leader — INTELLIX",
    tags: ["Team Leadership", "LLM", "RAG", "Supabase", "Rapid Prototyping"]
  },
  {
    year: "2025",
    phase: "Spatial Vision & Complex Systems",
    title: "SHENEX & NEXUS Engineering",
    description: "Explored advanced Computer Vision with YOLO for 360° occupancy detection (SHENEX) and formulated the multi-stage freight procurement decision architecture (NEXUS).",
    tags: ["YOLO", "Computer Vision", "Decision Intelligence", "Architecture Design"]
  },
  {
    year: "Present",
    phase: "Active Exploration & Growth",
    title: "Exploring Next-Gen AI & Entrepreneurship",
    description: "Deepening experimental investigations into Generative AI, RAG optimization, LLM agents, and cloud computing while continuously strengthening academic fundamentals (CGPA: 7.28).",
    highlightBadge: "Ongoing Horizon",
    tags: ["Generative AI", "RAG Systems", "Cloud", "Future Entrepreneurship"]
  }
];

export const EXPLORING_TOPICS: ExploringTopic[] = [
  {
    id: "generative-ai",
    title: "Generative AI",
    category: "Frontier Models",
    description: "Investigating modern multi-modal generation, prompt chaining, reasoning architectures, and practical agent workflows.",
    learningFocus: "Structured output formatting, tool usage, diffusion fundamentals",
    connectedTopics: ["llms", "rag", "nlp"],
    color: "#a855f7",
    icon: "Sparkles"
  },
  {
    id: "llms",
    title: "LLM Applications",
    category: "Language Models",
    description: "Building interactive applications that harness large language models for specialized problem retrieval and tutoring.",
    learningFocus: "Context windows, fine-tuning concepts, system prompting, evaluation",
    connectedTopics: ["generative-ai", "rag", "nlp"],
    color: "#ec4899",
    icon: "Brain"
  },
  {
    id: "rag",
    title: "RAG Systems",
    category: "Retrieval Architecture",
    description: "Augmenting language model accuracy by retrieving relevant vector-embedded context from external knowledge stores.",
    learningFocus: "Embedding spaces, chunking heuristics, vector indexing, hybrid retrieval",
    connectedTopics: ["llms", "deep-learning", "cloud-computing"],
    color: "#06b6d4",
    icon: "Layers"
  },
  {
    id: "nlp",
    title: "Natural Language Processing",
    category: "Linguistics & Text",
    description: "Understanding computational linguistics from basic tokenization to attention-based Transformer encoders.",
    learningFocus: "Syntactic parsing, sentiment analysis, semantic similarity metrics",
    connectedTopics: ["llms", "generative-ai"],
    color: "#3b82f6",
    icon: "MessageSquareText"
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    category: "Visual Perception",
    description: "Developing spatial understanding systems with YOLO object tracking, bounding box detection, and trajectory analysis.",
    learningFocus: "Convolutional layers, YOLO architectures, real-time video stream ingestion",
    connectedTopics: ["deep-learning", "machine-learning"],
    color: "#10b981",
    icon: "Scan"
  },
  {
    id: "machine-learning",
    title: "Machine Learning",
    category: "Statistical Learning",
    description: "Mastering supervised regression and classification, clustering heuristics, cross-validation, and performance evaluation.",
    learningFocus: "Loss functions, gradient descent, bias-variance tradeoff, scikit-learn",
    connectedTopics: ["deep-learning", "computer-vision"],
    color: "#f59e0b",
    icon: "LineChart"
  },
  {
    id: "deep-learning",
    title: "Deep Learning",
    category: "Neural Architectures",
    description: "Studying the mathematics of multi-layer perceptrons, backpropagation, activation non-linearities, and optimization algorithms.",
    learningFocus: "PyTorch tensor operations, CNNs, RNN/LSTM mechanics, gradient clipping",
    connectedTopics: ["computer-vision", "nlp", "rag"],
    color: "#8b5cf6",
    icon: "Network"
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    category: "Infrastructure & Scale",
    description: "Learning scalable deployment patterns, managed databases like Supabase, serverless workers, and distributed microservices.",
    learningFocus: "REST endpoints, container basics, cloud database indexing, latency optimization",
    connectedTopics: ["rag", "llms"],
    color: "#6366f1",
    icon: "Cloud"
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#journey" },
  { name: "Exploring AI", href: "#exploring-ai" },
  { name: "Contact", href: "#contact" }
];
