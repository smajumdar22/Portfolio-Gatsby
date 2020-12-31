import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Shubham Majumdar | Developer', 
  lang: 'en', 
  description: 'Welcome to my website',
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/1s2tWSh6bBOk3I4EjR4LyDz-AL3Y0bbXVtDLNXQWAvkw/edit', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Redux Shopping Cart',
    info: 'Redux Shopping Cart',
    info2: '',
    url: '',
    repo: 'https://github.com/Shubham-401n16/ShoppingCart-CombinedReducers/tree/dev', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Authentication',
    info: 'Authentication',
    info2: '',
    url: '',
    repo: 'https://github.com/Shubham-401n16/Lab10-Authentication/tree/lab14dev', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Express Routing',
    info: 'Express Routing',
    info2: '',
    url: '',
    repo: 'https://github.com/Shubham-401n16/Lab08--Express-Routing-And-Connected-API/tree/Dev', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/ShubhamMajumd13',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/smajumdar22',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'www.linkedin.com/in/majumdar-shubham',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/smajumdar22',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
