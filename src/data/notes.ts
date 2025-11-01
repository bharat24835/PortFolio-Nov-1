import { Note, NoteCategory } from "../types/notes";

export const noteCategories: NoteCategory[] = [
  {
    id: "dsa",
    name: "Data Structures & Algorithms",
    description:
      "Comprehensive notes covering all DSA topics with examples and practice problems",
    icon: "Binary",
    color: "from-purple-500 to-indigo-600",
    totalNotes: 12,
  },
  {
    id: "react",
    name: "ReactJS",
    description:
      "Complete React ecosystem including hooks, context, Redux, and best practices",
    icon: "Atom",
    color: "from-blue-500 to-cyan-500",
    totalNotes: 8,
  },
  {
    id: "javascript",
    name: "JavaScript",
    description:
      "Modern JavaScript concepts, ES6+, async programming, and advanced topics",
    icon: "Code2",
    color: "from-yellow-500 to-orange-500",
    totalNotes: 10,
  },
  {
    id: "html-css",
    name: "HTML & CSS",
    description:
      "Semantic HTML, modern CSS, Flexbox, Grid, animations, and responsive design",
    icon: "Layout",
    color: "from-green-500 to-teal-500",
    totalNotes: 6,
  },
  {
    id: "nodejs",
    name: "Node.js",
    description:
      "Backend development with Node.js, Express, APIs, and database integration",
    icon: "Server",
    color: "from-emerald-500 to-green-600",
    totalNotes: 7,
  },
  {
    id: "system-design",
    name: "System Design",
    description:
      "Scalable system architecture, design patterns, and distributed systems",
    icon: "Network",
    color: "from-red-500 to-pink-500",
    totalNotes: 5,
  },
];

