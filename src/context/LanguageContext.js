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
    projectsCards: {
      pos: {
        title: "PSKloud POS",
        description: "Complete point of sale system where I developed the entire idea. Includes dashboard with KPIs and hourly sales, main POS with categories and products, cash register management (opening/closing and history) and inventory management with stock alerts.",
        technologies: ["React", "Dashboard", "Inventory", "Cash Management"]
      },
      exchange: {
        title: "Exchange",
        description: "It is an exchange adapted to the needs of Venezuela, where calculations are performed based on order types. The system includes logic for privilege assignment and audits, built with Angular version 19, using Material-UI for the frontend, and Node.js for the backend.",
        technologies: ["Angular", "Material-UI", "Node.js"]
      },
      nomina: {
        title: "Payroll system",
        description: "Payroll migration project from Oracle Forms to Angular version 17 with NG Prime for the frontend. The backend was developed using Java Spring Boot, and PostgreSQL was used as the database. Scrum methodology was implemented with Jira for project planning, and continuous deployment was managed through Jenkins.",
        technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Jenkins"]
      },
      amberes: {
        title: "Exchange Venezuela",
        description: "Exchange in Venezuela that allows swapping Bolivars for Bitcoin or Petros. It was developed using React with Bootstrap for the frontend, and Node.js with a database in Redis, Blockchain, and PostgreSQL for the backend. The deployment was done using Docker.",
        technologies: ["React", "Bootstrap", "Node.js", "Redis", "PostgreSQL", "Docker"]
      },
      amacrux: {
        title: "Swap",
        description: "Cryptocurrency swap platform. The frontend was developed using React and Material-UI, while the backend was built with Node.js, utilizing Binance APIs. Additionally, Solidity was used to create a custom token.",
        technologies: ["React", "Material-UI", "Node.js", "Binance API", "Solidity"]
      },
      hoteles: {
        title: "Hotel Management System",
        description: "Hotel PMS (Property Management System) to manage reservations, guests, occupancy, operational cash and reports. Includes dashboard with KPIs (occupancy, revenue, ADR, RevPAR, check-ins/check-outs), reservation book, reception and check-in, operational POS, room changes, cash receipts, night audit, occupancy planning with room status grid (available, occupied, reserved, dirty), and alerts. Multi-property and multi-branch support.",
        technologies: ["React", "PMS", "Dashboard", "Reservations", "Occupancy"]
      },
      kloudia: {
        title: "KloudIA – AI Platform",
        description: "AI development with Google Gemini: conversational assistant (Chat con IA), configurable response style and prompts, admin dashboard with system and cloud status (storage, logging, cache). React frontend, Python backend, MongoDB for data; queries/costs and hourly activity analytics. Deployed on Vercel with continuous deployment; webhooks and circuit breaker for resilience.",
        technologies: ["React", "Google Gemini", "Python", "MongoDB", "Vercel", "CI/CD"]
      },
      intranet: {
        title: "Intranet Premium Soft",
        description: "Intranet developed with React and Progressive Web App (PWA): installable from the browser for quick access from the home screen. Centralized portal for systems, documentation, processes and people. AI integration with KloudIALink: chat assistant and dedicated IA quick access. Categories: Web Systems, QA, Communication, Development Tools, Documentation, IA, Downloads.",
        technologies: ["React", "PWA", "KloudIALink", "Intranet"]
      },
      clinicas: {
        title: "Clinic System",
        description: "Clinic management system: development and frontend design with PHP 8.2, HTML and CSS. Login and module selection (Clinics, Medical Records, Laboratories). Dashboard with KPIs (pending appointments, patients this month, first visit vs control), charts (consultations by type), recent consultations and patient search. Administration, Billing, Purchases, Banks, Bank Accounts, Configuration, PDF Manual and Logbook.",
        technologies: ["PHP 8.2", "HTML", "CSS", "Dashboard"]
      },
      helpdesk: {
        title: "Helpdesk System",
        description: "Custom implementation and development of a helpdesk system. Support center for clients and channels to track incidents and requests; consult ticket status. Agent panel, reports (improvements and failures, latest comments) with filters by project, status, priority, country and dates. Real-time activity monitor (status changes, internal notes), statistics and KPIs. Knowledge base, tasks and users management.",
        technologies: ["PHP", "Tickets", "Reportes", "Monitor en tiempo real"]
      }
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
    projectsCards: {
      pos: {
        title: "PSKloud POS",
        description: "Sistema de punto de venta completo donde desarrollé toda la idea. Incluye dashboard con KPIs y ventas por hora, POS principal con categorías y productos, gestión de cajas (apertura/cierre e historial) y gestión de inventario con alertas de stock.",
        technologies: ["React", "Dashboard", "Inventario", "Gestión de Cajas"]
      },
      exchange: {
        title: "Exchange",
        description: "Es un exchange adaptado a las necesidades de Venezuela, donde se realizan cálculos según tipos de órdenes. El sistema incluye lógica de asignación de privilegios y auditorías, construido con Angular 19, Material-UI en el frontend y Node.js en el backend.",
        technologies: ["Angular", "Material-UI", "Node.js"]
      },
      nomina: {
        title: "Sistema de nómina",
        description: "Proyecto de migración de nómina de Oracle Forms a Angular 17 con NG Prime en el frontend. El backend se desarrolló con Java Spring Boot y PostgreSQL. Se implementó metodología Scrum con Jira y despliegue continuo con Jenkins.",
        technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Jenkins"]
      },
      amberes: {
        title: "Exchange Venezuela",
        description: "Exchange en Venezuela para cambiar Bolívares por Bitcoin o Petros. Desarrollado con React y Bootstrap en el frontend, y Node.js con Redis, Blockchain y PostgreSQL en el backend. Despliegue con Docker.",
        technologies: ["React", "Bootstrap", "Node.js", "Redis", "PostgreSQL", "Docker"]
      },
      amacrux: {
        title: "Swap",
        description: "Plataforma de intercambio de criptomonedas. Frontend con React y Material-UI, backend con Node.js y APIs de Binance. Además se usó Solidity para crear un token personalizado.",
        technologies: ["React", "Material-UI", "Node.js", "Binance API", "Solidity"]
      },
      hoteles: {
        title: "Sistema de Hoteles",
        description: "PMS hotelero para gestionar reservas, huéspedes, ocupación, caja operativa y reportes. Incluye dashboard con KPIs (ocupación, revenue, ADR, RevPAR, check-ins/check-outs), libro de reservaciones, recepción y check-in, POS operativo, cambio de habitación, recibos de caja, auditoría nocturna, planning de ocupación con grid de estados (disponible, ocupada, reservada, sucia) y alertas. Soporte multi-propiedad y multi-sucursal.",
        technologies: ["React", "PMS", "Dashboard", "Reservas", "Ocupación"]
      },
      kloudia: {
        title: "KloudIA – Plataforma de IA",
        description: "Desarrollo de IA con Google Gemini: asistente conversacional (Chat con IA), estilo de respuestas y prompts configurables, panel de administración con estado del sistema y cloud (storage, logging, caché). Frontend en React, backend en Python, MongoDB para datos; analytics de consultas/costos y actividad por hora. Despliegue en Vercel con despliegue continuo; webhooks y circuit breaker para resiliencia.",
        technologies: ["React", "Google Gemini", "Python", "MongoDB", "Vercel", "CI/CD"]
      },
      intranet: {
        title: "Intranet Premium Soft",
        description: "Intranet desarrollada con React y Web Progresiva (PWA): instalable desde el navegador para acceso rápido desde la pantalla de inicio. Portal centralizado de sistemas, documentación, procesos y personas. Integración de IA KloudIALink: asistente de chat y acceso rápido a IA. Categorías: Sistemas Web, QA, Comunicación, Herramientas de Desarrollo, Documentación, IA, Descargas.",
        technologies: ["React", "PWA", "KloudIALink", "Intranet"]
      },
      clinicas: {
        title: "Sistema de Clínicas",
        description: "Sistema de gestión de clínicas: desarrollo y diseño de frontend en PHP 8.2, HTML y CSS. Login y selección de módulos (Clínicas, Historias Médicas, Laboratorios). Dashboard con KPIs (citas pendientes, pacientes del mes, primera vez vs control), gráficos (consultas por tipo), consultas recientes y búsqueda de pacientes. Administración, Facturación, Compras, Bancos, Cuentas Bancarias, Configuración, Manual PDF y Bitácora.",
        technologies: ["PHP 8.2", "HTML", "CSS", "Dashboard"]
      },
      helpdesk: {
        title: "Sistema de Helpdesk",
        description: "Implementación y desarrollo a la medida de un sistema de helpdesk. Centro de soporte para que clientes y canales den seguimiento a incidencias y solicitudes; consulta de estatus de ticket. Panel de agentes, reportes (mejoras y fallas, últimos comentarios) con filtros por proyecto, estatus, prioridad, país y fechas. Monitor de actividad en tiempo real (cambios de estatus, notas internas), estadísticas y KPIs. Base de conocimientos, tareas y gestión de usuarios.",
        technologies: ["PHP", "Tickets", "Reportes", "Monitor en tiempo real"]
      }
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
    projectsCards: {
      pos: {
        title: "PSKloud POS",
        description: "Système de point de vente complet où j'ai développé toute l'idée. Inclut un tableau de bord avec KPI et ventes horaires, POS principal avec catégories et produits, gestion des caisses (ouverture/fermeture et historique) et gestion des stocks avec alertes.",
        technologies: ["React", "Dashboard", "Inventaire", "Gestion des Caisses"]
      },
      exchange: {
        title: "Exchange",
        description: "Exchange adapté aux besoins du Venezuela, avec calculs selon les types d'ordres. Logique d'attribution de privilèges et d'audits, construit avec Angular 19, Material-UI et Node.js.",
        technologies: ["Angular", "Material-UI", "Node.js"]
      },
      nomina: {
        title: "Système de paie",
        description: "Migration de la paie d'Oracle Forms vers Angular 17 avec NG Prime. Backend en Java Spring Boot et PostgreSQL. Méthodologie Scrum avec Jira et déploiement continu avec Jenkins.",
        technologies: ["Angular", "Java Spring Boot", "PostgreSQL", "Jenkins"]
      },
      amberes: {
        title: "Exchange Venezuela",
        description: "Exchange au Venezuela pour échanger des Bolívars contre Bitcoin ou Petros. React et Bootstrap en frontend, Node.js avec Redis, Blockchain et PostgreSQL en backend. Déploiement avec Docker.",
        technologies: ["React", "Bootstrap", "Node.js", "Redis", "PostgreSQL", "Docker"]
      },
      amacrux: {
        title: "Swap",
        description: "Plateforme d'échange de cryptomonnaies. Frontend React et Material-UI, backend Node.js avec APIs Binance. Solidity pour un token personnalisé.",
        technologies: ["React", "Material-UI", "Node.js", "Binance API", "Solidity"]
      },
      hoteles: {
        title: "Système de Gestion Hôtelière",
        description: "PMS hôtelier pour gérer réservations, clients, occupation, caisse opérationnelle et rapports. Tableau de bord avec KPI (occupation, revenus, ADR, RevPAR, check-ins/check-outs), livre de réservations, réception, POS opérationnel, changement de chambre, reçus, audit de nuit, planning d'occupation avec grille d'états des chambres et alertes. Multi-établissements et multi-succursales.",
        technologies: ["React", "PMS", "Dashboard", "Réservations", "Occupation"]
      },
      kloudia: {
        title: "KloudIA – Plateforme IA",
        description: "Développement IA avec Google Gemini : assistant conversationnel (Chat IA), style de réponses et prompts configurables, panel d'administration avec état système et cloud (storage, logging, cache). Frontend React, backend Python, MongoDB pour les données ; analytics requêtes/coûts et activité horaire. Déploiement sur Vercel en continu ; webhooks et circuit breaker pour la résilience.",
        technologies: ["React", "Google Gemini", "Python", "MongoDB", "Vercel", "CI/CD"]
      },
      intranet: {
        title: "Intranet Premium Soft",
        description: "Intranet développée avec React et PWA (Progressive Web App) : installable depuis le navigateur pour un accès rapide depuis l'écran d'accueil. Portail centralisé pour systèmes, documentation, processus et personnes. Intégration IA KloudIALink : assistant de chat et accès rapide IA. Catégories : Systèmes Web, QA, Communication, Outils de développement, Documentation, IA, Téléchargements.",
        technologies: ["React", "PWA", "KloudIALink", "Intranet"]
      },
      clinicas: {
        title: "Système de Cliniques",
        description: "Système de gestion de cliniques : développement et conception frontend en PHP 8.2, HTML et CSS. Connexion et sélection de modules (Cliniques, Dossiers médicaux, Laboratoires). Tableau de bord avec KPI (rendez-vous en attente, patients du mois, première visite vs contrôle), graphiques (consultations par type), consultations récentes et recherche de patients. Administration, Facturation, Achats, Banques, Comptes bancaires, Configuration, Manuel PDF et Journal.",
        technologies: ["PHP 8.2", "HTML", "CSS", "Dashboard"]
      },
      helpdesk: {
        title: "Système Helpdesk",
        description: "Implémentation et développement sur mesure d'un système helpdesk. Centre de support pour que les clients et canaux suivent incidents et demandes ; consultation du statut des tickets. Panel agents, rapports (améliorations et pannes, derniers commentaires) avec filtres par projet, statut, priorité, pays et dates. Moniteur d'activité en temps réel (changements de statut, notes internes), statistiques et KPI. Base de connaissances, tâches et gestion des utilisateurs.",
        technologies: ["PHP", "Tickets", "Rapports", "Monitoring temps réel"]
      }
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


