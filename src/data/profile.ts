// Edit this file when replacing resume, photo, links, projects, roles, writing, or skills.
// Public assets live in /public: profile photo at /profile.jpg and resume at /resume.pdf.

export const profile = {
  name: "Saket Garodia",
  location: "Open to SF Bay Area, Seattle, NYC, Chicago, Austin, and Remote roles",
  email: "saketgarodia1@gmail.com",
  phone: "513-807-5167",
  headline: "AI/ML Engineer building production GenAI, RAG, optimization, and MLOps systems",
  roleFit: [
    "AI/ML Engineer",
    "Applied AI Engineer",
    "Senior Data Scientist",
    "GenAI Engineer",
    "MLOps Engineer"
  ],
  pitch:
    "I turn ambiguous business problems into shipped AI systems: pricing optimization at enterprise retail scale, lookalike models across 35M+ households, agentic AI tools, RAG products, and production ML workflows with monitoring, CI/CD, and measurable impact.",
  image: "/profile.jpg",
  resume: "/resume.pdf",
  links: {
    github: "https://github.com/garodisk",
    linkedin: "https://www.linkedin.com/in/saket-garodia",
    medium: "https://medium.com/@saketgarodia",
    pypiCoderBuddy: "https://pypi.org/project/coder-buddy/"
  },
  stats: [
    { label: "Annualized Business Impact", value: "$40M+" },
    { label: "Households Modeled", value: "35M+" },
    { label: "Production SLA / Reliability", value: "90%+" },
    { label: "Years ML + AI Experience", value: "8+" }
  ],
  about: [
    "I am an AI/ML Engineer and Senior Data Scientist with a software engineering foundation and 8+ years across machine learning, MLOps, optimization, NLP, and production AI systems.",
    "At 84.51 / Kroger, I build pricing, promotion, forecasting, and targeting systems that operate at enterprise scale. My work spans forecasting models, Pyomo optimization, Databricks and MLflow deployments, drift monitoring, CI/CD, A/B measurement, and production support.",
    "Outside core production ML, I build hands-on GenAI systems: LangGraph agentic coding tools, RAG search systems, full-stack LLM SaaS products, BERT fine-tuning and compression, and QLoRA/SFT/DPO alignment workflows."
  ],
  operatingPrinciples: [
    "Ship models into durable workflows, not isolated notebooks.",
    "Connect model quality to business outcomes, adoption, and reliability.",
    "Design AI products with evaluation, guardrails, observability, and clear user workflows."
  ]
};

export const navItems = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Writing", href: "#writing" },
  { label: "Contact", href: "#contact" }
];

