import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // khabeer,
  stpeterlib,
  stpeterapp,
  ecommapi,
  twitter,
  threejs,
  instaTech,
  django,
  aws,
  rest,
  python,
  sql,
  avatar,
  khabeer,
  github,
  linkedin,
  email,
  finconsulting,
  myfatoorah,
  smartserve,
  elmohandes,
  asp_net,
  express,
  acies_co,
  _77s,
  next,
  cpp,
} from "../assets";
import ecomm from "../assets/tech/ecomm.jpeg";
import socialapp from "../assets/tech/social.jpeg";
import gym from "../assets/gym.jpg";
import eco from "../assets/tech/eco.jpg"
export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
//////// live_link
const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: next,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },

  {
    name: "Redux",
    icon: redux,
  },

  {
    name: "Git",
    icon: git,
  },

  {
    name: "C++",
    icon: cpp,
  },
];

const experiences = [
  {
    title: "frontend developer",
    company_name: "self projects ",
    icon: instaTech,
    iconBg: "#E6DEDD",
    date: "jun 2023 - Present",
    points: [
      "Built and deployed multiple front-end projects using TypeScript, React, Tailwind CSS, and Redux. Developed fully responsive e-commerce applications with clean UI, state management, and API integration. Focused on performance, accessibility, and scalability",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ecommerce project",
    description:
      "An advanced search engine project focused on filtering and exploring products. I built the front-end using TypeScript and implemented efficient data fetching with React Query. For state management, I used Redux Toolkit to handle complex UI interactions. The application features a powerful filtering engine that allows users to refine products dynamically based on multiple criteria",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "React-Query", color: "pink-text-gradient" },
      { name: "tailwand", color: "blue-text-gradient" },
      { name: "redux", color: "green-text-gradient" },
      { name: "Responsive_Design", color: "pink-text-gradient" },
      { name: "react router dom", color: "pink-text-gradient" },
    ],
    image: ecomm,
    source_code_link:
      "https://github.com/Omarkevin/Ecommerce-Typescript-redux-reactQuery-tailwand",
  },
  {
    name: "social app ",
    description:
      "A fully responsive social media app with dark mode support, built using Redux Toolkit for state management and styled with Tailwind CSS. Users can create posts, leave comments, and engage with content in a clean, intuitive UI. The app delivers a seamless experience across devices and focuses on smooth user interactions and dynamic content handling",

    tags: [
      { name: "ReactJS", color: "green-text-gradient" },
      { name: "tailwand", color: "blue-text-gradient" },
      { name: "dbjson", color: "pink-text-gradient" },
      { name: "react-query", color: "green-text-gradient" },
      { name: "axios", color: "blue-text-gradient" },
      { name: "redux toolkit", color: "blue-text-gradient" },
      { name: "react router dom", color: "pink-text-gradient" },
      { name: "darkmood", color: "text-white" },
    ],
    image: socialapp,
    source_code_link:
      "https://github.com/Omarkevin/-social-project-reactjs-tailwind-redux-query",
  },
  {
    name: "gym ",
    description:
      "The project is a modern gym web app built using React and TypeScript. It features a clean and responsive UI styled with Tailwind CSS and smooth animations using Framer Motion. I implemented user input handling and validation with React Hook Form, ensuring a seamless and interactive experience. The app is designed to be both functional and visually engaging across all devices.",
    tags: [
      {
        name: "reactjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "react-router-dom",
        color: "pink-text-gradient",
      },
       {
        name: "usemediaquery",
        color: "pink-text-gradient",
      },
    ],
    image: gym,
    source_code_link:
      "https://github.com/Omarkevin/gymproject-reactjs-typescript",
  },
  {
    name: "ecommerce",
    description:"A responsive dashboard built for a German accounting company, developed using HTML, CSS, and vanilla JavaScript. I used Axios to fetch and display dynamic product and user data from the backend API. The interface includes features like user management, admin control, and real-time chat sections. I closely collaborated with the backend team to bring the Figma UI/UX design to life with clean structure and interactive behavior.",
    tags: [
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "db-json",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "pink-text-gradient",
      },
      
    ],

    image: eco,
  },
  
];

const contacts = [
  {
    type: "email",
    icon: email,
    content: "omarmoustafa840@gmail.com",
  },
  {
    type: "linkedin",
    icon: linkedin,
    content: "https://github.com/Omarkevin",
  },
  {
    type: "github",
    icon: github,
    content: "https://github.com/Omarkevin",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  contacts,
};
