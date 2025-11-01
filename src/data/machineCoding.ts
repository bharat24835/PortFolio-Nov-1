import { MachineCodingProject } from "../types/machineCode";

export const machineCodingProjects: MachineCodingProject[] = [
  {
    title: "CountDownTimer",
    description:
      "A precise and interactive countdown timer built with React and TypeScript, featuring start/stop and reset controls, real-time countdown logic, and safe input handling.",
    image:
      "https://images.unsplash.com/photo-1666027092835-7e668416b7c8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y291bnRkb3duJTIwdGltZXJ8ZW58MHx8MHx8fDA%3D",
    tech: ["NextJs", "TypeScript", "CSS Modules"],
    github:
      "https://github.com/bharat24835/MachineCodingRound/tree/main/src/components/01-CountDownTimer",
    demo: "https://bharatmachinecodinground.netlify.app/countdownTimer",
    difficulty: "Medium",
    timeLimit: "45 minutes",
    features: [
      "Start, stop, and reset timer",
      "Hour, minute, and second input support",
      "Input validation and debouncing",
      "Prevents updates during countdown",
      "Clean and responsive UI with CSS Modules",
    ],
  },
  {
    title: "Paginated Product Browser",
    description:
      "A performant product listing interface with real-time search filtering, server-side pagination, and seamless UI updates powered by React Query and debounce logic.",
    image:
      "https://plus.unsplash.com/premium_photo-1666557390408-54d218815a4d?q=80&w=900&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tech: [
      "React",
      "TypeScript",
      "React Query",
      "Axios",
      "Lodash",
      "CSS Modules",
    ],
    github:
      "https://github.com/bharat24835/MachineCodingRound/tree/main/src/components/02-Pagination",
    demo: "https://bharatmachinecodinground.netlify.app/pagination",
    difficulty: "Medium",
    timeLimit: "1.5 hours",
    features: [
      "Real-time debounced search input",
      "Server-side pagination using React Query",
      "Dynamic page navigation",
      "Loading and error state handling",
      "Clean responsive layout with CSS Modules",
    ],
  },
  {
    title: "Infinite Scroll Image Gallery",
    description:
      "An image gallery with infinite scroll, search functionality, and lazy loading using Unsplash API.",
    image:
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Unsplash API", "Intersection Observer"],
    github: "https://github.com/bharat24835/infinite-gallery",
    demo: "https://infinite-gallery-demo.vercel.app",
    difficulty: "Medium",
    timeLimit: "2.5 hours",
    features: [
      "Infinite scroll",
      "Image search",
      "Lazy loading",
      "Responsive grid",
      "Loading states",
    ],
  },
  {
    title: "Kanban Board",
    description:
      "A Kanban board application with drag-and-drop cards, multiple boards, and data persistence.",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "React DnD", "TypeScript", "Local Storage"],
    github: "https://github.com/bharat24835/kanban-board",
    demo: "https://kanban-board-demo.netlify.app",
    difficulty: "Hard",
    timeLimit: "3 hours",
    features: [
      "Drag and drop cards",
      "Multiple boards",
      "Add/edit/delete cards",
      "Column management",
      "Data persistence",
    ],
  },
  {
    title: "Weather Dashboard",
    description:
      "A weather dashboard with current weather, 5-day forecast, and location search functionality.",
    image:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
    github: "https://github.com/bharat24835/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    difficulty: "Easy",
    timeLimit: "1.5 hours",
    features: [
      "Current weather display",
      "5-day forecast",
      "Location search",
      "Weather charts",
      "Geolocation support",
    ],
  },
  {
    title: "E-commerce Product Filter",
    description:
      "A product listing page with advanced filtering, sorting, and search capabilities.",
    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "TypeScript", "CSS Grid", "Local Storage"],
    github: "https://github.com/bharat24835/product-filter",
    demo: "https://product-filter-demo.netlify.app",
    difficulty: "Medium",
    timeLimit: "2 hours",
    features: [
      "Product filtering",
      "Price range slider",
      "Search functionality",
      "Sort options",
      "Responsive grid layout",
    ],
  },
];
