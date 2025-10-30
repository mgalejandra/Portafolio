/**
 * Central configuration file for portfolio data
 * Update these values to customize your portfolio
 */

export const PORTFOLIO_INFO = {
  name: "Alejandra González",
  title: "Full Stack Developer",
  email: "your.email@example.com",
  github: "https://github.com/mgalejandra",
  linkedin: "https://linkedin.com/in/yourprofile",
  portfolioUrl: "https://portafolio-git-main-mgalejandras-projects.vercel.app/",
  repoUrl: "https://github.com/mgalejandra/Portafolio",
};

export const NAVIGATION_ITEMS = [
  { path: "/", label: "Home", icon: "AiOutlineHome" },
  { path: "/about", label: "About", icon: "AiOutlineUser" },
  { path: "/project", label: "Projects", icon: "AiOutlineFundProjectionScreen" },
  { path: "/resume", label: "Resume", icon: "CgFileDocument" },
];

export const PROJECTS = [
  {
    id: 1,
    imgPath: "exchange",
    title: "Exchange",
    description: "It is an exchange adapted to the needs of Venezuela, where calculations are performed based on order types. The system includes logic for privilege assignment and audits, built with Angular version 19, using Material-UI for the frontend, and Node.js for the backend.",
    ghLink: "https://github.com/mgalejandra/FBOJ",
    demoLink: "https://jmw-bo.netlify.app/",
    isBlog: false,
    technologies: ["Angular", "Material-UI", "Node.js"],
  },
  {
    id: 2,
    imgPath: "nomina",
    title: "Payroll system",
    description: "Payroll migration project from Oracle Forms to Angular version 17 with NG Prime for the frontend. The backend was developed using Java Spring Boot, and PostgreSQL was used as the database. Scrum methodology was implemented with Jira for project planning, and continuous deployment was managed through Jenkins.",
    demoLink: "https://www.infocent-latam.com/",
    isBlog: false,
    technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Jenkins"],
  },
  {
    id: 3,
    imgPath: "huawei",
    title: "Oracle Database Analyst",
    description: "Worked with an outsourcing company for Telefónica Venezuela as an Oracle Database Analyst",
    demoLink: "https://e.huawei.com/es/",
    isBlog: false,
    technologies: ["Oracle Database", "Database Administration"],
  },
  {
    id: 4,
    imgPath: "amberes",
    title: "Exchange venezuela",
    description: "Exchange in Venezuela that allows swapping Bolivars for Bitcoin or Petros. It was developed using React with Bootstrap for the frontend, and Node.js with a database in Redis, Blockchain, and PostgreSQL for the backend. The deployment was done using Docker.",
    isBlog: false,
    technologies: ["React", "Bootstrap", "Node.js", "Redis", "PostgreSQL", "Docker"],
  },
  {
    id: 5,
    imgPath: "amacrux",
    title: "Swap",
    description: "Cryptocurrency swap platform. The frontend was developed using React and Material-UI, while the backend was built with Node.js, utilizing Binance APIs. Additionally, Solidity was used to create a custom token.",
    ghLink: "https://github.com/Amacruxcompany/Amacrux-LandingPage",
    isBlog: false,
    technologies: ["React", "Material-UI", "Node.js", "Binance API", "Solidity"],
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/mgalejandra",
  linkedin: "",
  twitter: "",
  email: "",
};

