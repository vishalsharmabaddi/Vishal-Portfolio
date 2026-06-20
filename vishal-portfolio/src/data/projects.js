// `github` and `live` are optional — ProjectCard only renders a button
// for whichever links actually exist (conditional rendering).
export const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce application with secure JWT authentication, payment gateway integration, product listing, shopping cart, and order management — Spring Boot backend with a React frontend.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'React', 'MySQL', 'REST APIs'],
    github: 'https://github.com/vishalsharmabaddi',
    live: null,
  },
  {
    title: 'SuperDo AI — AI-powered Task Manager',
    description:
      'A live AI-powered productivity application with smart task management and AI-driven interactions. Modern React frontend, deployed on Netlify.',
    tech: ['React', 'AI Integration', 'Netlify'],
    github: 'https://github.com/vishalsharmabaddi/SuperDo',
    live: 'https://superdo-ai.netlify.app',
  },
  {
    title: 'E-Commerce Microservices Platform',
    description:
      'A microservices-based evolution of the e-commerce platform — breaking the monolith into independent Spring Boot services (auth, catalog, orders, payments) communicating over REST, built for scalability.',
    tech: ['Java', 'Spring Boot', 'Microservices', 'Docker', 'REST APIs'],
    github: null,
    live: null,
    comingSoon: true,
  },
]