export const experience = [
  {
    company: "84.51 / Kroger",
    role: "Senior Data Scientist - Machine Learning / MLOps",
    location: "Chicago, IL",
    period: "Jan 2022 - Present",
    bullets: [
      "Built and scaled production pricing and promotion optimization systems generating millions of item-location recommendations across enterprise retail workflows, contributing $40M+ in annual incremental profit.",
      "Led pickup, delivery, and eCommerce lookalike/lookahead models with 0.84 AUC, scoring 35M+ households and supporting $20M+ in potential value through Databricks, MLflow, drift monitoring, CI/CD, production testing, and A/B measurement.",
      "Re-architected digital engagement segmentation across 28M+ households, replacing a legacy rules-based pillar system used by Kroger targeting and marketing teams for personalized digital coupon campaigns.",
      "Built RPO-Upkeep, a repricing engine that translates cost changes, competitor price changes, size parity, brand spread, cost constraints, and competitive reactions into production logic with $5M+ potential annual value.",
      "Won a 2025 84.51 / Kroger Innovation Days hackathon with Forecast API Copilot, a multi-agent GenAI system using OpenAI Agents SDK, GPT-4o, RAG over ChromaDB, Pydantic validation, internal forecasting APIs, and Gradio.",
      "Sustained 90%+ SLA across millions of monthly optimization runs while mentoring junior data scientists and partnering with product, business, engineering, and executive stakeholders."
    ],
    tech: ["Databricks", "MLflow", "PySpark", "SQL", "Pyomo", "Azure", "GitHub Actions", "OpenAI Agents SDK"]
  },
  {
    company: "Asurion",
    role: "Data Scientist - Machine Learning / NLP",
    location: "Remote",
    period: "Oct 2020 - Dec 2021",
    bullets: [
      "Reduced Home+ product churn by 20%+ with a churn-risk model built on 100+ customer, engagement, and POS features, deployed on AWS SageMaker for personalized retention strategies.",
      "Improved call-center messaging sales per 100 contacts by 15% by fine-tuning and deploying a BERT-based sentiment model on call transcripts for real-time agent recommendations.",
      "Built NLP capabilities across customer sentiment, keyword detection, topic mining, call routing, and live agent reply suggestions in partnership with operations, product, and engineering teams."
    ],
    tech: ["AWS SageMaker", "BERT", "NLP", "Python", "Model Deployment"]
  },
  {
    company: "Edelweiss Financial Services",
    role: "Associate - Machine Learning / Data Science",
    location: "Mumbai, India",
    period: "Apr 2018 - Aug 2019",
    bullets: [
      "Reduced loan defaults by 30%+ with credit-risk models using demographic, loan-purpose, and geospatial features to predict delinquency probability.",
      "Developed customer profiling and segmentation frameworks with PCA, K-Means, and DBSCAN for targeted marketing and delivered Tableau dashboards to senior stakeholders."
    ],
    tech: ["Gradient Boosting", "Random Forest", "0.85 AUC", "PCA", "K-Means", "DBSCAN", "Tableau"]
  },
  {
    company: "Oracle",
    role: "Application Engineer - Full Stack",
    location: "Bangalore, India",
    period: "Jul 2014 - Aug 2015",
    bullets: [
      "Built features for Oracle CRM Cloud across data model design, frontend development, and service-layer integrations while resolving Jira-driven defects and enhancements."
    ],
    tech: ["Full-stack Engineering", "CRM Cloud", "Service Integrations", "Jira"]
  }
];

export const projects = [
  {
    title: "Coder Buddy",
    type: "Open-source agentic coding assistant",
    problem: "Developers need a code-building assistant that can clarify intent, plan architecture, and modify projects while keeping human approval in the loop.",
    solution:
      "Built a LangGraph-orchestrated 4-agent pipeline with Clarifier, Planner, Architect, and Coder agents plus sandboxed file, glob, regex search, and shell tools with dangerous-command blocking.",
    impact:
      "Published to PyPI as coder-buddy with multi-provider support for OpenAI, Claude, Gemini, Groq, and OpenRouter.",
    tech: ["LangGraph", "GPT-4o", "Claude", "Gemini", "Groq", "Python", "PyPI"],
    links: [
      { label: "PyPI", href: "https://pypi.org/project/coder-buddy/" },
      { label: "GitHub", href: "https://github.com/garodisk/CodeBuddy" }
    ]
  },
  {
    title: "AI Consultation Assistant",
    type: "Production-style GenAI SaaS",
    problem: "Consultation notes are often unstructured and slow to convert into reliable client-ready follow-ups.",
    solution:
      "Built a full-stack GenAI SaaS that converts notes into structured summaries, action items, and email drafts using real-time SSE streaming, structured LLM outputs, Clerk authentication, and subscription-gated access.",
    impact:
      "Containerized with Docker and deployed to AWS App Runner via ECR with CI/CD, environment management, logging, and a clean Next.js/FastAPI REST architecture.",
    tech: ["Next.js", "FastAPI", "OpenAI", "Clerk", "Docker", "AWS App Runner", "ECR"],
    links: []
  },
  {
    title: "RAG Search System",
    type: "Hybrid search and streaming AI Q&A",
    problem: "Users need to search and ask questions over a large Medium article corpus with both lexical precision and semantic recall.",
    solution:
      "Built a full-stack hybrid-search RAG system using BGE-base embeddings, BM25, reciprocal-rank fusion, FastAPI, Qdrant, and a Next.js frontend.",
    impact:
      "Supports streaming AI Q&A over 50K+ Medium articles, with Prefect and FastEmbed automating continuous RSS ingestion and incremental embedding updates.",
    tech: ["Next.js", "FastAPI", "Qdrant", "BGE", "BM25/RRF", "Prefect", "GCP Cloud Run"],
    links: [
      { label: "GitHub", href: "https://github.com/garodisk/medium-ai-blog-search" },
      { label: "Live demo", href: "https://medium-ai-blog-search.vercel.app" }
    ]
  },
  {
    title: "IT Ticket Classifier",
    type: "BERT fine-tuning and model compression",
    problem: "IT tickets need accurate classification while keeping deployment footprint practical.",
    solution:
      "Fine-tuned BERT-base on 47.8K IT tickets, then compressed the model via knowledge distillation into DistilBERT and FP16/INT4 NF4 quantization.",
    impact:
      "Reached 88.2% accuracy and 87.9% macro-F1, reducing memory 74% from 255 MB to 66 MB with less than 0.1% accuracy loss.",
    tech: ["PyTorch", "Hugging Face", "BERT", "DistilBERT", "Quantization", "Knowledge Distillation"],
    links: []
  },
  {
    title: "LLM Alignment Pipeline",
    type: "Fine-tuning and preference optimization",
    problem: "Large open-source models need practical alignment workflows that can run efficiently without full-model training.",
    solution:
      "Applied QLoRA-based SFT to Llama-2-7B, then aligned Mistral-7B with DPO on 12.8K preference pairs without a reward model.",
    impact:
      "Reduced perplexity by 71% with 40M trainable parameters out of 6.8B and completed DPO with final loss of 0.040.",
    tech: ["QLoRA", "SFT", "DPO", "Llama-2-7B", "Mistral-7B", "PEFT"],
    links: []
  },
  {
    title: "Build & Learn: GPT from Scratch",
    type: "Educational transformer implementation",
    problem: "Understanding LLMs deeply requires implementing core transformer components rather than only calling APIs.",
    solution:
      "Implemented a character-level GPT in PyTorch with multi-head self-attention, LayerNorm, residual connections, and a full training loop.",
    impact:
      "Published as a companion GitHub repository and 4-part Medium learning series.",
    tech: ["PyTorch", "Transformers", "Self-Attention", "Language Modeling", "Medium"],
    links: [
      { label: "GitHub", href: "https://github.com/garodisk/GPT-from-scratch" },
      { label: "Medium", href: "https://medium.com/@saketgarodia" }
    ]
  }
];

