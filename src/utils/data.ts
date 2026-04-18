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
    category: "Backend (Java)",
    color: "from-[oklch(0.62_0.24_290)] to-[oklch(0.7_0.2_200)]",
    items: [
      { name: "Core Java & OOP", level: 92 },
      { name: "Spring & Spring Boot", level: 90 },
      { name: "REST APIs", level: 93 },
      { name: "JPA & Hibernate", level: 85 },
      { name: "MySQL", level: 88 },
      { name: "MongoDB", level: 80 },
      { name: "OAuth", level: 75 },
      { name: "Spring Security", level: 82 },
      { name: "JWT", level: 85 },
    ],
  },
  {
    category: "MERN Stack",
    color: "from-[oklch(0.7_0.2_200)] to-[oklch(0.78_0.2_330)]",
    items: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 84 },
      { name: "React.js", level: 90 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "Frontend",
    color: "from-[oklch(0.78_0.2_330)] to-[oklch(0.62_0.24_290)]",
    items: [
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "React Router", level: 88 },
      { name: "JavaScript", level: 90 },
    ],
  },
];

export const PROJECTS = [
  {
    title: "Employee Management System",
    tag: "Spring Boot",
    description:
      "Scalable backend built with Spring Boot exposing RESTful APIs for full employee CRUD operations.",
    details:
      "Designed RESTful APIs for employee CRUD operations using Spring Boot. Used JPA & Hibernate for ORM with MySQL integration. Followed clean layered architecture (Controller → Service → Repository) for maintainability and scalability.",
    tech: ["Java", "Spring Boot", "JPA", "Hibernate", "MySQL", "REST"],
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Project Approval Management System",
    tag: "Spring Security + JWT",
    description:
      "Role-based platform for Students, Guides and HOD with secure JWT authentication and refresh tokens.",
    details:
      "Implemented Spring Security with JWT-based access & refresh tokens. Role-based authorization (Student / Guide / HOD). MongoDB used for flexible schema. Secure, authorization-driven REST APIs.",
    tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MongoDB"],
    github: "https://github.com/",
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
    github: "https://github.com/",
    demo: "",
  },
  {
    title: "Trip Expense Tracker",
    tag: "Full Stack",
    description:
      "Track and categorize trip expenses with analytics and a clean, friendly UI.",
    details:
      "Full stack expense tracker with MySQL + ORM backend. Categorized expenses, summaries and analytics. Clean, user-friendly interface focused on usability.",
    tech: ["React", "Spring Boot", "MySQL", "Tailwind"],
    github: "https://github.com/",
    demo: "",
  },
];

export const EXPERIENCE = [
  {
    role: "Full Stack Java Trainee & Intern",
    company: "Kapil IT Skill Hub",
    period: "July 2025 – March 2026",
    bullets: [
      "Hands-on experience in Core Java, Spring Boot, REST APIs, JPA/Hibernate, MySQL and React.js.",
      "Developed a role-based system using Spring Boot, React and MySQL with REST APIs and full CRUD.",
      "Implemented clean layered architecture (Controller → Service → Repository).",
      "Used Postman for API testing and Git/GitHub for version control.",
      "Built scalable backend services integrated with responsive frontend UI.",
    ],
    tech: ["Java", "Spring Boot", "React", "MySQL"],
  },
];
