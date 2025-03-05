export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  website?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    name: "project1", //translation key to display text
    description: "project1_description", //Clave de traducción para mostrar texto
    technologies: ["Vite", "TypeScript", "CSS"],
    image: "/Portfolio_Hector_Rodriguez/portfolio.png",
    github: "https://github.com/EktorVT/portfolio"
  }
];
