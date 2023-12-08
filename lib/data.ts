import onedsImg from "@/public/one-ds.png";
import VracomImg from "@/public/vra.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Vracommercials",
    description:
      "full-stack development of a project using HTML, CSS, JavaScript, and Php",
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "MySQL", "Php"],
    imageUrl: VracomImg,
    link: "https://vracommercials.co.uk",
  },
  {
    title: "one-ds",
    description:
      "full-stack development of a project using HTML, CSS, JavaScript, and Php in two languages.",
    tags: ["HTML", "CSS", "JavaScript", "JQuery", "MySQL", "Php"],
    imageUrl: onedsImg,
    link: "https://one-ds.de",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "Jquery",
  "TypeScript",
  "React",
  "Redux",
  "Mobx",
  "Vue",
  "Vuex",
  "Node.js",
  "Git",
  "Sql",
  "NoSql",
  "Express",
] as const;
