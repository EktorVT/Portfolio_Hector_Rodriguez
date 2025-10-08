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
    name: "project1",
    description: "project1_description",
    technologies: ["Vite", "TypeScript", "CSS"],
    image: "/Portfolio_Hector_Rodriguez/portfolio.webp",
    website: "https://ektorvt.github.io/Portfolio_Hector_Rodriguez/",
    github: "https://github.com/EktorVT/portfolio"
  },
  {
    name: "project2",
    description: "project2_description",
    technologies: ["Figma"],
    image: "/Portfolio_Hector_Rodriguez/Cremeria.webp",
    website:
      "https://www.figma.com/proto/ooMxTrgNSXFIEQ8ZfqkRil/Cremeria-Agropecuaria?node-id=2-2&t=2YeCQgwSWpmIfOXv-1&scaling=scale-down&content-scaling=fixed"
  }
];
