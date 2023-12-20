import { ProjectItemProps } from '../components/ProjectItem';

const projectsData: ProjectItemProps[] = [
  {
    title: 'Webfolio',
    group: 'Individual Project',
    tags: ['Typescript'],
    description: 'A personal web portfolio developed in TypeScript, showcasing my projects and technical skills.',
    link: 'https://github.com/yunchae-kim/Webfolio-YunchaeKim',
  },
  {
    title: 'Comptox AI',
    group: 'Romano Lab, University of Pennsylvania DBEI',
    tags: ['React', 'AWS', 'Python', 'Neo4j', 'Bash', 'Sphinx', 'GitHub Actions'],
    description: 'Managed and enhanced ComptoxAI, an AI tool for toxicology data analysis, at Romano Lab. Key tasks included migrating to AWS EC2 with NGINX, automating processes using Bash, and developing Python and Neo4j features for data querying. Focused on modernizing the codebase and ensuring quality through standardized testing and issue management.',
    link: 'https://github.com/RomanoLab/comptox_ai',
  },
  {
    title: 'Food.com Review Analysis',
    group: 'Big Data Analytics (CIS-545), University of Pennsylvania',
    tags: ['Python', 'Machine Learning', 'Sentiment Analysis', 'Data Visualization', 'Data Analysis'],
    description: 'A project utilizing Machine Learning and sentiment analysis techniques to analyze food reviews and recipes from Food.com. The project includes data cleaning, exploratory data analysis, model building, and visualization, all demonstrated in an IPython Notebook. It aims to provide insights into food preferences and recipe categorization.',
    link: 'https://github.com/yunchae-kim/FoodCom-Recipe-Review-Analysis',
  },
  {
    title: 'Redundit Community Forum Website Project',
    group: 'Programming for the Web (CIS-557), University of Pennsylvania',
    tags: ['React', 'MongoDB', 'Figma', 'Swagger'],
    description: 'Redundit is a Reddit-inspired forum community website, developed as part of the CIS-557 course. The project showcases full-stack development capabilities, focusing on React for frontend development and MongoDB for the backend. Key features include user authentication, profile management, group administration, post and comment system, and an interactive messaging window. The website also supports functionalities like group suggestions, hashtag filtering, and multimedia message.',
    link: 'https://github.com/yunchae-kim/Redundit-Forum-Project',
  },
  {
    title: 'YodaTrip',
    group: 'Storicity',
    tags: ['React', 'Typescript', 'Tailwind CSS', 'ProtoPie', 'Adobe XD'],
    description: 'Led the launch of YodaTrip, an automated travel itinerary service app with over 500k downloads in South Korea. As the project manager, established the core functions and design concepts of the app using ProtoPie and Adobe XD. As the frontend developer, materialized the prototype into an app using Typescript and Tailwind CSS. Contributed significantly in the design and development of the landing page.',
    link: 'https://yodatrip.com/',
  },
  {
    title: 'Fortune 500 Consumer Electronics Company e-Commerce Website Analysis',
    group: 'Consulting Firm',
    tags: ['R', 'Data Analysis', 'Data Visualization'],
    description: 'Conducted an in-depth analysis of a five-year sales dataset for a major Consumer Electronics Company in the European market. Employed R for predictive modeling and data visualization, focusing on sales prediction, market basket analysis, and consumer segmentation. Uncovered unique purchasing trends and redefined customer segments. Also conducted apriori analysis for strategic product pairing.',
    link: '',
  }
];

export default projectsData;