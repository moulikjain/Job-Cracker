export interface Course {
  id: string;
  title: string;
  provider: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  link: string;
  description: string;
}

export interface InterviewRound {
  id: string;
  name: string;
  description: string;
  duration: string;
  evaluationCriteria: string[];
  tips: string[];
}

export interface Question {
  id: string;
  question: string;
  round: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
}

export interface WeekPlan {
  week: number;
  theme: string;
  tasks: string[];
  weekendReview: string;
}

export interface RecruitmentDate {
  id: string;
  title: string;
  type: 'application' | 'test' | 'interview' | 'result';
  startDate: string;
  endDate?: string;
  notes: string;
}

export interface SimilarRole {
  role: string;
  companies: string[];
  matchPercentage: number;
}

export interface RoadmapNode {
  id: string;
  title: string;
  tags: string[];
  estimatedHours?: number;
  resources?: { label: string; url: string }[];
  dependsOn?: string[];
  status?: 'not_started' | 'in_progress' | 'done' | 'confident';
}

export interface RoadmapPhase {
  id: string;
  title: string;
  weekRange?: [number, number];
  nodes: RoadmapNode[];
}

export interface PrepData {
  roleId: string;
  roleName: string;
  companyId: string;
  companyName: string;
  roleSummary: string;
  keySkills: string[];
  salaryBand: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  hiringSeason: string;
  recommendedCourses: Course[];
  interviewRounds: InterviewRound[];
  previousYearQuestions: Question[];
  studyPlan: WeekPlan[];
  similarRoles: SimilarRole[];
  recruitmentDates: RecruitmentDate[];
  roadmapPhases: RoadmapPhase[];
  techStack?: string[];
  locationPolicy?: string;
}

export const roles = [
  'Software Engineer',
  'Data Analyst',
  'Product Manager',
  'QA Engineer',
  'DevOps Engineer',
  'Cloud Engineer',
  'UI/UX Designer',
  'Marketing Analyst',
  'Finance Analyst',
];

export const qualifications = [
  'B.Tech CSE',
  'B.Tech IT',
  'B.Sc Computer Science',
  'MCA',
  'MBA',
  'M.Tech',
  'Diploma',
  'BCA',
];

export const companies = [
  'Google',
  'Microsoft',
  'Amazon',
  'Atlassian',
  'Adobe',
  'Salesforce',
  'TCS',
  'Infosys',
  'Accenture',
  'Flipkart',
  'Zomato',
];

