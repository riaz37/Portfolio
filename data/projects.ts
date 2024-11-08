import { FaReact, FaNodeJs, FaPython, FaDatabase, FaLinkedin, FaSyncAlt } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiTypescript, SiMongodb, SiTensorflow, SiPostgresql } from 'react-icons/si';



export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  
  liveUrl?: string; 
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Acro Nation Website",
    description: "An IT firm website created using React and Next.js. It showcases their services, portfolio, and contact information.",
    icon: RiNextjsFill,
    technologies: ["Next.js","TypeScript", "TailwindCSS", "GSAP"],

    liveUrl: "https://acronation.net", 
    skills: [
      { name: "Full Stack Development" },
      { name: "UI/UX Design" },
      { name: "Responsive Web Design" },
      { name: "Performance Optimization" }
    ]
  },
  {
    id: 2,
    title: "Animated 3D E-Commerce Website",
    description: "A comprehensive 3D project that showcases a dynamic e-commerce website with interactive animations.",
    icon: RiNextjsFill,
    technologies: ["Next.js","JavaScript", "TailwindCSS", "GSAP", "Prismic"],
    
    liveUrl: "https://fizzi37.vercel.app", 
    skills: [
      { name: "Web Scraping" },
      { name: "Data Analysis" },
      { name: "Automation" },
      { name: "Machine Learning" },
      { name: "Document Generation" }
    ]
  },
  
];
