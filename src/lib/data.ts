import {
  Code2,
  FileCode,
  Atom,
  Layers,
  ServerCog,
  GitFork,
  Container,
  Database,
  Wind,
  Github,
  Linkedin,
  Mail,
  Briefcase,
  Lightbulb,
  type LucideIcon,
} from "lucide-react"

export const siteConfig = {
  name: "Amit Verma", // Replace with your name
  role: "Software Development Engineer",
  status: "Fresher",
  location: "New Delhi, India",
  email: "smartamitverma43@gmail.com",
  github: "https://github.com/Amit43verma",
  linkedin: "https://www.linkedin.com/in/amit-verma-812206251/",
  leetcode: "https://leetcode.com/u/amitverma2512/",  // Replace with actual LeetCode profile URL
  codeforces: "https://codeforces.com/profile/smartamitverma43",  // Replace with actual Codeforces profile URL
}
export const navLinks = [
  { name: "About", hash: "#about" },
  { name: "Projects", hash: "#projects" },
  // { name: "Experience", hash: "#experience" },
  { name: "Contact", hash: "#contact" },
]

export type Skill = {
  name: string
  icon: LucideIcon
  level?: number // Optional: 1-5 for proficiency
  category: string  // Added category property
}

export const skills: Skill[] = [
  { name: "JavaScript", icon: Code2, level: 4, category: "Programming Languages" },
  { name: "TypeScript", icon: FileCode, level: 4, category: "Programming Languages" },
  { name: "React", icon: Atom, level: 4, category: "Frontend Technologies" },
  { name: "Next.js", icon: Layers, level: 3, category: "Frontend Technologies" },
  { name: "Node.js", icon: ServerCog, level: 3, category: "Backend Technologies" },
  { name: "Python", icon: Code2, level: 3, category: "Programming Languages" },
  { name: "C", icon: FileCode, level: 3, category: "Programming Languages" },
  { name: "C++", icon: FileCode, level: 3, category: "Programming Languages" },
  // { name: "R", icon: FileCode, level: 2, category: "Programming Languages" },
  { name: "HTML", icon: Code2, level: 4, category: "Frontend Technologies" },
  { name: "CSS", icon: Code2, level: 4, category: "Frontend Technologies" },
  { name: "Git", icon: GitFork, level: 4, category: "Tools" },
  // { name: "Docker", icon: Container, level: 2, category: "Tools" },
  { name: "SQL", icon: Database, level: 3, category: "Databases" },
  { name: "Tailwind CSS", icon: Wind, level: 4, category: "Frontend Technologies" },
  { name: "FastAPI", icon: FileCode, level: 3, category: "Backend Technologies" },
  // { name: "PostgreSQL", icon: Database, level: 2, category: "Databases" },
  { name: "MongoDB", icon: Container, level: 2, category: "Databases" },
  { name: "Express.js", icon: ServerCog, level: 3, category: "Backend Technologies" },
  { name: "Flask", icon: FileCode, level: 3, category: "Backend Technologies" },
  { name: "Prisma", icon: Database, level: 2, category: "Databases" },
  // { name: "Supabase", icon: Database, level: 2, category: "Databases" },
  { name: "Shadcn", icon: Wind, level: 2, category: "Frontend Technologies" },
  { name: "Gemini API", icon: Lightbulb, level: 2, category: "Tools" },
  { name: "VS Code", icon: FileCode, level: 3, category: "Tools" },
  { name: "Postman", icon: Briefcase, level: 2, category: "Tools" },
  { name: "Optimization", icon: Lightbulb, level: 2, category: "Tools" },
  { name: "Analytics", icon: Atom, level: 2, category: "Tools" },
  { name: "Redux", icon: FileCode, level: 3, category: "Frontend Technologies" },
  // { name: "Jest", icon: Lightbulb, level: 2, category: "Tools" },
  { name: "Chakra UI", icon: Wind, level: 2, category: "Frontend Technologies" },
  { name: "Material UI", icon: Wind, level: 2, category: "Frontend Technologies" },
  { name: "GraphQL", icon: Lightbulb, level: 2, category: "Backend Technologies" },
  { name: "Sass", icon: Code2, level: 2, category: "Frontend Technologies" },
  { name: "Figma", icon: FileCode, level: 2, category: "Tools" },
  { name: "Vercel", icon: ServerCog, level: 2, category: "Tools" },
  { name: "Netlify", icon: ServerCog, level: 2, category: "Tools" },
  { name: "Jupyter", icon: FileCode, level: 2, category: "Tools" },
  { name: "Pandas", icon: Atom, level: 2, category: "Tools" },
  { name: "NumPy", icon: Atom, level: 2, category: "Tools" },
  { name: "Matplotlib", icon: Lightbulb, level: 2, category: "Tools" },
  { name: "Linux", icon: ServerCog, level: 2, category: "Tools" },
  { name: "Bash", icon: FileCode, level: 2, category: "Tools" },
  // { name: "Firebase", icon: Database, level: 2, category: "Databases" },
  { name: "AWS", icon: ServerCog, level: 2, category: "Tools" },
  // { name: "GCP", icon: ServerCog, level: 2, category: "Tools" },
  { name: "DBMS", icon: Database, level: 3, category: "Databases" },
  { name: "Data Structures", icon: Layers, level: 3, category: "Programming Concepts" },
  { name: "OOP", icon: Atom, level: 3, category: "Programming Concepts" },
  { name: "Operating Systems", icon: ServerCog, level: 3, category: "Programming Concepts" },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl?: string
  liveUrl?: string
  icon?: LucideIcon
}

