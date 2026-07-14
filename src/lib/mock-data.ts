export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  isPro: boolean;
}

export interface ItemType {
  id: string;
  name: string;
  icon: string; // Lucide icon name
  color: string; // Hex color code
  isSystem: boolean;
}

export interface Item {
  id: string;
  title: string;
  contentType: "TEXT" | "FILE" | "URL";
  content?: string;
  fileUrl?: string;
  fileName?: string;
  fileSize?: number;
  url?: string;
  description?: string;
  language?: string;
  isFavorite: boolean;
  isPinned: boolean;
  itemTypeId: string;
  collectionIds: string[]; // Many-to-many relationship
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Collection {
  id: string;
  name: string;
  description?: string;
  isFavorite: boolean;
  defaultTypeId?: string;
  createdAt: string;
  updatedAt: string;
}

export const mockUser: User = {
  id: "user_1",
  name: "John Doe",
  email: "demo@devstash.io",
  image: "/avatars/john-doe.png",
  isPro: true,
};

export const mockItemTypes: ItemType[] = [
  { id: "it-snippet", name: "Snippet", icon: "Code", color: "#3b82f6", isSystem: true },
  { id: "it-prompt", name: "Prompt", icon: "Sparkles", color: "#8b5cf6", isSystem: true },
  { id: "it-command", name: "Command", icon: "Terminal", color: "#f97316", isSystem: true },
  { id: "it-note", name: "Note", icon: "StickyNote", color: "#fde047", isSystem: true },
  { id: "it-file", name: "File", icon: "File", color: "#6b7280", isSystem: true },
  { id: "it-image", name: "Image", icon: "Image", color: "#ec4899", isSystem: true },
  { id: "it-link", name: "Link", icon: "Link", color: "#10b981", isSystem: true },
];

export const mockCollections: Collection[] = [
  {
    id: "c-react-patterns",
    name: "React Patterns",
    description: "Hooks, components & gotchas",
    isFavorite: true,
    defaultTypeId: "it-snippet",
    createdAt: "2026-07-13T10:00:00Z",
    updatedAt: "2026-07-13T12:00:00Z",
  },
  {
    id: "c-ai-prompts",
    name: "AI Prompts",
    description: "System messages & workflows",
    isFavorite: true,
    defaultTypeId: "it-prompt",
    createdAt: "2026-07-13T10:10:00Z",
    updatedAt: "2026-07-13T12:10:00Z",
  },
  {
    id: "c-devops-toolbox",
    name: "DevOps Toolbox",
    description: "Shell, Docker & CI commands",
    isFavorite: false,
    defaultTypeId: "it-command",
    createdAt: "2026-07-13T10:20:00Z",
    updatedAt: "2026-07-13T12:20:00Z",
  },
  {
    id: "c-python-snippets",
    name: "Python Snippets",
    description: "Data & scripting helpers",
    isFavorite: false,
    defaultTypeId: "it-snippet",
    createdAt: "2026-07-13T10:30:00Z",
    updatedAt: "2026-07-13T12:30:00Z",
  },
  {
    id: "c-reading-list",
    name: "Reading List",
    description: "Articles & docs to revisit",
    isFavorite: false,
    defaultTypeId: "it-link",
    createdAt: "2026-07-13T10:40:00Z",
    updatedAt: "2026-07-13T12:40:00Z",
  },
  {
    id: "c-interview-prep",
    name: "Interview Prep",
    description: "Patterns worth memorizing",
    isFavorite: false,
    defaultTypeId: "it-snippet",
    createdAt: "2026-07-13T10:50:00Z",
    updatedAt: "2026-07-13T12:50:00Z",
  },
];

export const mockItems: Item[] = [
  {
    id: "i-use-debounce",
    title: "useDebounce hook",
    contentType: "TEXT",
    content: `import { useEffect, useState } from "react"\n\nexport function useDebounce<T>(value: T, delay = 3) {\n  const [debounced, setDebounced] = useState(value)\n\n  useEffect(() => {\n    const id = setTimeout(() => setDebounced(value), delay)\n    return () => clearTimeout(id)\n  }, [value, delay])\n\n  return debounced\n}`,
    description: "Debounce any reactive value inside a component.",
    language: "typescript",
    isFavorite: true,
    isPinned: true,
    itemTypeId: "it-snippet",
    collectionIds: ["c-react-patterns", "c-interview-prep"],
    tags: ["react", "hooks", "performance"],
    createdAt: "2026-07-13T13:48:00Z",
    updatedAt: "2026-07-13T13:48:00Z",
  },
  {
    id: "i-compound-component",
    title: "Compound component pattern",
    contentType: "TEXT",
    content: `// Compound Component Example\nimport React, { createContext, useContext, useState } from 'react';\n\nconst TabContext = createContext(null);\n\nexport function Tabs({ children, defaultValue }) {\n  const [activeTab, setActiveTab] = useState(defaultValue);\n  return (\n    <TabContext.Provider value={{ activeTab, setActiveTab }}>\n      <div className="tabs">{children}</div>\n    </TabContext.Provider>\n  );\n}`,
    description: "Flexible tabs using context + static properties.",
    language: "typescript",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "it-snippet",
    collectionIds: ["c-react-patterns"],
    tags: ["react", "patterns", "context"],
    createdAt: "2026-07-13T11:00:00Z",
    updatedAt: "2026-07-13T11:00:00Z",
  },
  {
    id: "i-patterns-dev",
    title: "Patterns.dev",
    contentType: "URL",
    url: "https://www.patterns.dev",
    description: "Modern web app design patterns.",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "it-link",
    collectionIds: ["c-react-patterns", "c-reading-list"],
    tags: ["design-patterns", "web", "architecture"],
    createdAt: "2026-07-13T11:05:00Z",
    updatedAt: "2026-07-13T11:05:00Z",
  },
  {
    id: "i-senior-code-reviewer",
    title: "Senior code reviewer",
    contentType: "TEXT",
    content: "You are an expert software engineer. Review the following pull request and provide constructive feedback on performance, clean code, edge cases, and architectural best practices.",
    description: "Reusable system prompt for PR reviews.",
    language: "markdown",
    isFavorite: true,
    isPinned: false,
    itemTypeId: "it-prompt",
    collectionIds: ["c-ai-prompts"],
    tags: ["ai", "prompts", "code-review"],
    createdAt: "2026-07-13T11:10:00Z",
    updatedAt: "2026-07-13T11:10:00Z",
  },
  {
    id: "i-rag-summarizer",
    title: "RAG summarizer",
    contentType: "TEXT",
    content: "Summarize the retrieved search results relative to the user query. Extract key facts, resolve contradictions, and format the response as bullet points.",
    description: "Grounded summarization template.",
    language: "markdown",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "it-prompt",
    collectionIds: ["c-ai-prompts"],
    tags: ["ai", "prompts", "rag"],
    createdAt: "2026-07-13T11:15:00Z",
    updatedAt: "2026-07-13T11:15:00Z",
  },
  {
    id: "i-prune-docker",
    title: "Prune Docker system",
    contentType: "TEXT",
    content: "docker system prune -a --volumes",
    description: "Reclaim disk from stopped containers and dangling images.",
    language: "bash",
    isFavorite: false,
    isPinned: true,
    itemTypeId: "it-command",
    collectionIds: ["c-devops-toolbox"],
    tags: ["docker", "devops", "cli"],
    createdAt: "2026-07-13T11:20:00Z",
    updatedAt: "2026-07-13T11:20:00Z",
  },
  {
    id: "i-kill-port",
    title: "Find & kill port process",
    contentType: "TEXT",
    content: "lsof -i :3000\nkill -9 <PID>",
    description: "Free up a busy dev-server port.",
    language: "bash",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "it-command",
    collectionIds: ["c-devops-toolbox"],
    tags: ["cli", "bash", "network"],
    createdAt: "2026-07-13T11:25:00Z",
    updatedAt: "2026-07-13T11:25:00Z",
  },
  {
    id: "i-rebase-notes",
    title: "Rebase workflow notes",
    contentType: "TEXT",
    content: "1. git checkout main\n2. git pull\n3. git checkout feature\n4. git rebase main\n5. Resolve conflicts, git add .\n6. git rebase --continue",
    description: "Personal checklist to avoid rebase disasters.",
    language: "markdown",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "it-note",
    collectionIds: ["c-devops-toolbox", "c-interview-prep"],
    tags: ["git", "workflow", "notes"],
    createdAt: "2026-07-13T11:30:00Z",
    updatedAt: "2026-07-13T11:30:00Z",
  },
  {
    id: "i-flatten-list",
    title: "Flatten nested list",
    contentType: "TEXT",
    content: "def flatten(lst):\n    return [item for sublist in lst for item in (flatten(sublist) if isinstance(sublist, list) else [sublist])]",
    description: "Shallow and recursive flattening helpers.",
    language: "python",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "it-snippet",
    collectionIds: ["c-python-snippets"],
    tags: ["python", "lists", "algorithms"],
    createdAt: "2026-07-13T11:35:00Z",
    updatedAt: "2026-07-13T11:35:00Z",
  },
  {
    id: "i-read-csv",
    title: "Read CSV with pandas",
    contentType: "TEXT",
    content: "import pandas as pd\ndf = pd.read_csv('data.csv', skipinitialspace=True)",
    description: "Load and clean a CSV in two lines.",
    language: "python",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "it-snippet",
    collectionIds: ["c-python-snippets"],
    tags: ["python", "pandas", "data-science"],
    createdAt: "2026-07-13T11:40:00Z",
    updatedAt: "2026-07-13T11:40:00Z",
  },
  {
    id: "i-refactoring-ui",
    title: "Refactoring UI",
    contentType: "URL",
    url: "https://www.refactoringui.com",
    description: "Design tactics for developers.",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "it-link",
    collectionIds: ["c-reading-list"],
    tags: ["design", "ui", "ux"],
    createdAt: "2026-07-13T11:45:00Z",
    updatedAt: "2026-07-13T11:45:00Z",
  },
  {
    id: "i-big-o",
    title: "Big-O cheat sheet",
    contentType: "TEXT",
    content: "- O(1) Constant\n- O(log n) Logarithmic\n- O(n) Linear\n- O(n log n) Linearithmic\n- O(n^2) Quadratic",
    description: "Quick reference before interviews.",
    language: "markdown",
    isFavorite: false,
    isPinned: false,
    itemTypeId: "it-note",
    collectionIds: ["c-interview-prep"],
    tags: ["algorithms", "complexity", "interview"],
    createdAt: "2026-07-13T11:50:00Z",
    updatedAt: "2026-07-13T11:50:00Z",
  },
];
