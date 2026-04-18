export type Project = {
  title: string;
  period?: string;
  category: string;
  tech: string[];
  description: string;
  result: string;
  details?: string[];
  githubUrl: string;
};

export const projectCategories = [
  "All", "Machine Learning", "Data & Analytics", "Systems & Web", "Research",
] as const;

export const projects: Project[] = [
  {
    title: "Drug Recommendation System",
    period: "ACM-W JuMP",
    category: "Machine Learning",
    tech: ["Python", "scikit-learn", "Classification", "NLP", "Healthcare ML"],
    description:
      "ML-based healthcare decision-support system predicting diseases from symptoms and generating tailored treatment recommendations, enabling data-driven clinical guidance at scale.",
    result:
      "Multi-class classification pipeline driving accurate medication, precaution, and dietary recommendations; demonstrates ML's direct impact on real-world health decision-making.",
    details: [
      "Datasets span symptom descriptions, medications, precautions, and dietary advice.",
      "Classification pipeline evaluated on precision, recall, and F1 on held-out cases.",
      "Part of ACM-W JuMP mentorship with emphasis on responsible healthcare ML.",
    ],
    githubUrl: "https://github.com/ShamScripts/",
  },
  {
    title: "Employee Attrition Prediction",
    period: "2024",
    category: "Machine Learning",
    tech: ["Python", "Pandas", "scikit-learn", "Random Forest", "EDA", "Model Evaluation"],
    description:
      "Predictive HR analytics system identifying at-risk employees before they leave, enabling organizations to act proactively on retention and reduce workforce disruption.",
    result:
      "Strong accuracy, precision, recall, and F1 performance; feature importance analysis surfaces the top drivers of attrition, directly supporting HR retention strategy and decision-making.",
    details: [
      "Handled class imbalance and performed feature engineering on HR attributes: job role, satisfaction level, salary, work environment.",
      "Random Forest classifier captures non-linear relationships between features.",
      "Feature importance analysis highlights top attrition drivers for HR decision-making.",
    ],
    githubUrl: "https://github.com/ShamScripts/",
  },
  {
    title: "Heart Disease Prediction System",
    period: "2025",
    category: "Machine Learning",
    tech: ["Python", "Logistic Regression", "Random Forest", "Streamlit", "Feature Engineering"],
    description:
      "End-to-end predictive pipeline using Logistic Regression and Random Forest for real-time cardiovascular risk assessment, with a deployable Streamlit interface for clinical use.",
    result:
      "Strong discriminative performance after feature engineering; Streamlit interface enables instant risk estimates from health markers, bridging ML output with usable decision support.",
    details: [
      "Data preprocessing, feature engineering, and comparative model evaluation.",
      "Streamlit interface allows clinicians and users to input health markers and get instant risk estimates.",
    ],
    githubUrl: "https://github.com/ShamScripts/",
  },
  {
    title: "Retail Data Analytics & Visualization Platform",
    period: "2024",
    category: "Data & Analytics",
    tech: ["Python", "Power BI", "Pandas", "Excel", "Dashboards"],
    description:
      "Analytics platform turning raw retail sales data into actionable business intelligence, surfacing customer behavior trends, product performance gaps, and regional expansion opportunities.",
    result:
      "Interactive Power BI dashboards deliver KPIs and revenue patterns to non-technical stakeholders; insights directly support product improvement and data-driven regional growth decisions.",
    details: [
      "Customer purchasing behavior and product performance analysis.",
      "Regional market expansion insights derived from sales segmentation.",
      "Power BI dashboards built for non-technical stakeholder consumption.",
    ],
    githubUrl: "https://github.com/ShamScripts/",
  },
  {
    title: "College Management System",
    period: "2025 · ongoing",
    category: "Systems & Web",
    tech: ["Full-Stack", "ERP", "Dashboards", "Auth", "SQL"],
    description:
      "Full-stack ERP-style platform integrating student, faculty, and administrative workflows, automating attendance, fees, scheduling, and communication into a unified operational system.",
    result:
      "Real-time monitoring dashboards across academic and operational data; streamlined multi-role processes improving institutional efficiency and reducing manual overhead.",
    details: [
      "Modules: attendance tracking, fee management, course scheduling, communication.",
      "Role-based access for students, faculty, parents, and admins.",
      "Operational dashboards with real-time data updates.",
    ],
    githubUrl: "https://github.com/ShamScripts/",
  },
  {
    title: "Magnetic Field Localization System (WPT)",
    period: "2025 · ongoing",
    category: "Research",
    tech: ["Python", "Linear Algebra", "Matrix Methods", "Signal Modeling"],
    description:
      "Python computational model identifying receiver coil positions in wireless power transfer systems, applying matrix-based signal analysis to improve localization accuracy.",
    result:
      "Matrix manipulation and voltage-detection simulations evaluated across varied spatial configurations; findings inform optimization of WPT system design.",
    details: [
      "Implements matrix manipulation for coil position inference.",
      "Evaluates system behavior under varying spatial configurations and optimization parameters.",
    ],
    githubUrl: "https://github.com/ShamScripts/",
  },
  {
    title: "Deep Learning Software Fault Prediction",
    period: "Research",
    category: "Research",
    tech: ["Python", "Deep Learning", "Code Embeddings", "Software Metrics"],
    description:
      "Research framework combining code representation learning with ML models to predict software defects, evaluated on benchmark datasets to improve automated quality assurance.",
    result:
      "Measurable lift over metric-only baselines; framework demonstrates how deep learning on code structure improves fault detection for software engineering decision support.",
    details: [
      "Investigates DL techniques for predicting defects via code embeddings and software metrics.",
      "Identifies gaps in prior defect-prediction literature.",
      "Framework: code representation learning combined with ML models.",
    ],
    githubUrl: "https://github.com/ShamScripts/",
  },
  {
    title: "CRM Follow-Up Management System",
    period: "TechMantra Gulf · 2025",
    category: "Systems & Web",
    tech: ["CRM", "Process Automation", "Dashboards", "Reporting"],
    description:
      "CRM system streamlining lead management and customer engagement, automating follow-up workflows and reporting to improve sales operations visibility and reduce manual overhead.",
    result:
      "Improved operational efficiency and visibility through data-driven systems; process automation directly reduced manual follow-up effort and accelerated sales cycle tracking.",
    details: [
      "Client requirement discussions and real-world CRM workflow exposure.",
      "Workflow documentation and internal data organization improvements.",
    ],
    githubUrl: "https://github.com/ShamScripts/",
  },
  {
    title: "Hackathon Builds",
    period: "2023 to 2025",
    category: "Systems & Web",
    tech: ["React", "Gen-AI", "APIs", "Product"],
    description:
      "Rapid prototypes across three hackathons: chatbot-enhanced commerce (ACM-W x MTC 2025), SuzieAI generative avatar (ACM x E-Cell 2024), Unicare healthcare app (2023).",
    result:
      "Shipped functional demos under strict timeboxes: API integration, product scoping, and clear demo narratives demonstrating execution under pressure.",
    githubUrl: "https://github.com/ShamScripts/",
  },
];
