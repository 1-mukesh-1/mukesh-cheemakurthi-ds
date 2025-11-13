import { Job, Education, Project, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/in/mukesh003/",
  github: "https://github.com/1-mukesh-1",
  email: "cheemakurthi.m@northeastern.edu",
  portfolio: "portfolio-page-url",
  phone: "+1 (716) 418 9488"
};

export const EDUCATION: Education = {
  school: "Northeastern University | Khoury College of Computer Sciences",
  degree: "Master of Science, Computer Science",
  location: "Boston, MA, USA",
  period: "Sept 2024 – Present",
  gpa: "3.83",
  coursework: "Foundations of AI, Programming Design Paradigms, Computer Vision, Algorithms"
};

export const SKILLS: SkillCategory[] = [
  { category: "Languages", skills: ["Python", "Java", "C++", "TypeScript", "JavaScript", "Node.js"] },
  { category: "Cloud & DevOps", skills: ["AWS", "GCP", "Azure", "Terraform", "Docker", "Kubernetes", "Jenkins", "Airflow"] },
  { category: "AI / ML", skills: ["LLMs", "AI Agents", "PyTorch", "TensorFlow", "Computer Vision", "Time Series", "Embeddings", "RAG"] },
  { category: "Data Engineering", skills: ["Spark", "Hadoop", "Kafka", "PostgreSQL", "MongoDB", "Redis", "Snowflake", "Databricks"] }
];

export const EXPERIENCE: Job[] = [
  {
    company: "Walmart Global Tech",
    role: "Data Engineer 2",
    location: "Bengaluru, KA, India",
    period: "July 2022 – Aug 2024",
    points: [
      "Engineered stakeholder-aligned solutions for data projects via iterative requirement gathering.",
      "Developed large-scale ETL pipelines processing 1TB+ data using Apache Spark, Hadoop and Kafka.",
      "Enhanced Cloud parameters reducing pipeline runtime from 8 hours to 1 hour, cutting cloud costs.",
      "Integrated 5+ Order Management components and migrated 50+ Data Models from Oracle to GCP."
    ]
  },
  {
    company: "Walmart Global Tech",
    role: "Data Scientist (Internship)",
    location: "Bengaluru, KA, India",
    period: "Jan 2022 – July 2022",
    points: [
      "Built an 8-step ML/DL pipeline on Databricks using PySpark to optimize pricing strategies for max profits.",
      "Utilized XGBoost to extract self-elasticity and cross-elasticities for items across 300+ Walmart stores.",
      "Performed time series analysis to forecast demand patterns and determine seasonality coefficients.",
      "Accelerated system components by implementing a DFS algorithm, reducing processing time by 99%.",
      "Fine-tuned existing models to increase accuracy from 75% to 89% and performance by 33%."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Neuralis: Personalized Multi-Agent AI Ecosystem",
    tech: "Langchain, React, Stateful AI",
    period: "Jan 2025",
    category: 'AI',
    points: [
      "Designed multi-agent AI system managing workflows with 5+ specialized agents (calendar, emails).",
      "Integrated 10+ APIs for effective communication, achieving 100% efficiency gains in daily tasks.",
      "Developed stateful memory, improving user task completion rates by 30%.",
      "Leveraged LLMs for context-aware note creation and knowledge extraction."
    ]
  },
  {
    title: "Warehouse SLIM Optimisation using Genetic Algorithm",
    tech: "Python, Blender 3D",
    period: "Jan 2025",
    category: 'Data',
    link: "#",
    points: [
      "Developed evolutionary algorithm to optimize warehouse space layout, reducing storage costs.",
      "Designed fitness function evaluating travel distance, picking time, weight and space utilization.",
      "Achieved 40% improvement (WRT Baseline) in retrieval speed.",
      "Performed comparative analysis with Markov Decision Process and Local Search."
    ]
  },
  {
    title: "T-shirt Size Estimator",
    tech: "CNN, Depth Estimation, Segmentation",
    period: "Dec 2024",
    category: 'AI',
    link: "#",
    points: [
      "Built ML pipeline with 89% accuracy using deep learning to automate body measures of mono images.",
      "Incorporated geometric algorithms to improve accuracy from 33% to 80% versus baseline models.",
      "Integrated MediaPipe pose detection and PyTorch CNN for real-time size recommendations."
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
Northeastern University, MS in Computer Science (Sept 2024 - Present). GPA: 3.83. Coursework: AI, PDP, CV, Algorithms.

Skills:
Python, Java, C++, TypeScript, AWS, GCP, Azure, Docker, Kubernetes, Spark, Kafka, LLMs, AI Agents, BERT, GANs.

Experience:
1. Walmart Global Tech (Data Engineer 2, July 2022 - Aug 2024):
   - Built ETL pipelines for 1TB+ data (Spark/Hadoop).
   - Reduced pipeline runtime from 8 hours to 1 hour.
   - Migrated 50+ data models to GCP.
2. Walmart Global Tech (Data Scientist Intern, Jan 2022 - July 2022):
   - Built ML pipelines on Databricks (PySpark).
   - Used XGBoost for elasticity analysis.
   - Reduced processing time by 99% using DFS algorithm.
   - Increased model accuracy from 75% to 89%.

Projects:
1. Neuralis: Multi-Agent AI system (Langchain, React). 5+ agents, stateful memory.
2. Warehouse SLIM: Genetic Algorithm for warehouse optimization. 40% improvement in retrieval speed.
3. T-shirt Size Estimator: CNN & Depth Estimation. 89% accuracy.

If asked about something not in this context, say "I don't have that information, but you can reach out to Mukesh directly at cheemakurthi.m@northeastern.edu".
`;