// Comprehensive mock data for different role-company combinations
export const prepDataMap: Record<string, PrepData> = {
  'Software Engineer-Microsoft': {
    roleId: 'swe',
    roleName: 'Software Engineer',
    companyId: 'microsoft',
    companyName: 'Microsoft',
    roleSummary: 'Build scalable cloud services and applications using cutting-edge Microsoft technologies. Work on products used by millions globally.',
    keySkills: ['Data Structures', 'Algorithms', 'System Design', 'C#/.NET', 'Azure', 'Problem Solving'],
    salaryBand: '₹18-35 LPA',
    difficulty: 'Hard',
    hiringSeason: 'Year-round with peak in Aug-Oct',
    techStack: ['C#', '.NET', 'Azure', 'TypeScript', 'React'],
    locationPolicy: 'Hybrid (3 days office)',
    recommendedCourses: [
      {
        id: 'c1',
        title: 'Data Structures and Algorithms Masterclass',
        provider: 'Udemy',
        duration: '40 hours',
        level: 'Intermediate',
        link: 'https://udemy.com/dsa',
        description: 'Master DSA with 300+ problems covering arrays, trees, graphs, and dynamic programming.'
      },
      {
        id: 'c2',
        title: 'System Design for Interviews',
        provider: 'Educative',
        duration: '25 hours',
        level: 'Advanced',
        link: 'https://educative.io/sysdesign',
        description: 'Learn to design scalable systems like Twitter, Netflix, and Uber.'
      },
      {
        id: 'c3',
        title: 'C# Complete Guide',
        provider: 'Pluralsight',
        duration: '30 hours',
        level: 'Intermediate',
        link: 'https://pluralsight.com/csharp',
        description: 'From basics to advanced C# concepts including LINQ, async/await, and .NET Core.'
      },
      {
        id: 'c4',
        title: 'LeetCode Premium',
        provider: 'LeetCode',
        duration: 'Self-paced',
        level: 'Intermediate',
        link: 'https://leetcode.com',
        description: 'Solve 200+ curated problems focusing on Microsoft interview patterns.'
      },
    ],
    interviewRounds: [
      {
        id: 'r1',
        name: 'Online Assessment',
        description: 'Timed coding test with 2-3 DSA problems',
        duration: '90 minutes',
        evaluationCriteria: ['Code correctness', 'Time complexity', 'Edge case handling'],
        tips: ['Practice medium-level LeetCode', 'Focus on arrays, strings, and trees', 'Write clean, readable code']
      },
      {
        id: 'r2',
        name: 'Technical Round 1',
        description: 'Coding interview with focus on DSA and problem-solving',
        duration: '60 minutes',
        evaluationCriteria: ['Problem-solving approach', 'Code quality', 'Communication'],
        tips: ['Think out loud', 'Start with brute force, then optimize', 'Ask clarifying questions']
      },
      {
        id: 'r3',
        name: 'Technical Round 2',
        description: 'Advanced DSA and basic system design discussion',
        duration: '60 minutes',
        evaluationCriteria: ['Scalability thinking', 'Trade-off analysis', 'Technical depth'],
        tips: ['Discuss trade-offs clearly', 'Know time/space complexity', 'Be ready for follow-up optimizations']
      },
      {
        id: 'r4',
        name: 'Hiring Manager Round',
        description: 'Behavioral questions and cultural fit assessment',
        duration: '45 minutes',
        evaluationCriteria: ['Leadership', 'Team collaboration', 'Microsoft values alignment'],
        tips: ['Use STAR method', 'Show growth mindset', 'Prepare questions about team and projects']
      },
    ],
    previousYearQuestions: [
      { id: 'q1', question: 'Find the longest substring without repeating characters', round: 'Online Assessment', difficulty: 'Medium', topics: ['Strings', 'Sliding Window'] },
      { id: 'q2', question: 'Implement LRU Cache', round: 'Online Assessment', difficulty: 'Hard', topics: ['Hash Map', 'Doubly Linked List'] },
      { id: 'q3', question: 'Reverse words in a string', round: 'Technical Round 1', difficulty: 'Medium', topics: ['Strings', 'Two Pointers'] },
      { id: 'q4', question: 'Binary tree vertical order traversal', round: 'Technical Round 1', difficulty: 'Medium', topics: ['Trees', 'BFS'] },
      { id: 'q5', question: 'Merge K sorted linked lists', round: 'Technical Round 1', difficulty: 'Hard', topics: ['Linked Lists', 'Heap'] },
      { id: 'q6', question: 'Design a parking lot system', round: 'Technical Round 2', difficulty: 'Medium', topics: ['System Design', 'OOP'] },
      { id: 'q7', question: 'Find median in a data stream', round: 'Technical Round 2', difficulty: 'Hard', topics: ['Heap', 'Design'] },
      { id: 'q8', question: 'Clone a graph', round: 'Technical Round 2', difficulty: 'Medium', topics: ['Graphs', 'DFS'] },
      { id: 'q9', question: 'Tell me about a time you had to make a technical trade-off', round: 'Hiring Manager Round', difficulty: 'Medium', topics: ['Behavioral'] },
      { id: 'q10', question: 'Describe a situation where you improved team collaboration', round: 'Hiring Manager Round', difficulty: 'Medium', topics: ['Behavioral'] },
    ],
    studyPlan: [
      { week: 1, theme: 'DSA Foundations - Arrays & Strings', tasks: ['Solve 15 easy problems', 'Learn sliding window technique', 'Practice two-pointer problems'], weekendReview: 'Revisit tough problems and make notes on patterns' },
      { week: 2, theme: 'Trees & Graphs', tasks: ['Master tree traversals', 'Learn BFS/DFS', 'Solve 12 tree problems'], weekendReview: 'Create cheat sheet for tree/graph algorithms' },
      { week: 3, theme: 'Dynamic Programming', tasks: ['Understand DP patterns', 'Solve 10 DP problems', 'Practice memoization vs tabulation'], weekendReview: 'Review all DP problems and categorize by pattern' },
      { week: 4, theme: 'Advanced DSA', tasks: ['Heaps and priority queues', 'Tries and advanced strings', 'Solve 12 medium/hard problems'], weekendReview: 'Mock interview with peer' },
      { week: 5, theme: 'System Design Basics', tasks: ['Study scaling principles', 'Learn about load balancers, CDNs', 'Practice designing simple systems'], weekendReview: 'Design 2-3 systems end-to-end' },
      { week: 6, theme: 'C# & .NET Fundamentals', tasks: ['Complete C# course modules', 'Build a small API project', 'Learn async/await patterns'], weekendReview: 'Code review your project' },
      { week: 7, theme: 'Mock Interviews & Revision', tasks: ['Take 3 mock interviews', 'Revise weak topics', 'Practice behavioral questions'], weekendReview: 'Final review of all problem patterns' },
      { week: 8, theme: 'Final Prep & Confidence Building', tasks: ['Solve random problems daily', 'Review company values', 'Prepare questions for interviewers'], weekendReview: 'Relax and visualize success' },
    ],
    similarRoles: [
      { role: 'Software Engineer', companies: ['Google', 'Amazon', 'Adobe'], matchPercentage: 95 },
      { role: 'Backend Developer', companies: ['Atlassian', 'Salesforce'], matchPercentage: 85 },
      { role: 'Full Stack Engineer', companies: ['Flipkart', 'Zomato'], matchPercentage: 80 },
    ],
    recruitmentDates: [
      { id: 'd1', title: 'On-Campus Applications Open', type: 'application', startDate: '2025-08-01', endDate: '2025-08-15', notes: 'Submit resume via college portal' },
      { id: 'd2', title: 'Online Assessment', type: 'test', startDate: '2025-08-20', endDate: '2025-08-22', notes: '90-min coding test' },
      { id: 'd3', title: 'Technical Interviews', type: 'interview', startDate: '2025-09-01', endDate: '2025-09-10', notes: 'Multiple rounds scheduled' },
      { id: 'd4', title: 'Results Announced', type: 'result', startDate: '2025-09-20', notes: 'Final offers sent via email' },
    ],
    roadmapPhases: [
      {
        id: 'phase-1',
        title: 'Foundations',
        weekRange: [1, 2],
        nodes: [
          { id: 'arrays-strings', title: 'Arrays & Strings', tags: ['DSA'], estimatedHours: 12, status: 'not_started' },
          { id: 'sliding-window', title: 'Sliding Window', tags: ['DSA'], estimatedHours: 8, dependsOn: ['arrays-strings'] },
          { id: 'two-pointers', title: 'Two Pointers', tags: ['DSA'], estimatedHours: 6, dependsOn: ['arrays-strings'] },
        ],
      },
      {
        id: 'phase-2',
        title: 'Intermediate',
        weekRange: [3, 5],
        nodes: [
          { id: 'trees-graphs', title: 'Trees & Graphs', tags: ['DSA'], estimatedHours: 15, dependsOn: ['two-pointers'] },
          { id: 'dynamic-programming', title: 'Dynamic Programming', tags: ['DSA'], estimatedHours: 20, dependsOn: ['trees-graphs'] },
          { id: 'heaps', title: 'Heaps & Priority Queues', tags: ['DSA'], estimatedHours: 10, dependsOn: ['trees-graphs'] },
        ],
      },
      {
        id: 'phase-3',
        title: 'Advanced',
        weekRange: [6, 7],
        nodes: [
          { id: 'system-design', title: 'System Design Basics', tags: ['System Design'], estimatedHours: 15 },
          { id: 'csharp-dotnet', title: 'C# & .NET', tags: ['Language'], estimatedHours: 18 },
          { id: 'azure-cloud', title: 'Azure Fundamentals', tags: ['Cloud'], estimatedHours: 12, dependsOn: ['csharp-dotnet'] },
        ],
      },
      {
        id: 'phase-4',
        title: 'Interview Ready',
        weekRange: [8, 8],
        nodes: [
          { id: 'mock-interviews', title: 'Mock Interviews', tags: ['Practice'], estimatedHours: 10, dependsOn: ['system-design'] },
          { id: 'behavioral-prep', title: 'Behavioral Questions', tags: ['Behavioral'], estimatedHours: 5 },
        ],
      },
    ],
  },
  
  'Data Analyst-Atlassian': {
    roleId: 'data-analyst',
    roleName: 'Data Analyst',
    companyId: 'atlassian',
    companyName: 'Atlassian',
    roleSummary: 'Drive data-driven decisions for products used by Fortune 500 companies. Work with massive datasets to uncover insights.',
    keySkills: ['SQL', 'Python', 'Tableau/Power BI', 'Statistics', 'A/B Testing', 'Product Metrics'],
    salaryBand: '₹12-22 LPA',
    difficulty: 'Medium',
    hiringSeason: 'Sep-Nov',
    techStack: ['SQL', 'Python', 'Tableau', 'R', 'Excel'],
    locationPolicy: 'Remote-friendly',
    recommendedCourses: [
      {
        id: 'c1',
        title: 'SQL for Data Analysis',
        provider: 'Mode Analytics',
        duration: '20 hours',
        level: 'Intermediate',
        link: 'https://mode.com/sql-tutorial',
        description: 'Advanced SQL including window functions, CTEs, and query optimization.'
      },
      {
        id: 'c2',
        title: 'Python for Data Science',
        provider: 'DataCamp',
        duration: '30 hours',
        level: 'Intermediate',
        link: 'https://datacamp.com/python-ds',
        description: 'Pandas, NumPy, and data manipulation techniques.'
      },
      {
        id: 'c3',
        title: 'Tableau Desktop Specialist',
        provider: 'Tableau',
        duration: '15 hours',
        level: 'Beginner',
        link: 'https://tableau.com/learn',
        description: 'Build interactive dashboards and visualizations.'
      },
      {
        id: 'c4',
        title: 'Statistics Fundamentals',
        provider: 'Khan Academy',
        duration: '25 hours',
        level: 'Beginner',
        link: 'https://khanacademy.org/stats',
        description: 'Probability, distributions, hypothesis testing, and regression.'
      },
    ],
    interviewRounds: [
      {
        id: 'r1',
        name: 'SQL Technical Test',
        description: 'Live SQL coding with complex queries',
        duration: '60 minutes',
        evaluationCriteria: ['Query correctness', 'Performance optimization', 'Window functions usage'],
        tips: ['Master JOINs and subqueries', 'Practice window functions', 'Optimize for performance']
      },
      {
        id: 'r2',
        name: 'Case Study Round',
        description: 'Product metrics and business problem-solving',
        duration: '60 minutes',
        evaluationCriteria: ['Analytical thinking', 'Metric definition', 'Business acumen'],
        tips: ['Define metrics clearly', 'Think about trade-offs', 'Ask clarifying questions']
      },
      {
        id: 'r3',
        name: 'Hiring Manager Round',
        description: 'Behavioral and culture fit',
        duration: '45 minutes',
        evaluationCriteria: ['Collaboration', 'Communication', 'Atlassian values alignment'],
        tips: ['Show passion for data', 'Demonstrate stakeholder management', 'Prepare thoughtful questions']
      },
    ],
    previousYearQuestions: [
      { id: 'q1', question: 'Write a query to find users who made purchases in consecutive months', round: 'SQL Technical Test', difficulty: 'Hard', topics: ['SQL', 'Window Functions'] },
      { id: 'q2', question: 'Calculate monthly retention rate from user activity table', round: 'SQL Technical Test', difficulty: 'Medium', topics: ['SQL', 'Cohort Analysis'] },
      { id: 'q3', question: 'Find the 2nd highest salary in each department', round: 'SQL Technical Test', difficulty: 'Medium', topics: ['SQL', 'Subqueries'] },
      { id: 'q4', question: "How would you measure success for Jira's new feature?", round: 'Case Study Round', difficulty: 'Medium', topics: ['Product Metrics', 'KPIs'] },
      { id: 'q5', question: 'Design an A/B test for a pricing page change', round: 'Case Study Round', difficulty: 'Medium', topics: ['A/B Testing', 'Statistics'] },
      { id: 'q6', question: 'Analyze this dataset and provide business recommendations', round: 'Case Study Round', difficulty: 'Hard', topics: ['Data Analysis', 'Business Insights'] },
      { id: 'q7', question: 'Explain a complex analysis to a non-technical stakeholder', round: 'Hiring Manager Round', difficulty: 'Medium', topics: ['Behavioral', 'Communication'] },
      { id: 'q8', question: 'Describe a time when your analysis drove a business decision', round: 'Hiring Manager Round', difficulty: 'Medium', topics: ['Behavioral', 'Impact'] },
    ],
    studyPlan: [
      { week: 1, theme: 'SQL Mastery - Basics', tasks: ['Review JOINs and aggregations', 'Practice 20 SQL problems', 'Learn CASE statements'], weekendReview: 'Build a complex multi-table query' },
      { week: 2, theme: 'Advanced SQL', tasks: ['Master window functions', 'Learn CTEs and subqueries', 'Solve 15 hard SQL problems'], weekendReview: 'Optimize slow queries' },
      { week: 3, theme: 'Python for Analysis', tasks: ['Pandas fundamentals', 'Data cleaning techniques', 'Complete 3 analysis projects'], weekendReview: 'Build end-to-end analysis notebook' },
      { week: 4, theme: 'Statistics Fundamentals', tasks: ['Hypothesis testing', 'A/B test design', 'Practice probability problems'], weekendReview: 'Design a complete A/B test' },
      { week: 5, theme: 'Data Visualization', tasks: ['Complete Tableau course', 'Build 5 dashboards', 'Learn storytelling with data'], weekendReview: 'Present insights from a dashboard' },
      { week: 6, theme: 'Product Metrics & Case Studies', tasks: ['Study product metric frameworks', 'Practice 10 case studies', 'Learn metrics for SaaS'], weekendReview: 'Mock case study interview' },
      { week: 7, theme: 'Mock Interviews', tasks: ['SQL live coding practice', 'Case study with peer', 'Behavioral prep'], weekendReview: 'Review feedback and improve' },
      { week: 8, theme: 'Final Review', tasks: ['Revise weak areas', 'Practice explaining analyses', 'Research Atlassian products'], weekendReview: 'Final confidence building' },
    ],
    similarRoles: [
      { role: 'Data Analyst', companies: ['Microsoft', 'Google', 'Amazon'], matchPercentage: 95 },
      { role: 'Business Analyst', companies: ['Salesforce', 'Adobe'], matchPercentage: 85 },
      { role: 'Product Analyst', companies: ['Flipkart', 'Zomato'], matchPercentage: 90 },
    ],
    recruitmentDates: [
      { id: 'd1', title: 'Applications Open', type: 'application', startDate: '2025-09-01', endDate: '2025-09-20', notes: 'Apply via Atlassian careers page' },
      { id: 'd2', title: 'SQL Assessment', type: 'test', startDate: '2025-09-25', notes: '60-min live SQL test' },
      { id: 'd3', title: 'Case Study Interviews', type: 'interview', startDate: '2025-10-05', endDate: '2025-10-15', notes: 'Prepare business cases' },
      { id: 'd4', title: 'Offers Released', type: 'result', startDate: '2025-10-25', notes: 'Via email' },
    ],
    roadmapPhases: [
      {
        id: 'phase-1',
        title: 'SQL Foundations',
        weekRange: [1, 2],
        nodes: [
          { id: 'sql-basics', title: 'SQL Basics & JOINs', tags: ['SQL'], estimatedHours: 10, status: 'not_started' },
          { id: 'window-functions', title: 'Window Functions', tags: ['SQL'], estimatedHours: 12, dependsOn: ['sql-basics'] },
          { id: 'ctes-subqueries', title: 'CTEs & Subqueries', tags: ['SQL'], estimatedHours: 8, dependsOn: ['sql-basics'] },
        ],
      },
      {
        id: 'phase-2',
        title: 'Analysis Skills',
        weekRange: [3, 5],
        nodes: [
          { id: 'python-pandas', title: 'Python & Pandas', tags: ['Python'], estimatedHours: 15 },
          { id: 'statistics', title: 'Statistics & A/B Testing', tags: ['Statistics'], estimatedHours: 18, dependsOn: ['python-pandas'] },
          { id: 'data-viz', title: 'Tableau & Visualization', tags: ['Visualization'], estimatedHours: 12 },
        ],
      },
      {
        id: 'phase-3',
        title: 'Product Analytics',
        weekRange: [6, 7],
        nodes: [
          { id: 'product-metrics', title: 'Product Metrics & KPIs', tags: ['Product'], estimatedHours: 10 },
          { id: 'case-studies', title: 'Case Study Practice', tags: ['Practice'], estimatedHours: 15, dependsOn: ['product-metrics'] },
        ],
      },
      {
        id: 'phase-4',
        title: 'Interview Ready',
        weekRange: [8, 8],
        nodes: [
          { id: 'sql-mock', title: 'SQL Mock Interviews', tags: ['Practice'], estimatedHours: 8, dependsOn: ['ctes-subqueries'] },
          { id: 'behavioral-prep', title: 'Behavioral Prep', tags: ['Behavioral'], estimatedHours: 5 },
        ],
      },
    ],
  },

  // Adding more combinations for comprehensive coverage
  'QA Engineer-Infosys': {
    roleId: 'qa',
    roleName: 'QA Engineer',
    companyId: 'infosys',
    companyName: 'Infosys',
    roleSummary: 'Ensure quality and reliability of software products through comprehensive testing strategies and automation.',
    keySkills: ['Manual Testing', 'Selenium', 'Test Case Design', 'Bug Tracking', 'API Testing', 'Agile'],
    salaryBand: '₹4-8 LPA',
    difficulty: 'Easy',
    hiringSeason: 'Year-round',
    techStack: ['Selenium', 'JIRA', 'Postman', 'TestNG', 'JMeter'],
    locationPolicy: 'Hybrid',
    recommendedCourses: [
      {
        id: 'c1',
        title: 'Software Testing Fundamentals',
        provider: 'Udemy',
        duration: '15 hours',
        level: 'Beginner',
        link: 'https://udemy.com/qa-testing',
        description: 'Complete guide to manual testing, test cases, and bug life cycle.'
      },
      {
        id: 'c2',
        title: 'Selenium WebDriver with Java',
        provider: 'Test Automation University',
        duration: '20 hours',
        level: 'Intermediate',
        link: 'https://testautomationu.applitools.com',
        description: 'Automate web applications using Selenium and Java.'
      },
      {
        id: 'c3',
        title: 'API Testing with Postman',
        provider: 'Postman Learning',
        duration: '10 hours',
        level: 'Beginner',
        link: 'https://learning.postman.com',
        description: 'Master REST API testing and automation with Postman.'
      },
    ],
    interviewRounds: [
      {
        id: 'r1',
        name: 'Aptitude Test',
        description: 'Quantitative, logical, and verbal reasoning',
        duration: '60 minutes',
        evaluationCriteria: ['Problem-solving speed', 'Accuracy', 'Logical thinking'],
        tips: ['Practice time management', 'Focus on accuracy over speed', 'Revise basic mathematics']
      },
      {
        id: 'r2',
        name: 'Technical Round',
        description: 'Testing concepts and scenario-based questions',
        duration: '45 minutes',
        evaluationCriteria: ['Testing knowledge', 'Analytical skills', 'Communication'],
        tips: ['Know SDLC and STLC thoroughly', 'Prepare real-world testing scenarios', 'Understand agile methodology']
      },
      {
        id: 'r3',
        name: 'HR Round',
        description: 'Behavioral assessment and background verification',
        duration: '30 minutes',
        evaluationCriteria: ['Communication', 'Cultural fit', 'Commitment'],
        tips: ['Be honest about experience', 'Show eagerness to learn', 'Ask about training programs']
      },
    ],
    previousYearQuestions: [
      { id: 'q1', question: 'Write test cases for a login page', round: 'Technical Round', difficulty: 'Easy', topics: ['Manual Testing'] },
      { id: 'q2', question: 'Explain the bug life cycle', round: 'Technical Round', difficulty: 'Easy', topics: ['Testing Fundamentals'] },
      { id: 'q3', question: 'Difference between Smoke and Sanity testing', round: 'Technical Round', difficulty: 'Easy', topics: ['Testing Types'] },
      { id: 'q4', question: 'How would you test a mobile banking app?', round: 'Technical Round', difficulty: 'Medium', topics: ['Test Strategy'] },
      { id: 'q5', question: 'What is regression testing and when is it needed?', round: 'Technical Round', difficulty: 'Easy', topics: ['Testing Types'] },
      { id: 'q6', question: 'Explain your understanding of Selenium', round: 'Technical Round', difficulty: 'Medium', topics: ['Automation'] },
    ],
    studyPlan: [
      { week: 1, theme: 'Testing Fundamentals', tasks: ['Learn SDLC and STLC', 'Study testing types', 'Practice writing test cases'], weekendReview: 'Create comprehensive test plan for a sample app' },
      { week: 2, theme: 'Manual Testing Deep Dive', tasks: ['Bug life cycle', 'Severity vs Priority', 'Practice 50 test scenarios'], weekendReview: 'Test a live website and log bugs' },
      { week: 3, theme: 'Automation Basics', tasks: ['Learn Selenium basics', 'Write first automation script', 'Understand locators'], weekendReview: 'Automate login and signup flows' },
      { week: 4, theme: 'Advanced Automation', tasks: ['TestNG framework', 'Data-driven testing', 'Page Object Model'], weekendReview: 'Build mini automation framework' },
      { week: 5, theme: 'API Testing', tasks: ['REST API basics', 'Postman collections', 'Status codes and assertions'], weekendReview: 'Test 5 public APIs' },
      { week: 6, theme: 'Agile & Tools', tasks: ['Agile methodology', 'JIRA for bug tracking', 'CI/CD basics'], weekendReview: 'Create test execution report' },
      { week: 7, theme: 'Interview Prep', tasks: ['Revise all concepts', 'Mock interviews', 'Behavioral questions'], weekendReview: 'Final review' },
      { week: 8, theme: 'Confidence Building', tasks: ['Practice explaining concepts', 'Review weak areas', 'Stay updated on Infosys'], weekendReview: 'Relax and prepare mentally' },
    ],
    similarRoles: [
      { role: 'QA Engineer', companies: ['TCS', 'Accenture', 'Wipro'], matchPercentage: 95 },
      { role: 'Test Automation Engineer', companies: ['Cognizant', 'Tech Mahindra'], matchPercentage: 85 },
    ],
    recruitmentDates: [
      { id: 'd1', title: 'Campus Registration', type: 'application', startDate: '2025-07-15', endDate: '2025-08-05', notes: 'Register via college portal' },
      { id: 'd2', title: 'Aptitude Test', type: 'test', startDate: '2025-08-10', notes: 'Online proctored test' },
      { id: 'd3', title: 'Technical Interviews', type: 'interview', startDate: '2025-08-20', endDate: '2025-08-25', notes: 'Virtual or in-person' },
      { id: 'd4', title: 'Offer Letters', type: 'result', startDate: '2025-09-01', notes: 'Joining in Oct-Nov' },
    ],
    roadmapPhases: [
      {
        id: 'phase-1',
        title: 'Testing Foundations',
        weekRange: [1, 2],
        nodes: [
          { id: 'testing-basics', title: 'SDLC & STLC', tags: ['Fundamentals'], estimatedHours: 8, status: 'not_started' },
          { id: 'test-cases', title: 'Test Case Design', tags: ['Manual Testing'], estimatedHours: 10, dependsOn: ['testing-basics'] },
          { id: 'bug-lifecycle', title: 'Bug Life Cycle', tags: ['Manual Testing'], estimatedHours: 6, dependsOn: ['testing-basics'] },
        ],
      },
      {
        id: 'phase-2',
        title: 'Automation',
        weekRange: [3, 5],
        nodes: [
          { id: 'selenium-basics', title: 'Selenium Basics', tags: ['Automation'], estimatedHours: 12 },
          { id: 'testng-framework', title: 'TestNG Framework', tags: ['Automation'], estimatedHours: 10, dependsOn: ['selenium-basics'] },
          { id: 'pom-pattern', title: 'Page Object Model', tags: ['Automation'], estimatedHours: 8, dependsOn: ['testng-framework'] },
        ],
      },
      {
        id: 'phase-3',
        title: 'API & Tools',
        weekRange: [6, 7],
        nodes: [
          { id: 'api-testing', title: 'API Testing with Postman', tags: ['API Testing'], estimatedHours: 10 },
          { id: 'agile-tools', title: 'Agile & JIRA', tags: ['Tools'], estimatedHours: 6 },
        ],
      },
      {
        id: 'phase-4',
        title: 'Interview Ready',
        weekRange: [8, 8],
        nodes: [
          { id: 'mock-interviews', title: 'Mock Interviews', tags: ['Practice'], estimatedHours: 8 },
          { id: 'behavioral-prep', title: 'Behavioral Questions', tags: ['Behavioral'], estimatedHours: 5 },
        ],
      },
    ],
  },
};