export const projects: Project[] = [
  {
    title: "CareerBudy.Ai : AI-powered career coach",
    description:
      "Developed an AI-driven career platform for ATS-optimized resume/cover letter generation, role-specific interview prep, and industry insights using Gemini AI, Clerk authentication, and a fully responsive UI.",
       tags: ["Next.js", "Tailwind CSS", "JavaScript", "Shadcn", "Supabase", "Gemini API"],
    imageUrl: "/careerBuddy.png",
    githubUrl: siteConfig.github + "/CareerBuddy.git", // Replace with actual link
    liveUrl: "https://careerbuddy-ai.vercel.app/",
    icon: Briefcase,
  },
  {
    title: "Alumni-portal : Alumni management system",
    description:
      "Built a full-stack student-alumni networking platform with JWT auth, real-time chat via Socket.IO, and interactive social features like media posts, reactions, comments, and a rich-text editor to drive engagement.",
        tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.IO", "daisy-UI"],
    imageUrl: "/alumni.png",
    githubUrl: siteConfig.github + "/alumni-portal.git", // Replace
    liveUrl: "https://alumni-portal-frontend-vdvb.onrender.com", // Replace
    icon: Lightbulb,
  },
 
  {
    title: "Heart Risk Predictor",
    description: "Deployed a team-based heart disease risk predictor using SVM, Logistic Regression, Random Forest, KNN, Neural Networks, and ensembles on a 1M+ row dataset, achieving 95.21% accuracy.",
    tags: ["Python", "scikit-learn", "Tensorflow", "PyTorch", "HTML", "CSS", "Flask"],
    imageUrl: "/heart.png",
    githubUrl: siteConfig.github + "/HeartRiskPredictorML.git",
    liveUrl: "https://heart-risk-predictor.onrender.com",
    icon: Briefcase,
  },
  {
    title: "TalkEase :real-time chat app ",
    description:
      "Developed a real-time chat application using MERN, Socket.IO, Zustand, DaisyUI, and JWT authentication, featuring image sharing, live messaging, user profile updates, and customizable UI themes.",
       tags: ["ReactJS", "mongoDB", "express", "Node.js", "daisy-UI","Socket.IO","JWT","Zustand"],
    imageUrl: "/Talkease.png",
    githubUrl: siteConfig.github + "/TalkEase.git", // Replace with actual link
    liveUrl: "https://talkease-00z9.onrender.com/",
    icon: Briefcase,
  },
  {
    title: "Explora-Vista:travel-planner",
    description: "Built a travel planner web app enabling users to browse and book packages that include destinations, travel options, and adventure gear—offering a seamless experience for discovering and purchasing travel plans.",
    tags: ["HTML", "CSS", "Javascript"],
    imageUrl: "/explora-vista.png",
    githubUrl: siteConfig.github + "/Trip-planner.git",
    liveUrl: "https://amit43verma.github.io/Trip-planner/",
    icon: Briefcase,
  },
]

export type Experience = {
  role: string
  company: string
  companyUrl?: string
  date: string
  description: string
  skillsUsed: string[]
  icon?: LucideIcon
}



export const socialLinks = {
  github: { icon: Github, url: siteConfig.github },
  linkedin: { icon: Linkedin, url: siteConfig.linkedin },
  email: { icon: Mail, url: `mailto:${siteConfig.email}` },
}
