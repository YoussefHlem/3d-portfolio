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
    name: "HRM & PFP SaaS Dashboard",
    description:
      "Built a multi-tenant SaaS admin dashboard using Next.js 16, React 19, and TypeScript. Developed a powerful data table system with advanced filtering, sorting, and export features, including a SQL-like query builder.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "SaaS", color: "green-text-gradient" },
      { name: "Data Tables", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/YoussefHlem",
  },
  {
    name: "GIS Incident Management Platform",
    description:
      "Developed a spatial data visualization platform integrating ArcGIS and Leaflet. Implemented real-time map interactions with synchronized table selection and scalable incident management across multiple service modules.",
    tags: [
      { name: "ArcGIS", color: "blue-text-gradient" },
      { name: "Leaflet", color: "green-text-gradient" },
      { name: "Geospatial", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/YoussefHlem",
  },
  {
    name: "RBAC & Custom Fields Platform",
    description:
      "Engineered an enterprise-grade access control system with role-based permissions, dynamic custom fields, and bulk data operations. Applied clean architecture principles with layered system design.",
    tags: [
      { name: "RBAC", color: "blue-text-gradient" },
      { name: "Access Control", color: "green-text-gradient" },
      { name: "Architecture", color: "pink-text-gradient" },
    ],
    source_code_link: "https://github.com/YoussefHlem",
  },
];

export { services, technologies, experiences, testimonials, projects };
