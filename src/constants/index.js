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
  carrent,
  jobit,
  tripguide,
  threejs,
  bitechLogo,
  muzeLogo,
  softigitalLogo,
} from "../assets";

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

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "GIS Integration",
    icon: backend,
  },
  {
    title: "SaaS Architect",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer - Frontend Specialist",
    company_name: "Bitech",
    icon: bitechLogo,
    iconBg: "#accbe1",
    date: "Jan 2025 - Present",
    points: [
      "Architected a multi-tenant SaaS admin dashboard from the ground up using Next.js, React 19, and TypeScript, serving HRM and PFP modules with full English/Arabic internationalization.",
      "Designed and built a reusable foundation layer including an advanced data table system with sorting, filtering, column pinning/reordering, bulk actions, and CSV/XLSX/PDF export.",
      "Integrated ArcGIS and Leaflet GIS capabilities for spatial data visualization, implementing bi-directional map-table row selection sync and interactive marker/popup systems.",
      "Implemented RBAC, dynamic custom fields injection, duplicate detection & merge workflows, and real-time data import pipelines across 15+ service modules following clean layered architecture.",
    ],
  },
  {
    title: "React.js & React Native Developer",
    company_name: "Muze",
    icon: muzeLogo,
    iconBg: "#b7e4c7",
    date: "Sep 2023 - Dec 2024",
    points: [
      "Contributed to enhancing a social media platform by developing and integrating a real-time messaging feature using WebSocket technology.",
      "Worked closely with senior developers to improve the platform's UI/UX design, focusing on creating intuitive user interfaces and seamless interactions.",
      "Built the Muze Mobile App using React Native, ensuring consistent functionality across iOS and Android platforms.",
      "Collaborated with backend teams to implement API integrations and gained hands-on experience with Redux for state management in complex applications.",
    ],
  },
  {
    title: "React.js & React Native Developer",
    company_name: "Softigital",
    icon: softigitalLogo,
    iconBg: "#fbc3bc",
    date: "Jun 2022 - Sep 2023",
    points: [
      "Developed and maintained e-commerce platforms and admin dashboards using React.js, focusing on responsive design and optimizing component performance.",
      "Built mobile applications with React Native, ensuring consistent user experiences across different devices and screen sizes.",
      "Worked collaboratively with cross-functional teams including designers, backend developers, and project managers to deliver projects successfully.",
      "Gained valuable experience with Git version control, Agile methodologies, and modern CSS frameworks while contributing to various client projects.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Youssef proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Youssef does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Youssef optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Muze",
    description:
      "Crafted a unique social media platform, Muze, tailored for musicians with features such as video posting, appointment booking, and real-time messaging via web sockets.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "webSockets",
        color: "green-text-gradient",
      },
      {
        name: "styledComponent",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://purple-river-08ce99210.4.azurestaticapps.net/",
  },
  {
    name: "Jobit Mobile Application",
    description:
      "Developed a comprehensive mobile application, Jobit, consolidating job opportunities from various platforms, including Upwork, Fiverr, Freelance, and LinkedIn, providing users with a unified hub for streamlined job searching.",
    tags: [
      {
        name: "reactNative",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/HlemoXGamer/jobit",
  },
  {
    name: "Medical Solution",
    description:
      "Designed the Medsol website for the sale and provision of medical solutions, offering a user-friendly platform to access essential resources from more than 15 companies.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://medsol.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
