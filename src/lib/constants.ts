import type { Site, Page } from './types'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/ShiroYasha18',
  linkedin: 'https://www.linkedin.com/in/ayraf-raihan-18082004ay/',
  mail: 'mailto:ayrafr8@gmail.com',



}

// Global
export const SITE: Site = {
  TITLE: 'Astro Sphere',
  DESCRIPTION:
    'Welcome to Astro Sphere, a portfolio and blog for designers and developers.',
  AUTHOR: 'Mark Horn',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}
// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const STUDIES = [
  {
    title: 'Btech-CS(AI)',
    institution: 'MITB',
    link: 'https://www.manipal.edu/mu/campuses/mahe-bengaluru/academics/institution-list/mitblr.html',
    date: '2022 - 2026',
  },
  {
    title: 'Secondary High School',
    institution: 'DAV Kharghar',
    link: 'https://davkharghar.org.in/',
    date: '2020 - 2022',
  },
  {
    title: 'High School',
    institution: 'Ryan International School',
    link: 'https://www.ryangroup.org/',
    date: '2018 - 2020',
  },
  {
    title: '...',
    institution: 'Udemy',
    link: 'https://www.udemy.com/',
    date: '2018 - 2022',
  },
  {
    title: '...',
    institution: 'Buildspace',
    link: 'https://buildspace.so/',
    date: '2024 - 2024',
  },
  {
    title: '...',
    institution: 'Coursera',
    link: 'courser.org',
    date: '2022 - 2026',
  },
 
]
export const EXPERIENCE = [

  {
    "company": "IBM",
    "location": "Remote",
    "position": "AI Intern",
    "start": "November 2024",
    "end": "Present",
    "tasks": [
        "Developed a multi-stage AI pipeline to evaluate handwritten answer sheets using LLMs, achieving 88% higher accuracy than traditional OCR.",
        "Integrated IBM’s internal data ingestion software to convert PDFs into Parquet format, maintaining structure and layout for efficient processing.",
        "Benchmarked and optimized handwriting recognition by testing 10+ Vision-Language models, including WatsonX, Pixtral, Gemini, and other state-of-the-art models.",
        "Implemented LLaMA 3.2 90B Vision Instruct model, significantly improving answer extraction accuracy in complex answer formats.",
        "Designed a hybrid grading system using cosine similarity, sentence transformers, and adaptive NLP techniques, dynamically switching algorithms based on institutional grading preferences.",
        "Engineered an advanced diagram processing module, enabling AI to interpret and analyze handwritten diagrams with structured evaluation.",
        "Pioneered a custom regex-based chunking strategy, enhancing segmented answer evaluation and boosting efficiency in large-scale answer sheet processing."
    ],
},

  {
    company: 'Intel Technologies Pvt. Ltd.',
    location: 'Bengaluru, India',
    position: 'Project Intern',
    start: 'March 2024',
    end: 'September 2024',
    tasks: [
      'Created multiple AI-powered internal tools to optimize data processing and model performance.',
      'Gained hands-on experience with LLM fine-tuning techniques.',
      'Explored Graph Retrieval-Augmented Generation (RAG) for enhanced data retrieval and understanding.',
      'Developed an internal tool to convert natural language to SQL using defog/sqlcoder-7b-2 from HuggingFace improving their old model improving the overall performance by 23%',
    ],
  },
  {
    company: 'Omdena',
    location: 'Remote',
    position: 'Generative AI Engineer',
    start: 'January 2024',
    end: 'May 2024',
    tasks: [
      'Led the LLM team of 30 engineers for a mental health support chatbot.',
      'Implemented RAG architecture to enhance chatbot performance.',
    ],
  },
  {
    company: 'Optimum AI',
    location: 'Remote',
    position: 'AI Researcher',
    start: 'February 2024',
    end: 'May 2024',
    tasks: [
      'Contributed to a hierarchical multi-agent AI finance planner project.',
      'Deployed solutions on AWS for scalability and performance.',
    ],
  },
  {
    company: 'IEEE EPICS',
    location: 'Bengaluru, India',
    position: 'IEEE Research Intern',
    start: 'September 2023',
    end: '2024',
    tasks: [
      'Led a team of 20+ members in designing and developing a multi-terrain autonomous rover.',
      'Utilized LiDARs, sensors, edge computing, and machine learning technologies.',
    ],
  },
];
