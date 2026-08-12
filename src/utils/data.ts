export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  {
    category: "Languages",
    color: "from-blue-600 via-indigo-600 to-violet-600",
    items: [
      { name: "C/C++", level: 90 },
      { name: "Java", level: 95 },
      { name: "Python", level: 80 },
      { name: "Dart", level: 85 },
    ],
  },
  {
    category: "Frontend",
    color: "from-cyan-500 via-blue-600 to-indigo-600",
    items: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "React Router", level: 88 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    category: "MERN Stack",
    color: "from-violet-600 via-purple-600 to-pink-600",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 84 },
      { name: "Prisma", level: 94 },
      { name: "Mongoose", level: 92 },
    ],
  },
  {
    category: "Backend (Java)",
    color: "from-indigo-600 via-violet-600 to-purple-700",
    items: [
      { name: "Core Java & OOP", level: 92 },
      { name: "Spring & Spring Boot", level: 90 },
      { name: "REST APIs", level: 93 },
      { name: "JPA & Hibernate", level: 85 },
      { name: "OAuth", level: 80 },
      { name: "Websocket", level: 90 },
      { name: "Spring Security", level: 82 },
      { name: "JWT", level: 85 },
    ],
  },
  {
    category: "Database",
    color: "from-emerald-500 via-teal-600 to-cyan-600",
    items: [
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 88 },
      { name: "PostgreSQL", level: 90 },
      { name: "Redis", level: 84 },
    ],
  },
  {
    category: "Cloud & DevOps",
    color: "from-amber-500 via-orange-600 to-rose-600",
    items: [
      { name: "Linux", level: 86 },
      { name: "Git & GitHub", level: 94 },
      { name: "Docker", level: 85 },
      { name: "AWS", level: 80 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "TeamPilot - AI-Powered Team Collaboration Platform",

    tag: "Spring Boot + React.js + AI",

    description:
      "An enterprise-grade team collaboration platform for managing workspaces, projects, tickets, tasks, documents, and real-time team communication.",

    details:
      "A full-stack collaboration platform built with Spring Boot and React.js, featuring multi-workspace project management, ticket and task tracking, role-based access control, JWT and OAuth 2.0 authentication, real-time chat using WebSocket and STOMP, AI-powered document summarization and API documentation generation with Google Gemini, and asynchronous event processing with Apache Kafka and Redis.",

    tech: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "JWT",
      "OAuth 2.0",
      "WebSocket",
      "STOMP",
      "React.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "PostgreSQL",
      "JPA",
      "Hibernate",
      "Redis",
      "Apache Kafka",
      "Google Gemini AI",
      "Docker",
      "REST API",
    ],

    github: "https://github.com/vaibhavCodes18/TeamPilot-AI",

    demo: "",
  },
  {
    title: "Multi Tenant Project Management Platform",
    tag: "Node.js + Express.js + PostgreSQL",
    description:
      "A scalable multi-tenant workspace and project management API with secure JWT authentication and role-based authorization.",
    details:
      "A production-grade backend API built with Node.js, Express, Prisma, and PostgreSQL. It features secure workspace-based multi-tenancy, granular RBAC (Owner to Viewer), soft deletes, audit logging, and fully paginated REST endpoints.",
    tech: ["Node.js", "Express.js", "PostgreSQL", "Prisma", "JWT", "REST"],
    github: "https://github.com/vaibhavCodes18/Multi-Tenant-Project-Management-Platform",
    demo: "",
  },
  {
    title: "Employee Management System",
    tag: "Spring Boot",
    description:
      "Scalable backend built with Spring Boot exposing RESTful APIs for full employee CRUD operations.",
    details:
      "Designed RESTful APIs for employee CRUD operations using Spring Boot. Used JPA & Hibernate for ORM with MySQL integration. Followed clean layered architecture (Controller → Service → Repository) for maintainability and scalability.",
    tech: ["Java", "Spring Boot", "JPA", "Hibernate", "Spring Security", "JWT", "MySQL", "REST"],
    github: "https://github.com/vaibhavCodes18/4bitLabs-Employee-Management-System-Backend",
    demo: "",
  },
  {
    title: "Project Approval Management System",
    tag: "Spring Security + JWT",
    description:
      "Role-based platform for Students, Guides and HOD with secure JWT authentication and refresh tokens.",
    details:
      "Implemented Spring Security with JWT-based access & refresh tokens. Role-based authorization (Student / Guide / HOD). MongoDB used for flexible schema. Secure, email verification(smtp), authorization-driven REST APIs.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MongoDB"],
    github: "https://github.com/vaibhavCodes18/Project-Approval-System-Backend",
    demo: "",
  },
  {
    title: "AI Developer Tool",
    tag: "MERN + Gemini API",
    description:
      "AI-powered developer assistant with prompt-based dynamic responses powered by the Gemini API.",
    details:
      "Node.js backend integrates with Google's Gemini API. React frontend offers an interactive prompt UI with streaming-style dynamic responses. Built end-to-end on the MERN stack.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
    github: "https://github.com/vaibhavCodes18/AI-Developer",
    demo: "",
  },
  {
    title: "Trip Expense Tracker",
    tag: "Full Stack",
    description: "Track and categorize trip expenses with analytics and a clean, friendly UI.",
    details:
      "Full stack expense tracker with MySQL + ORM backend. Categorized expenses, summaries and analytics. Clean, user-friendly interface focused on usability.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind"],
    github: "https://github.com/vaibhavCodes18/Trip-Expense-Tracker",
    demo: "",
  },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Java Trainee & Intern",
    company: "Kapil IT Skill Hub",
    period: "July 2025 – March 2026",
    bullets: [
      "Developed full-stack applications using Spring Boot and React.js, building secure RESTful APIs with clean architecture and role-based authentication.",
      "Implemented Spring Security, JWT, OAuth 2.0, Redis and WebSocket (STOMP) to build secure, scalable, and real-time applications.",
      "Designed backend services using PostgreSQL, MongoDB, JPA, Hibernate, Docker, and Docker Compose, developing and testing 35+ REST APIs.",
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL", "MongoDB", "Docker", "AWS"],
  },
];
