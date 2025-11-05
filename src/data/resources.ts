export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'cheatsheet' | 'guide' | 'template' | 'tool';
  tags: string[];
  link: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const resources: Resource[] = [
  {
    id: 'r1',
    title: 'DSA Quick Reference Guide',
    description: 'Comprehensive cheatsheet covering all major data structures and algorithms with time/space complexity.',
    type: 'cheatsheet',
    tags: ['dsa', 'algorithms', 'interview'],
    link: '/resources/dsa-cheatsheet',
    difficulty: 'Intermediate',
  },
  {
    id: 'r2',
    title: 'SQL Interview Questions Bank',
    description: '100+ SQL questions covering JOINs, window functions, CTEs, and optimization.',
    type: 'guide',
    tags: ['sql', 'database', 'interview'],
    link: '/resources/sql-questions',
    difficulty: 'Intermediate',
  },
  {
    id: 'r3',
    title: 'System Design Templates',
    description: 'Ready-to-use templates for designing scalable systems like URL shortener, chat apps, and video streaming.',
    type: 'template',
    tags: ['system-design', 'architecture', 'scalability'],
    link: '/resources/system-design',
    difficulty: 'Advanced',
  },
  {
    id: 'r4',
    title: 'Behavioral Interview Framework',
    description: 'STAR method guide with 50+ sample questions and winning answers.',
    type: 'guide',
    tags: ['behavioral', 'hr', 'soft-skills'],
    link: '/resources/behavioral',
    difficulty: 'Beginner',
  },
  {
    id: 'r5',
    title: 'Aptitude Test Prep Kit',
    description: 'Quantitative, logical reasoning, and verbal ability practice questions for campus placements.',
    type: 'guide',
    tags: ['aptitude', 'reasoning', 'campus'],
    link: '/resources/aptitude',
    difficulty: 'Beginner',
  },
  {
    id: 'r6',
    title: 'Python for Data Science Cheatsheet',
    description: 'Pandas, NumPy, and Matplotlib quick reference for data analysis roles.',
    type: 'cheatsheet',
    tags: ['python', 'data-science', 'pandas'],
    link: '/resources/python-ds',
    difficulty: 'Intermediate',
  },
  {
    id: 'r7',
    title: 'Resume Builder Tool',
    description: 'ATS-friendly resume templates optimized for tech roles.',
    type: 'tool',
    tags: ['resume', 'career', 'job-search'],
    link: '/resources/resume-builder',
    difficulty: 'Beginner',
  },
  {
    id: 'r8',
    title: 'Microsoft Company Guide',
    description: 'Everything about Microsoft interviews: culture, tech stack, compensation, and insider tips.',
    type: 'guide',
    tags: ['microsoft', 'company-guide', 'culture'],
    link: '/resources/microsoft-guide',
    difficulty: 'Intermediate',
  },
  {
    id: 'r9',
    title: 'Google Company Guide',
    description: 'Complete guide to cracking Google interviews with focus on algorithms and Googleyness.',
    type: 'guide',
    tags: ['google', 'company-guide', 'faang'],
    link: '/resources/google-guide',
    difficulty: 'Advanced',
  },
  {
    id: 'r10',
    title: 'Statistics for Data Analysts',
    description: 'Essential statistics concepts: hypothesis testing, regression, A/B testing, and distributions.',
    type: 'cheatsheet',
    tags: ['statistics', 'data-analysis', 'math'],
    link: '/resources/statistics',
    difficulty: 'Intermediate',
  },
  {
    id: 'r11',
    title: 'API Testing Postman Collection',
    description: 'Ready-made Postman collection for practicing REST API testing.',
    type: 'tool',
    tags: ['api', 'testing', 'postman'],
    link: '/resources/api-testing',
    difficulty: 'Intermediate',
  },
  {
    id: 'r12',
    title: 'OOP Concepts for Interviews',
    description: 'Object-oriented programming principles with Java and C# examples.',
    type: 'cheatsheet',
    tags: ['oop', 'java', 'csharp'],
    link: '/resources/oop',
    difficulty: 'Beginner',
  },
];
