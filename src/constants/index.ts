import {
  logo,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  // nodejs,
  git,
  swift,
  python,
  csharp,
  webvr,
  vrautism,
  portfolio,
  threejs,
  bearopedia,
  turtlefractalgenerator,
  hangman,
  menuapp
} from "../assets";

export const navLinks: {
  id: string;
  title: string;
}[]= [
  { id: "",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const education : {
  degree: string;
  university: string;
  country: string;
  year: string;
  grade: string;
}[] = [
  {
    degree: "MSc Interactive Media",
    university: "University College Cork",
    country: "Ireland",
    year: "2023",
    grade: "First Class Honours",
  },
  {
    degree: "MSc Clinical Psychology",
    university: "Rijksuniversiteit Leiden",
    country: "The Netherlands",
    year: "2023",
    grade: "8.6",
  },
  {
    degree: "BSc (Hons) Psychology",
    university: "University of Dundee",
    country: "United Kingdom",
    year: "2020",
    grade: "First Class Honours",
  },
];

const technologies: {
  name: string;
  icon: string;
}[] = [
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "tailwindcss",
    icon: tailwind,
  },
  // {
  //   name: "NodeJS",
  //   icon: nodejs,
  // },
  {
    name: "ThreeJS",
    icon: threejs,
  },
  {
    name: "Redux",
    icon: redux
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "Swift",
    icon: swift,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C#",
    icon: csharp,
  },
];

const experiences: {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}[] = [
  {
    title: "Demonstrator in Computer Science",
    company_name: "UCC",
    icon: logo,
    iconBg: "#383E56",
    date: "June 2022 - April 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Research Internship",
    company_name: "Universiteit Leiden",
    icon: logo,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects: {
  name: string;
  description: string;
  tags: {
      name: string;
      type: string;
  }[];
  image: string;
  source_code_link: string;
  filtered: boolean;
}[] = [
  {
    name: "Web Menu for Food Delivery",
    description: "A prototype with TheMealDB API for a delivery app using React, Typescript and Redux with persistent local storage",
    tags: [
      {
        name: "TypeScript",
        type: "language",
      },
      {
        name: "React",
        type: "library",
      },
      {
        name: "Redux",
        type: "library",
      },
      {
        name: "CSS",
        type: "language",
      },
      {
        name: "HTML5",
        type: "language",
      },
      {
        name: "Web",
        type: "platform",
      },
      {
        name: "Desktop",
        type: "device",
      },
    ],
    image: menuapp,
    source_code_link: "https://github.com/esgoet/menu-app",
    filtered: false,
  },
  {
    name: "The Hangman Game as a ReactJS App",
    description: "A web application to play word-guessing game Hangman",
    tags: [
      {
        name: "TypeScript",
        type: "language",
      },
      {
        name: "React",
        type: "library",
      },
      {
        name: "tailwindcss",
        type: "library",
      },
      {
        name: "CSS",
        type: "language",
      },
      {
        name: "HTML5",
        type: "language",
      },
      {
        name: "Web",
        type: "platform",
      },
      {
        name: "Desktop",
        type: "device",
      },
    ], 
    image: hangman,
    source_code_link: "https://github.com/esgoet/hangman",
    filtered: false,
  },
  {
    name: "VR as an Autism Awareness Tool",
    description:
      "VR application that allows users to experience autistic symptoms from a first-person perspective in a health care setting to improve empathy and care for autistic patients.",
    tags: [
      {
        name: "VR",
        type: "device",
      },
      {
        name: "C#",
        type: "language",
      },
      {
        name: "OpenXR",
        type: "platform",
      },
      {
        name: "Blender",
        type: "software",
      },
      {
        name: "Unity",
        type: "software",
      },
      
    ],
    image: vrautism,
    source_code_link:
      "https://github.com/esgoet/VR-autism-pov-in-psychiatry_openXR",
    filtered: false,
  },
  {
    name: "Interactive 3D Portfolio",
    description:
      "Web portfolio that enables users to interact with a 3D environment.",
    tags: [
      {
        name: "React",
        type: "library",
      },
      {
        name: "threejs",
        type: "library",
      },
      {
        name: "tailwindcss",
        type: "library",
      },
      {
        name: "Blender",
        type: "software",
      },
      {
        name: "git",
        type: "language",
      },
      {
        name: "JavaScript",
        type: "language",
      },
      {
        name: "CSS",
        type: "language",
      },
      {
        name: "HTML5",
        type: "language",
      },
      {
        name: "Web",
        type: "platform",
      },
      {
        name: "Mobile",
        type: "device",
      },
      {
        name: "Desktop",
        type: "device",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/esgoet/esgoet.github.io",
    filtered: false,
  },
  {
    name: "Interactive VR Web Application",
    description:
      "Web application built with Three.JS with which users can experience a 3D scene in VR given the appropriate hardware.",
    tags: [
      {
        name: "VR",
        type: "device",
      },
      {
        name: "threejs",
        type: "library",
      },
      {
        name: "Web",
        type: "platform",
      },
      {
        name: "Blender",
        type: "software",
      },
      {
        name: "JavaScript",
        type: "language",
      },
      {
        name: "CSS",
        type: "language",
      },
      {
        name: "HTML5",
        type: "language",
      },
    ],
    image: webvr,
    source_code_link: "https://github.com/esgoet/threejs-vr-app",
    filtered: false,
  },
  {
    name: "Bearopedia",
    description:
      "A mobile encyclopedic application that enables the user to explore facts about different bear species and favourite or edit their favourite species",
    tags: [
      {
        name: "iOS",
        type: "platform",
      },
      {
        name: "XCode",
        type: "software",
      },
      {
        name: "Swift",
        type: "language",
      },
      {
        name: "CoreData",
        type: "library",
      },
      {
        name: "Mobile",
        type: "device",
      },
      {
        name: "xml",
        type: "language",
      },
    ],
    image: bearopedia,
    source_code_link: "https://github.com/esgoet/bearopedia",
    filtered: false,
  },
  {
    name: "Turtle Fractal Generator",
    description:
      "A simple desktop python application with which various fractals can be drawn based on user settings",
    tags: [
      {
        name: "Python",
        type: "language",
      },
      {
        name: "Tkinter",
        type: "library",
      },
      {
        name: "Desktop",
        type: "device",
      },
    ],
    image: turtlefractalgenerator,
    source_code_link: "https://github.com/esgoet/turtle-fractal-generator",
    filtered: false,
  },
];

export { technologies, experiences, projects, education };