export const skillGroups = [
  {
    title: "AI/ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "XGBoost", "LightGBM", "BERT/DistilBERT", "NLP", "Forecasting", "A/B Testing", "Causal Inference"]
  },
  {
    title: "GenAI / LLMs",
    skills: ["OpenAI Agents SDK", "LangGraph", "LangChain", "CrewAI", "MCP", "Multi-Agent Systems", "RAG", "Function Calling", "Structured Outputs", "Embeddings"]
  },
  {
    title: "MLOps",
    skills: ["Databricks", "MLflow", "Model Serving", "Batch Inference", "Real-Time Inference", "Drift Monitoring", "CI/CD", "GitHub Actions", "Docker", "Terraform"]
  },
  {
    title: "Data Engineering",
    skills: ["SQL", "PySpark", "Delta Lake", "ETL Pipelines", "Data Validation", "Tableau", "Large-Scale Pipelines"]
  },
  {
    title: "Optimization",
    skills: ["Pyomo", "Mathematical Optimization", "Pricing Systems", "Promotion Optimization", "Forecasting", "Business Constraints"]
  },
  {
    title: "Cloud",
    skills: ["AWS SageMaker", "AWS App Runner", "ECR", "GCP Cloud Run", "Azure", "Vercel"]
  },
  {
    title: "Backend / Full-stack",
    skills: ["FastAPI", "REST APIs", "Next.js", "TypeScript", "SSE Streaming", "Clerk", "Gradio"]
  },
  {
    title: "Tools",
    skills: ["Qdrant", "ChromaDB", "Prefect", "Pydantic", "Hugging Face", "Git", "Jira", "OpenRouter"]
  }
];

