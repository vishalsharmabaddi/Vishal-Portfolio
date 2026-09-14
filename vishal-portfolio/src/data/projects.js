// `github` and `live` are optional — ProjectCard only renders a button
// for whichever links actually exist (conditional rendering).
export const projects = [
  {
    title: 'Taurus Go — HR & Attendance SaaS Platform',
    description:
      'HR & Attendance SaaS platform architected as Spring Boot microservices communicating via Apache Kafka. Service discovery (Eureka), API Gateway, Config Server, and Keycloak-based security across services. React frontend with Google OAuth, PostgreSQL persistence, and automated branded payslip generation.',
    tech: [
      'Java',
      'Spring Boot',
      'Apache Kafka',
      'Spring Cloud',
      'Keycloak',
      'Docker',
      'React',
      'PostgreSQL',
      'Microservices',
    ],
    github: 'https://github.com/vishalsharmabaddi/hr-saas-microservices',
    live: 'https://taurus-go.netlify.app/',
  },
  {
    title: 'BeetleCart — Full Stack eCommerce Platform',
    description:
      'Role-based eCommerce platform (Buyer / Seller / Admin) with JWT auth via HTTP-only cookies. React + Vite frontend with Redux Toolkit, Tailwind CSS, and Stripe checkout — product catalog, cart, and orders. REST APIs documented with Swagger/OpenAPI, containerized with Docker and deployed to production.',
    tech: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'PostgreSQL',
      'React',
      'Redux Toolkit',
      'Tailwind CSS',
      'Stripe',
      'Docker',
    ],
    github: 'https://github.com/vishalsharmabaddi/BeetleCart',
    live: 'https://beetlecart.netlify.app/',
  },
  {
    title: 'SuperDo AI — AI-Powered Productivity App',
    description:
      'Full stack AI productivity app with a Spring Boot + Hibernate backend and a React frontend featuring voice interaction via the Web Speech API. Containerized with Docker and deployed on Netlify.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'React', 'Web Speech API', 'Docker'],
    github: 'https://github.com/vishalsharmabaddi/SuperDo',
    live: 'https://superdo-ai.netlify.app',
  },
]
