/**
 * Single source of truth for all portfolio content.
 * Update this file to add experience, projects, links or the resume file.
 */

export const profile = {
  name: "Ashish Kommanaveni",
  title: "Full Stack Java Developer",
  email: "ash.kommanaveni18@gmail.com",
  phone: "9402394952",
  location: "Dallas, TX",
  /** Place your resume PDF at public/resume.pdf to enable the download buttons. */
  //resumeUrl: "/resume.pdf",
  heroHeadline:
    "Building scalable enterprise applications with Java, Spring Boot & modern frontend technologies.",
  heroSummary:
    "Full Stack Java Developer with 7+ years building enterprise systems across banking, healthcare and financial services. Backend-focused — Java, Spring Boot, REST APIs, microservices and event-driven architecture — with hands-on React and Angular experience on the front end.",
  heroStack: ["Java", "Spring Boot", "Microservices", "React", "Kafka", "AWS"],
};

/** Add real URLs here when available; empty strings hide the link. */
export const socials = [
  { label: "LinkedIn", url: "https://www.linkedin.com/in/ashikom/" },
  { label: "GitHub", url: "https://github.com/ashkom18" },
  { label: "Medium", url: "https://medium.com/@ash.kommanaveni18" },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const focusAreas = [
  {
    icon: "server",
    title: "Backend Engineering",
    description: "Java, Spring Boot, REST APIs, Microservices",
  },
  {
    icon: "network",
    title: "Distributed Systems",
    description: "Kafka, Event-Driven Architecture, WebSockets",
  },
  {
    icon: "layout",
    title: "Full Stack Development",
    description: "React, Angular, JavaScript, HTML, CSS",
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description: "AWS, Docker, Kubernetes, Jenkins, CI/CD",
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  range: string;
  context: string;
  responsibilities: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "Morgan Stanley",
    role: "Full Stack Java Developer",
    location: "New York, NY — Remote",
    period: "Oct 2025 — Present",
    range: "2025 → Present",
    context:
      "Middle-office account opening and maintenance platform for an enterprise financial services environment.",
    responsibilities: [
      "Built and enhanced Java/Spring Boot microservices supporting middle-office account opening and maintenance workflows.",
      "Worked on request submission, validation, approval, rejection and resubmission workflows.",
      "Developed REST APIs for request creation, approval processing, pending-work retrieval and approval-history tracking.",
      "Implemented business validation, role-based access control and reviewer ownership rules using Spring Security.",
      "Designed transactional workflow processing and approval history tracking to keep request states consistent with complete audit trails.",
      "Developed JUnit and Mockito tests covering approval routing, authorization, validation and status transitions.",
      "Troubleshot defects during user acceptance testing and supported workflow reliability.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "Spring Security",
      "JUnit",
      "Mockito",
    ],
  },
  {
    company: "Omnicell",
    role: "Full Stack Java Developer",
    location: "Dallas, TX",
    period: "Sept 2024 — Sept 2025",
    range: "2024 → 2025",
    context:
      "Enterprise integration services and monitoring dashboards for healthcare technology systems.",
    responsibilities: [
      "Developed Java/Spring Boot microservices integrating an enterprise tool with connected applications.",
      "Automated the exchange of business records between different systems.",
      "Designed DTO-based data transformation and mapping components for destination-specific formats.",
      "Handled differing fields, data types and business rules during data transformation.",
      "Implemented validation and exception-handling mechanisms.",
      "Added controlled retry mechanisms for authentication failures, connection timeouts and temporary downstream service interruptions.",
      "Implemented transaction tracking and duplicate-processing protection.",
      "Provided visibility into successful, failed and reprocessable records.",
      "Developed React dashboards for integration monitoring with WebSocket-based near-real-time updates.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Microservices",
      "REST APIs",
      "React",
      "WebSockets",
      "DTOs",
      "Enterprise Integration",
    ],
  },
  {
    company: "Accenture",
    role: "Java Developer",
    location: "Hyderabad, India",
    period: "Oct 2021 — July 2024",
    range: "2021 → 2024",
    context:
      "Enterprise web platforms, event-driven services and CI/CD delivery for large client engagements.",
    responsibilities: [
      "Developed single page applications and portfolio review dashboards using Angular, React, TypeScript, HTML5, CSS3, Bootstrap, JavaScript and jQuery.",
      "Built reusable Angular/AngularJS components, services, directives, modules and filters.",
      "Integrated frontend applications with REST APIs and implemented Redux-Promise for state management.",
      "Developed Spring Boot microservices and REST APIs using Spring MVC and Hibernate with layered enterprise architecture.",
      "Used Swagger for API documentation and testing.",
      "Designed Kafka-based event-driven solutions using Java producers and consumers.",
      "Supported distributed data processing and real-time streaming using Kafka and Spark Streaming.",
      "Containerized applications using Docker and Kubernetes, and built Jenkins CI/CD pipelines around them.",
      "Used Linux shell scripts for environment setup and deployment activities.",
      "Developed AWS Lambda APIs for programmatic AWS service operations.",
      "Developed Java-based ETL processes involving IBM Cognos, MySQL and Cassandra.",
      "Used Git/GitHub and Gradle for source control and build management.",
      "Supported enterprise deployments across Tomcat, JBoss, WebSphere and WebLogic.",
    ],
    stack: [
      "Java",
      "Spring Boot",
      "Angular",
      "React",
      "Kafka",
      "Docker",
      "Kubernetes",
      "AWS",
      "Jenkins",
      "Hibernate",
      "MySQL",
      "Cassandra",
    ],
  },
];

export const skillCategories = [
  { title: "Languages", items: ["Java", "JavaScript", "TypeScript", "SQL"] },
  {
    title: "Backend",
    items: ["Spring Boot", "Spring MVC", "Hibernate", "REST APIs", "Microservices"],
  },
  {
    title: "Frontend",
    items: ["React", "Angular", "AngularJS", "HTML5", "CSS3", "Bootstrap", "jQuery"],
  },
  { title: "Databases", items: ["MySQL", "Cassandra"] },
  {
    title: "Messaging & Distributed Systems",
    items: ["Apache Kafka", "Spark Streaming", "WebSockets"],
  },
  { title: "Cloud", items: ["AWS", "AWS Lambda"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Linux"] },
  { title: "Testing", items: ["JUnit", "Mockito", "Swagger / API Testing"] },
  { title: "Security", items: ["Spring Security", "Role-Based Access Control"] },
  { title: "Build & Source Control", items: ["Git", "GitHub", "Gradle"] },
  {
    title: "Enterprise Platforms",
    items: ["Tomcat", "JBoss", "WebSphere", "WebLogic", "IBM Cognos"],
  },
];

export const education = {
  degree: "Master's in Computer Science",
  university: "University of North Texas",
  location: "Dallas, TX",
  graduation: "May 2026",
};