export const studyNotes: Note[] = [
  // DSA Notes
  {
    id: "dsa-monotonic",
    title: "Monotonic Stack",
    description: "Monotonic Stack Template Pattern ",
    category: "dsa",
    topics: ["NGE", "NSE", "PSE", "PGE "],
    downloadUrl:
      "https://drive.google.com/file/d/1EClqTi2YdHpgr6yNV4LoxS-VtBQj1cUP/view?usp=drive_link",
    lastUpdated: "2024-01-15",
    difficulty: "Intermediate",
    pages: 30,
    format: "PDF",
  },
  {
    id: "dsa-prefixSum",
    title: "Prefix Sum",
    description: "Prefix Sum Question",
    category: "dsa",
    topics: ["Prefix Sum", "Divisible By N"],
    downloadUrl:
      "https://drive.google.com/file/d/1VQgZmtIc9WUhi3Th_RwxZKLLBYjr1g99/view?usp=drive_link",
    lastUpdated: "2024-01-15",
    difficulty: "Beginner",
    pages: 20,
    format: "PDF",
  },
  {
    id: "dsa-trees",
    title: "Trees & Binary Search Trees",
    description:
      "In-depth study of tree data structures, traversals, BST operations, and advanced tree problems.",
    category: "dsa",
    topics: [
      "Binary Trees",
      "BST",
      "Tree Traversals",
      "Tree DP",
      "Segment Trees",
    ],
    downloadUrl: "https://drive.google.com/file/d/example2/view",
    previewUrl: "https://drive.google.com/file/d/example2/preview",
    lastUpdated: "2024-01-20",
    difficulty: "Intermediate",
    pages: 38,
    format: "PDF",
  },
  {
    id: "dsa-graphs",
    title: "Graph Algorithms Masterclass",
    description:
      "Complete guide to graph algorithms including DFS, BFS, shortest paths, and advanced graph problems.",
    category: "dsa",
    topics: [
      "Graph Traversal",
      "Shortest Path",
      "MST",
      "Topological Sort",
      "Union Find",
    ],
    downloadUrl: "https://drive.google.com/file/d/example3/view",
    lastUpdated: "2024-01-25",
    difficulty: "Advanced",
    pages: 52,
    format: "PDF",
  },
  {
    id: "dsa-dp",
    title: "Dynamic Programming Patterns",
    description:
      "Master DP with pattern-based approach covering all major DP categories and optimization techniques.",
    category: "dsa",
    topics: ["1D DP", "2D DP", "Tree DP", "Digit DP", "Bitmask DP"],
    downloadUrl: "https://drive.google.com/file/d/example4/view",
    lastUpdated: "2024-02-01",
    difficulty: "Advanced",
    pages: 41,
    format: "PDF",
  },

  // React Notes
  {
    id: "react-hooks",
    title: "React Hooks Deep Dive",
    description:
      "Complete guide to React hooks including built-in hooks, custom hooks, and advanced patterns.",
    category: "react",
    topics: [
      "useState",
      "useEffect",
      "useContext",
      "Custom Hooks",
      "Performance Hooks",
    ],
    downloadUrl: "https://drive.google.com/file/d/example5/view",
    lastUpdated: "2024-01-18",
    difficulty: "Intermediate",
    pages: 32,
    format: "PDF",
  },
  {
    id: "react-redux",
    title: "State Management with Redux",
    description:
      "Redux fundamentals, Redux Toolkit, middleware, and best practices for state management.",
    category: "react",
    topics: [
      "Redux Core",
      "Redux Toolkit",
      "Middleware",
      "Async Actions",
      "DevTools",
    ],
    downloadUrl: "https://drive.google.com/file/d/example6/view",
    lastUpdated: "2024-01-22",
    difficulty: "Advanced",
    pages: 28,
    format: "PDF",
  },

  // JavaScript Notes
  {
    id: "js-async",
    title: "Asynchronous JavaScript Mastery",
    description:
      "Promises, async/await, event loop, and advanced asynchronous programming patterns.",
    category: "javascript",
    topics: [
      "Promises",
      "Async/Await",
      "Event Loop",
      "Callbacks",
      "Error Handling",
    ],
    downloadUrl: "https://drive.google.com/file/d/example7/view",
    lastUpdated: "2024-01-12",
    difficulty: "Intermediate",
    pages: 35,
    format: "PDF",
  },
  {
    id: "js-es6",
    title: "Modern JavaScript (ES6+)",
    description:
      "Latest JavaScript features including destructuring, modules, classes, and advanced ES6+ concepts.",
    category: "javascript",
    topics: [
      "Arrow Functions",
      "Destructuring",
      "Modules",
      "Classes",
      "Template Literals",
    ],
    downloadUrl: "https://drive.google.com/file/d/example8/view",
    lastUpdated: "2024-01-28",
    difficulty: "Beginner",
    pages: 42,
    format: "PDF",
  },

  // HTML & CSS Notes
  {
    id: "css-flexbox-grid",
    title: "CSS Flexbox & Grid Layout",
    description:
      "Master modern CSS layouts with comprehensive Flexbox and Grid examples and use cases.",
    category: "html-css",
    topics: [
      "Flexbox",
      "CSS Grid",
      "Responsive Design",
      "Layout Patterns",
      "Browser Support",
    ],
    downloadUrl: "https://drive.google.com/file/d/example9/view",
    lastUpdated: "2024-01-30",
    difficulty: "Intermediate",
    pages: 29,
    format: "PDF",
  },
  {
    id: "css-animations",
    title: "CSS Animations & Transitions",
    description:
      "Create stunning animations with CSS transitions, keyframes, and advanced animation techniques.",
    category: "html-css",
    topics: [
      "Transitions",
      "Keyframes",
      "Transform",
      "Animation Properties",
      "Performance",
    ],
    downloadUrl: "https://drive.google.com/file/d/example10/view",
    lastUpdated: "2024-02-05",
    difficulty: "Advanced",
    pages: 24,
    format: "PDF",
  },

  // Node.js Notes
  {
    id: "nodejs-express",
    title: "Node.js & Express.js Fundamentals",
    description:
      "Build robust backend applications with Node.js and Express including middleware and routing.",
    category: "nodejs",
    topics: [
      "Node.js Basics",
      "Express Setup",
      "Middleware",
      "Routing",
      "Error Handling",
    ],
    downloadUrl: "https://drive.google.com/file/d/example11/view",
    lastUpdated: "2024-01-14",
    difficulty: "Beginner",
    pages: 36,
    format: "PDF",
  },

  // System Design Notes
  {
    id: "system-design-basics",
    title: "System Design Fundamentals",
    description:
      "Core concepts of system design including scalability, reliability, and distributed systems.",
    category: "system-design",
    topics: [
      "Scalability",
      "Load Balancing",
      "Caching",
      "Database Design",
      "Microservices",
    ],
    downloadUrl: "https://drive.google.com/file/d/example12/view",
    lastUpdated: "2024-02-10",
    difficulty: "Advanced",
    pages: 48,
    format: "PDF",
  },
];
