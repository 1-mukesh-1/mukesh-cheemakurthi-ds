import { Job, Education, Project, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/mukesh003/",
  github: "https://github.com/1-mukesh-1",
  email: "cheemakurthi.m@northeastern.edu",
  portfolio: "#",
  phone: "+1 (716) 418 9488"
};

export const EDUCATION: Education = {
  school: "Northeastern University | Khoury College of Computer Sciences",
  degree: "Master of Science, Computer Science",
  location: "Boston, MA, USA",
  period: "Sep 2024 – Apr 2026",
  gpa: "3.93",
  coursework: "Foundations of AI, Computer Vision, NLP, Algorithms, Programming Design Paradigms"
};

export const SKILLS: SkillCategory[] = [
  { category: "Programming", skills: ["Python", "SQL", "R", "Java", "Matlab", "JavaScript"] },
  { category: "AI / ML", skills: ["TensorFlow", "PyTorch", "LLMs", "AI Agents", "RAG", "Computer Vision", "Time Series", "SciPy", "Scikit-learn"] },
  { category: "Algorithms", skills: ["Monte-Carlo Search", "Local Search", "Stochastic Modelling", "Dynamic Programming", "Multi-Objective Optimization"] },
  { category: "Big Data", skills: ["Spark", "Hadoop", "Kafka", "Hive", "Pig", "GCP Dataproc", "Databricks", "Data Pipelines"] }
];

export const EXPERIENCE: Job[] = [
  {
    company: "The SATH Lab at Northeastern University",
    role: "ML Research Assistant",
    location: "Boston, MA",
    period: "Sep 2024 - Present",
    points: [
      "Implemented Vision Transformer architecture for 7-channel EEG analysis, automating apnea classification through spectrograms.",
      "Designed 8-worker DataLoader pipeline processing 30-second windows from 100+ EEG studies, achieving high training throughput.",
      "Developed sweep-line algorithm to merge 5 sleep stages and 5 breathing events, automating annotation across 1000+ studies."
    ]
  },
  {
    company: "Walmart Global Tech",
    role: "Data Scientist",
    location: "Bengaluru, KA, India",
    period: "Jul 2022 - Aug 2024",
    points: [
      "Automated schema mapping for 100+ tables across 5 systems using Llama LLM, reducing manual mapping time by 40%.",
      "Built ETL pipelines processing 50TB monthly and 500M+ daily transactions using Spark and Kafka, automating data ingestion.",
      "Reduced pipeline runtime by 83% (1h to 10min) through GCP Dataproc optimization using Delta Lake format and Spark tuning."
    ]
  },
  {
    company: "Walmart Global Tech",
    role: "Data Scientist (Internship)",
    location: "Bengaluru, KA, India",
    period: "Jan 2022 – Jul 2022",
    points: [
      "Built ML/DL pipeline on Databricks/PySpark optimizing pricing for 300+ stores; validated strategies through multi-phase A/B testing.",
      "Engineered graph-based DFS algorithm reducing cross-elasticity computation by 99% (1 min to <1 sec) for 1,000+ item relationships.",
      "Fine-tuned XGBoost demand models from 75% to 89% accuracy (+14pp) with 33% performance gain through feature engineering.",
      "Implemented PYOMO linear optimization and conducted A/B testing using Propensity Score Matching."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Neuralis: Personalized Multi-Agent AI Ecosystem",
    tech: "Langchain, React, Stateful AI",
    period: "Feb 2025",
    category: 'AI',
    points: [
      "Designed multi-agent AI system managing workflows with 5+ specialized agents including calendar and emails.",
      "Integrated 10+ APIs for effective communication, achieving 100% efficiency gains in daily tasks.",
      "Developed stateful memory, improving user task completion rates by 30%.",
      "Leveraged LLMs for context-aware note creation and knowledge extraction in document processing."
    ]
  },
  {
    title: "Warehouse SLIM Optimisation",
    tech: "Python, Blender 3D, Genetic Algorithm",
    period: "Jan 2025 - Apr 2025",
    category: 'Data',
    link: "#",
    points: [
      "Developed evolutionary algorithm to optimize warehouse space layout, reducing storage costs.",
      "Designed fitness function evaluating travel distance, picking time, weight and space utilization metrics.",
      "Achieved 40% improvement (WRT Baseline) in retrieval speed through optimized inventory placement."
    ]
  },
  {
    title: "T-shirt Size Estimator",
    tech: "CNN, Depth Estimation, Segmentation",
    period: "Sep 2024 - Dec 2024",
    category: 'AI',
    link: "#",
    points: [
      "Built ML pipeline with 89% accuracy using deep learning to automate body measures of mono images.",
      "Incorporated geometric algorithms to improve accuracy from 33% to 80% versus baseline models.",
      "Integrated MediaPipe pose detection and PyTorch CNN to enable real-time size recommendations."
    ]
  }
];

export const SYSTEM_INSTRUCTION = `
You are an AI assistant representing Mukesh Cheemakurthi. Your goal is to answer questions about his professional background, skills, and projects based ONLY on the provided context below.
Be professional, concise, and enthusiastic about his work in Data Science, AI, and Data Engineering.

Context:
Name: Mukesh Cheemakurthi
Phone: +1 (716) 418 9488
Email: cheemakurthi.m@northeastern.edu
Availability: May 2025 to Dec 2025

Education:
1. Northeastern University, MS in Computer Science (Sep 2024 - Apr 2026). GPA: 3.93.
   Coursework: Foundations of AI, Computer Vision, NLP, Algorithms, Programming Design Paradigms.
2. Vellore Institute of Technology, B.Tech in CSE (Jul 2018 - May 2022).

Skills:
Programming: Python, SQL, R, Java, Matlab, JavaScript.
AI/ML: SciPy, LLMs, AI Agents, Embeddings, Time Series, RAG, TensorFlow, PyTorch, Scikit-learn, Dimensionality Reduction.
Algorithms: Monte-Carlo Search, Local Search, Stochastic modelling, Dynamic Programming, Multi-Objective Optimization.
Big Data: Hadoop, Spark, Hive, Pig, Kafka, GCP Dataproc, Data Pipelines.

Experience:
1. The SATH Lab at Northeastern University (ML Research Assistant, Sep 2024 - Present):
   - Implemented Vision Transformer (ViT) for 7-channel EEG analysis (Apnea classification).
   - Designed 8-worker DataLoader pipeline for 100+ EEG studies.
   - Developed sweep-line algorithm to merge sleep stages and breathing events.

2. Walmart Global Tech (Data Scientist, Jul 2022 - Aug 2024):
   - Automated schema mapping for 100+ tables using Llama LLM.
   - Built ETL pipelines for 50TB monthly data using Spark/Kafka.
   - Reduced pipeline runtime by 83% using GCP Dataproc & Delta Lake.

3. Walmart Global Tech (Data Scientist Intern, Jan 2022 - Jul 2022):
   - Built ML pipelines on Databricks/PySpark.
   - Engineered graph-based DFS algorithm reducing computation by 99%.
   - Tuned XGBoost models (89% accuracy).

Projects:
1. Neuralis: Multi-Agent AI system (Langchain, React). 5+ agents, stateful memory.
2. Warehouse SLIM: Evolutionary algorithm for warehouse optimization. 40% speed improvement.
3. T-shirt Size Estimator: CNN & Depth Estimation. 89% accuracy, real-time recommendations.

If asked about something not in this context, say "I don't have that information, but you can reach out to Mukesh directly at cheemakurthi.m@northeastern.edu".
`;