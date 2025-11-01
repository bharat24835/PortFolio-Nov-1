import { Skill } from "../types/skills";

export const frontendSkills: Skill[] = [
  {
    name: "React & Next.js",
    points: [
      "Building scalable applications with React 19 and Next.js 15 (App Router)",
      "Server Actions implementation for efficient data handling",
      "Advanced state management with TanStack Query and Zustand",
      "Implemented reusable components in Aural Design System",
    ],
  },
  {
    name: "TypeScript & JavaScript",
    points: [
      "Strong command over TypeScript with strict typing",
      "Optimized API calls using debouncing, throttling, and lazy loading",
      "Enhanced performance by 21-26% through optimization techniques",
      "Experience with ES6+ features and modern JavaScript patterns",
    ],
  },
  {
    name: "UI/UX & Styling",
    points: [
      "Built responsive UIs using Tailwind CSS and Mantine",
      "Implemented pixel-perfect designs with consistent styling",
      "Created 15+ UI pages in Next.js with high fidelity",
      "Used Framer Motion for smooth animations and transitions",
    ],
  },
];

export const backendSkills: Skill[] = [
  {
    name: "Backend Development",
    points: [
      "Developed REST APIs with NestJS, ExpressJS, and Node.js",
      "Implemented JWT-based authentication and OAuth2 integration",
      "Role-based access control (RBAC) for admin and customer roles",
      "Integrated Gmail API for OTP verification and password reset",
    ],
  },
  {
    name: "Database & Storage",
    points: [
      "MongoDB for user information, chat history, and data management",
      "MySQL and PostgreSQL for relational data structures",
      "Optimized database queries for improved performance",
      "Implemented secure data handling and authentication",
    ],
  },
  {
    name: "Deployment & DevOps",
    points: [
      "Containerized applications with Docker and Kubernetes",
      "Deployed to AWS S3 and CloudFront for content delivery",
      "Version control with Git and error tracking with Sentry",
      "Experience with scalable deployments supporting 100k+ users",
    ],
  },
];
