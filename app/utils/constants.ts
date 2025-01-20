import { IProject } from "../Components/FeaturedProducts";
import { Language } from "../types";

export const LanguageColors: Record<Language, string> = {
  [Language.TYPESCRIPT]: "blue",
  [Language.JAVASCRIPT]: "yellow",
};

export const mockProjects: IProject[] = [
  {
    id: "1",
    name: "TypeScript Starter",
    desc: "A boilerplate project to kickstart development with TypeScript, including linting and testing setups.",
    majorLanguage: Language.TYPESCRIPT,
    projectLink: "https://github.com/example/typescript-starter",
    liveLink: "https://typescript-starter.example.com",
  },
  {
    id: "2",
    name: "JavaScript Game Engine",
    desc: "A 2D game engine built with vanilla JavaScript, supporting animations, physics, and basic AI.",
    majorLanguage: Language.JAVASCRIPT,
    projectLink: "https://github.com/example/javascript-game-engine",
    liveLink: "https://js-game-engine.example.com",
  },
  {
    id: "3",
    name: "TypeScript E-Commerce",
    desc: "An e-commerce application with cart functionality, built with React and TypeScript.",
    majorLanguage: Language.TYPESCRIPT,
    projectLink: "https://github.com/example/typescript-ecommerce",
    liveLink: "https://typescript-ecommerce.example.com",
  },
  {
    id: "4",
    name: "JavaScript Weather App",
    desc: "A weather forecasting app using the OpenWeatherMap API, built with vanilla JavaScript and Bootstrap.",
    majorLanguage: Language.JAVASCRIPT,
    projectLink: "https://github.com/example/javascript-weather-app",
    liveLink: "https://js-weather-app.example.com",
  },
  {
    id: "5",
    name: "TypeScript Blog Platform",
    desc: "A blogging platform with markdown support, built using Next.js and TypeScript.",
    majorLanguage: Language.TYPESCRIPT,
    projectLink: "https://github.com/example/typescript-blog-platform",
    liveLink: "https://typescript-blog.example.com",
  },
  {
    id: "6",
    name: "JavaScript Portfolio",
    desc: "A personal portfolio showcasing projects, built with HTML, CSS, and JavaScript.",
    majorLanguage: Language.JAVASCRIPT,
    projectLink: "https://github.com/example/javascript-portfolio",
    liveLink: "https://js-portfolio.example.com",
  },
];