// Generate default data for missing combinations
export function getPrepData(role: string, company: string, qualification: string): PrepData {
  const key = `${role}-${company}`;
  const data = prepDataMap[key];
  
  if (data) {
    return data;
  }
  
  // Return generic data if specific combination doesn't exist
  return {
    roleId: role.toLowerCase().replace(/\s+/g, '-'),
    roleName: role,
    companyId: company.toLowerCase(),
    companyName: company,
    roleSummary: `Join ${company} as a ${role} and work on cutting-edge projects that impact millions of users worldwide.`,
    keySkills: ['Technical Skills', 'Problem Solving', 'Communication', 'Team Collaboration'],
    salaryBand: '₹10-20 LPA',
    difficulty: 'Medium',
    hiringSeason: 'Sep-Dec',
    recommendedCourses: [
      {
        id: 'c1',
        title: `${role} Fundamentals`,
        provider: 'Udemy',
        duration: '20 hours',
        level: 'Intermediate',
        link: 'https://udemy.com',
        description: `Master the fundamentals of ${role} role.`
      },
    ],
    interviewRounds: [
      {
        id: 'r1',
        name: 'Technical Round',
        description: 'Role-specific technical assessment',
        duration: '60 minutes',
        evaluationCriteria: ['Technical knowledge', 'Problem-solving', 'Communication'],
        tips: ['Prepare core concepts', 'Practice common questions', 'Think out loud']
      },
    ],
    previousYearQuestions: [
      { id: 'q1', question: 'Tell me about yourself and your experience', round: 'Technical Round', difficulty: 'Easy', topics: ['Behavioral'] },
    ],
    studyPlan: [
      { week: 1, theme: 'Foundation Building', tasks: ['Review core concepts', 'Practice basics'], weekendReview: 'Assess progress' },
      { week: 2, theme: 'Skill Development', tasks: ['Advanced topics', 'Hands-on practice'], weekendReview: 'Build sample project' },
      { week: 3, theme: 'Interview Prep', tasks: ['Mock interviews', 'Review common questions'], weekendReview: 'Final preparation' },
    ],
    similarRoles: [],
    recruitmentDates: [],
    roadmapPhases: [
      {
        id: 'phase-1',
        title: 'Foundations',
        weekRange: [1, 1],
        nodes: [
          { id: 'core-concepts', title: 'Core Concepts', tags: ['Fundamentals'], estimatedHours: 10, status: 'not_started' },
        ],
      },
      {
        id: 'phase-2',
        title: 'Skill Development',
        weekRange: [2, 2],
        nodes: [
          { id: 'advanced-topics', title: 'Advanced Topics', tags: ['Advanced'], estimatedHours: 15, dependsOn: ['core-concepts'] },
        ],
      },
      {
        id: 'phase-3',
        title: 'Interview Prep',
        weekRange: [3, 3],
        nodes: [
          { id: 'mock-prep', title: 'Mock Interviews', tags: ['Practice'], estimatedHours: 8, dependsOn: ['advanced-topics'] },
        ],
      },
    ],
  };
}
