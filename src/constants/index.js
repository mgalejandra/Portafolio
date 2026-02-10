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
    id: 11,
    projectKey: "helpdesk",
    imgPath: "helpdesk",
    demoLink: "https://soporte.premium-soft.com/",
    isBlog: false,
    ghLink: null,
  },
  {
    id: 10,
    projectKey: "clinicas",
    imgPath: "clinicas",
    demoLink: "https://med.premium-soft.com",
    isBlog: false,
    ghLink: null,
  },
  {
    id: 9,
    projectKey: "intranet",
    imgPath: "intranet",
    demoLink: "https://intranet.premium-soft.com/",
    isBlog: false,
    ghLink: null,
  },
  {
    id: 8,
    projectKey: "kloudia",
    imgPath: "kloudia",
    demoLink: "https://kloudia.premium-soft.com",
    isBlog: false,
    ghLink: null,
  },
  {
    id: 7,
    projectKey: "hoteles",
    imgPath: "hoteles",
    demoLink: "https://demo-hoteles.vercel.app/",
    isBlog: false,
    ghLink: null,
  },
  {
    id: 6,
    projectKey: "pos",
    imgPath: "pos",
    demoLink: "https://demo-pos-git-main-mgalejandras-projects.vercel.app/",
    isBlog: false,
    ghLink: null,
  },
  {
    id: 1,
    projectKey: "exchange",
    imgPath: "exchange",
    ghLink: "https://github.com/mgalejandra/FBOJ",
    demoLink: "https://jmw-bo.netlify.app/",
    isBlog: false,
  },
  {
    id: 2,
    projectKey: "nomina",
    imgPath: "nomina",
    demoLink: "https://www.infocent-latam.com/",
    isBlog: false,
    ghLink: null,
  },
  {
    id: 4,
    projectKey: "amberes",
    imgPath: "amberes",
    isBlog: false,
    ghLink: null,
    demoLink: null,
  },
  {
    id: 5,
    projectKey: "amacrux",
    imgPath: "amacrux",
    ghLink: "https://github.com/Amacruxcompany/Amacrux-LandingPage",
    isBlog: false,
    demoLink: null,
  },
];

export const SOCIAL_LINKS = {
  github: "https://github.com/mgalejandra",
  linkedin: "",
  twitter: "",
  email: "",
};

