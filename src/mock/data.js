import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Fede A. | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello',
  name: 'I am Federico',
  subtitle: 'Web Developer',
  cta: 'know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: "I'm a web developer with an art & design background.",
  paragraphTwo: 'In other words, an Architect turned into a programmer.',
  paragraphThree: 'Specialized in Full-Stack React.js | Node.js ',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'far.png',
    title: 'FaceRecognition',
    info: 'Insert an image URL and the API will recognize faces in the image',
    info2: 'React.js|Node.js|PSQL',
    url: 'https://smartfar.herokuapp.com/',
    repo: 'https://github.com/FedericoAcostaDev/FaceAppRecognition', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'MOM.jpg',
    title: 'Mix-Or-Match',
    info: 'A matching game',
    info2: 'HTML|CSS|JavaScript',
    url: 'https://boring-northcutt-06aca7.netlify.app/',
    repo: 'https://github.com/FedericoAcostaDev/MATCHINGGAME', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'RoboFriend',
    info: 'A search engine to find your BRF (Best RoboFriend)',
    info2: 'React.js|Node.js',
    url: 'https://robofa.herokuapp.com/',
    repo: 'https://github.com/FedericoAcostaDev/RoboFriends', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'fedeacos045@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/fede-acosta-b11a22211/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/FedericoAcostaDev',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
