import { Skill } from "../types/skills";

export const frontendSkills: Skill[] = [
  {
    name: "React & Ecosystem",
    points: [
      "Developed scalable apps using React.js and Next.js",
      "Advanced data fetching and caching with TanStack Query",
      "Custom hooks for form handling and modal logic (Mantine UI)",
      "Optimized large datasets with virtualization (react-window)",
    ],
  },
  {
    name: "Modern JavaScript & TypeScript",
    points: [
      "Strong command over ES6+ features with strict TypeScript typing",
      "Handled complex asynchronous workflows with async/await",
      "Optimized API calls with debouncing, throttling and caching layers",
    ],
  },
  {
    name: "UI/UX & Component Libraries",
    points: [
      "Built responsive UIs using Tailwind CSS and Mantine UI",
      "Used Framer Motion for smooth UI transitions and animations",
      "Designed clean dashboards and modals with Chakra UI and Mantine",
      "Crafted custom sliding tabs, cards, and dropdown menus",
    ],
  },
];

export const backendSkills: Skill[] = [
  {
    name: "Node.js, NestJS & API Design",
    points: [
      "Developed modular REST APIs with NestJS and MikroORM",
      "Implemented role-based access control using JWT and Guards",
      "Handled payment flows and wallet deduction logic",
      "Wrote scalable services for revision tracking and leaderboard logic",
    ],
  },
  {
    name: "Database Management",
    points: [
      "Designed schemas and relationships in PostgreSQL and MongoDB",
      "Query optimization, joins, and full-text search using MikroORM & SQL",
      "Handled relational mappings for tournament and concept recall systems",
      "Created CLI tools for managing course and board-based ordering",
    ],
  },
  {
    name: "DevOps & Cloud",
    points: [
      "Containerized apps with Docker and deployed to AWS EC2 & S3",
      "Set up CI/CD pipelines with GitHub Actions for staging and production",
      "Used Supabase Storage for file uploads with metadata mapping",
      "Managed NGINX, Ingress, and Azure Front Door for load balancing",
    ],
  },
];
