export interface Project {
  name: string;
  description: string;
  technologies: string[];
  image: string;
  website?: string;
  github?: string;
  content?: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    name: "project5",
    description: "project5_description",
    technologies: ["React", "TypeScript", "CSS"],
    image: "/Portfolio_Hector_Rodriguez/Nota.webp",
    content: "project5_content",
    images: [
      "/Portfolio_Hector_Rodriguez/Nota2.webp",
      "/Portfolio_Hector_Rodriguez/Nota3.webp",
      "/Portfolio_Hector_Rodriguez/Nota4.webp"
    ]
  },
  {
    name: "project3",
    description: "project3_description",
    technologies: ["Electron", "React", "TypeScript", "CSS"],
    image: "/Portfolio_Hector_Rodriguez/TwitchBot.webp",
    content: "project3_content"
  },
  {
    name: "project4",
    description: "project4_description",
    technologies: ["OpenSpace3D"],
    image: "/Portfolio_Hector_Rodriguez/RV.webp",
    website:
      "https://drive.google.com/file/d/1jfmdctuWp0xJXXLZ-oxu120lNCMMkDAc/view?usp=sharing",
    content: "project4_content",
    images: [
      "/Portfolio_Hector_Rodriguez/RV2.webp",
      "/Portfolio_Hector_Rodriguez/RV3.webp"
    ]
  },
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