export const writing = [
  {
    title: "Build and Learn GPT From Scratch",
    type: "Featured series",
    description: "Four-part PyTorch series explaining transformer fundamentals by implementing a character-level GPT with attention, LayerNorm, residual connections, and a full training loop.",
    tags: ["LLMs", "Transformers", "PyTorch", "Deep Learning"],
    parts: [
      "Part 1",
      "Part 2",
      "Part 3",
      "Part 4"
    ],
    link: "https://medium.com/@saketgarodia"
  },
  {
    title: "From Zero to API: The Data Scientist's Guide to FastAPI",
    type: "Model serving",
    description: "Practical guide for turning data science work into API-backed applications with FastAPI.",
    tags: ["FastAPI", "Backend", "Model Serving", "Deployment"],
    link: "https://medium.com/@saketgarodia"
  },
  {
    title: "End to End Machine Learning Project",
    type: "ML deployment",
    description: "Training and deploying machine learning models as web apps using Flask and Heroku.",
    tags: ["MLOps", "Flask", "Deployment", "Web Apps"],
    link: "https://medium.com/@saketgarodia"
  },
  {
    title: "Building a Recommendation Engine to Recommend Books in Spark",
    type: "Recommender systems",
    description: "Recommendation engine walkthrough using Spark for scalable recommendation workflows.",
    tags: ["Recommender Systems", "Spark", "ML", "Data Engineering"],
    link: "https://medium.com/@saketgarodia"
  },
  {
    title: "Contextual Multi-Armed Bandit",
    type: "Recommendation strategy",
    description: "Intuition behind Netflix artwork recommendation through a contextual bandit lens.",
    tags: ["Recommender Systems", "Bandits", "Optimization", "ML"],
    link: "https://medium.com/@saketgarodia"
  },
  {
    title: "Market Basket Analysis on 3 Million Orders from Instacart",
    type: "Large-scale analytics",
    description: "Market basket analysis using Spark on the Instacart orders dataset.",
    tags: ["Spark", "Analytics", "Retail", "Data Engineering"],
    link: "https://medium.com/@saketgarodia"
  },
  {
    title: "Topic Modelling using Word Embeddings and Latent Dirichlet Allocation",
    type: "NLP",
    description: "Topic modeling workflow combining word embeddings and LDA for text analysis.",
    tags: ["NLP", "Word Embeddings", "LDA", "Machine Learning"],
    link: "https://medium.com/@saketgarodia"
  },
  {
    title: "Image Classification using CNN and Transfer Learning",
    type: "Deep learning",
    description: "Applied deep learning article covering convolutional models and transfer learning approaches.",
    tags: ["Deep Learning", "CNNs", "Transfer Learning", "Computer Vision"],
    link: "https://medium.com/@saketgarodia"
  }
];

export const openSource = [
  {
    label: "GitHub profile",
    value: "58 public repositories",
    description: "Pinned work includes Coder Buddy, Medium AI blog search, Deep Research App, RAG systems, and GPT from scratch.",
    href: "https://github.com/garodisk"
  },
  {
    label: "Coder Buddy on PyPI",
    value: "Published package",
    description: "A Claude Code-style AI coding assistant built with LangGraph and GPT-4o, published as coder-buddy.",
    href: "https://pypi.org/project/coder-buddy/"
  },
  {
    label: "Deep Research App",
    value: "Agentic research pipeline",
    description: "Plans searches, gathers high-signal snippets, synthesizes Markdown reports with citations, and ships a Gradio UI.",
    href: "https://github.com/garodisk/Deep-Research-App"
  }
];

export const education = [
  {
    school: "University of Cincinnati",
    credential: "M.S. Business Analytics",
    details: "GPA 4.0/4.0, Graduate Merit Scholarship",
    period: "Aug 2019 - Aug 2020"
  },
  {
    school: "Indian Institute of Foreign Trade (IIFT), New Delhi",
    credential: "MBA, International Business",
    details: "Business and strategy foundation for applied analytics and product impact.",
    period: "Jul 2016 - Mar 2018"
  },
  {
    school: "National Institute of Technology (NIT), Calicut",
    credential: "B.Tech, Computer Science & Engineering",
    details: "Computer science foundation across software engineering and systems.",
    period: "Jul 2010 - Jun 2014"
  }
];

export const certifications = [
  "Neural Networks and Deep Learning",
  "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
  "AI Engineer Agentic Track: The Complete Agent & MCP course",
  "Generative AI fundamentals",
  "Stanford University Machine Learning (online certification)",
  "Alation User Brilliance Badge"
];
