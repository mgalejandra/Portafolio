import React, { createContext, useContext, useMemo, useState, useEffect } from "react";

const LanguageContext = createContext();

const TRANSLATIONS = {
  en: {
    nav: { home: "Home", about: "About", projects: "Projects", resume: "Resume" },
    home: {
      hi: "Hi There!",
      im: "I'M",
      name: "ALEJANDRA GONZÁLEZ",
      findMeOn: "FIND ME ON",
      connect: "Feel free to connect with me"
    },
    type: ["Software Developer", "Freelancer", "MERN Stack Developer", "Open Source Contributor"],
    home2: {
      titleStart: "LET ME",
      titlePurple: "INTRODUCE",
      titleEnd: "MYSELF",
      p1: "I fell in love with programming and I have at least learnt something, I think…",
      p2: "I am fluent in classics like C++, Javascript.",
      p3: "My field of Interest's are building new Web Technologies and Products and also in areas related to Blockchain.",
      p4: "Whenever possible, I also apply my passion for developing products with Node.js and Modern Javascript Library and Frameworks like React.js and Next.js"
    },
    projects: {
      heading: "My Recent",
      works: "Works",
      subheading: "Here are a few projects I've worked on recently."
    },
    about: {
      topStart: "Know Who",
      topStrong: "I'M",
      skillsetHeading: "Professional",
      skillsetStrong: "Skillset",
      toolsStart: "Tools",
      toolsEnd: "I use",
    },
    aboutCard: {
      p1: "Hi Everyone, I am Alejandra González from Caracas, Venezuela.",
      jobPrefix: "I am currently employed as a Development Coordinator at",
      company: "Chinchin Financial Solutions",
      p2: "I have completed a diploma in development and several courses at Platzi.",
      p3: "Apart from coding, some other activities that I love to do!",
      like1: "Playing Padel",
      like2: "Reading Books",
      like3: "Travelling",
      quote: "Strive to build things that make a difference!",
    },
    resume: {
      headingStart: "My",
      headingStrong: "Resume",
      subheading: "Feel free to download my CV",
      download: "Download CV"
    },
    footer: {
      designedBy: "Designed and Developed by Alejandra González",
      copyright: "Copyright"
    }
  },
  es: {
    nav: { home: "Inicio", about: "Sobre mí", projects: "Proyectos", resume: "CV" },
    home: {
      hi: "¡Hola!",
      im: "SOY",
      name: "ALEJANDRA GONZÁLEZ",
      findMeOn: "ENCUÉNTRAME EN",
      connect: "Siéntete libre de conectar conmigo"
    },
    type: ["Desarrolladora de Software", "Freelancer", "Desarrolladora MERN", "Colaboradora Open Source"],
    home2: {
      titleStart: "DEJA QUE",
      titlePurple: "ME PRESENTE",
      titleEnd: "",
      p1: "Me enamoré de la programación y al menos he aprendido algo, creo…",
      p2: "Domino clásicos como C++ y Javascript.",
      p3: "Mis áreas de interés son construir nuevas Tecnologías y Productos Web y también en áreas relacionadas con Blockchain.",
      p4: "Siempre que es posible, aplico mi pasión por desarrollar productos con Node.js y Librerías y Frameworks modernos de Javascript como React.js y Next.js"
    },
    projects: {
      heading: "Mis trabajos",
      works: "recientes",
      subheading: "Estos son algunos proyectos en los que he trabajado recientemente."
    },
    about: {
      topStart: "Conoce Quién",
      topStrong: "SOY",
      skillsetHeading: "Habilidades",
      skillsetStrong: "Profesionales",
      toolsStart: "Herramientas",
      toolsEnd: "que uso",
    },
    aboutCard: {
      p1: "Hola a todos, soy Alejandra González de Caracas, Venezuela.",
      jobPrefix: "Actualmente trabajo como Coordinadora de Desarrollo en",
      company: "Chinchin Financial Solutions",
      p2: "He completado un diplomado en desarrollo y varios cursos en Platzi.",
      p3: "Además de programar, ¡otras actividades que me encantan!",
      like1: "Jugar Pádel",
      like2: "Leer libros",
      like3: "Viajar",
      quote: "¡Intenta construir cosas que marquen la diferencia!",
    },
    resume: {
      headingStart: "Mi",
      headingStrong: "CV",
      subheading: "Puedes descargar mi currículum",
      download: "Descargar CV"
    },
    footer: {
      designedBy: "Diseñado y Desarrollado por Alejandra González",
      copyright: "Copyright"
    }
  },
  fr: {
    nav: { home: "Accueil", about: "À propos", projects: "Projets", resume: "CV" },
    home: {
      hi: "Salut !",
      im: "JE SUIS",
      name: "ALEJANDRA GONZÁLEZ",
      findMeOn: "RETROUVEZ-MOI SUR",
      connect: "N'hésitez pas à me contacter"
    },
    type: ["Développeuse Logicielle", "Freelance", "Développeuse MERN", "Contributrice Open Source"],
    home2: {
      titleStart: "PERMETTEZ-MOI",
      titlePurple: "DE ME PRÉSENTER",
      titleEnd: "",
      p1: "Je suis tombée amoureuse de la programmation et j'ai au moins appris quelque chose, je crois…",
      p2: "Je maîtrise des classiques comme C++ et Javascript.",
      p3: "Mes domaines d'intérêt sont la création de nouvelles technologies et produits web ainsi que tout ce qui touche à la Blockchain.",
      p4: "Dès que possible, j'applique ma passion pour développer des produits avec Node.js et des bibliothèques et frameworks Javascript modernes comme React.js et Next.js"
    },
    projects: {
      heading: "Mes",
      works: "Derniers Travaux",
      subheading: "Voici quelques projets sur lesquels j'ai travaillé récemment."
    },
    about: {
      topStart: "Découvre Qui",
      topStrong: "JE SUIS",
      skillsetHeading: "Compétences",
      skillsetStrong: "Professionnelles",
      toolsStart: "Outils",
      toolsEnd: "que j'utilise",
    },
    aboutCard: {
      p1: "Bonjour à tous, je suis Alejandra González de Caracas, Venezuela.",
      jobPrefix: "Je travaille actuellement comme Coordinatrice de Développement chez",
      company: "Chinchin Financial Solutions",
      p2: "J'ai terminé un diplôme en développement et plusieurs cours chez Platzi.",
      p3: "En plus du code, d'autres activités que j'adore !",
      like1: "Jouer au padel",
      like2: "Lire des livres",
      like3: "Voyager",
      quote: "S'efforcer de construire des choses qui font la différence !",
    },
    resume: {
      headingStart: "Mon",
      headingStrong: "CV",
      subheading: "N'hésitez pas à télécharger mon CV",
      download: "Télécharger le CV"
    },
    footer: {
      designedBy: "Conçu et Développé par Alejandra González",
      copyright: "Droits d'auteur"
    }
  },
};

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem("portfolio-lang") || "es");

  useEffect(() => {
    localStorage.setItem("portfolio-lang", lang);
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const t = useMemo(() => TRANSLATIONS[lang], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}


