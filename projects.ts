import weatherappimage from './icons/weatherapp.png';
import portfolio from './icons/portfolio.png';
import rick from './icons/rick.png';
import personal from './icons/personal.png';
import sampleReact from './icons/sampleReact.png';
import boxSizing from './icons/box-sizing.png';
import { StaticImageData } from 'next/image';
interface Project {
  name: string;
  description: string;
  tools: string[];
  url: string;
  img: StaticImageData;
}
export const projects: Project[] = [
  {
    name: 'Portfolio Web Page',
    description:
      'I designed and developed a responsive portfolio website that resembles a MacBook screen. Built with React.js, the site showcases my projects, skills, and experiences with a clean, user-friendly design.',
    tools: ['React.js', 'JavasSript', 'CSS', 'HTML'],
    url: 'https://mryunt02.github.io/portfolio-v2/',
    img: portfolio,
  },
  {
    name: 'Rick and Morty',
    description:
      'I developed a user-friendly app using the Rick and Morty API, allowing fans to explore detailed information about their favorite characters. The app features an intuitive design, ensuring a seamless and engaging user experience.',
    tools: ['Next.js', 'JavaSript', 'CSS', 'HTML'],
    url: 'https://mryunt02.github.io/rickandmorty/',
    img: rick,
  },
  {
    name: 'Aphelios.',
    description:
      'This is a React.js application focused on my favorite League of Legends character, Aphelios. The app showcases various abilities and lore of Aphelios, with an emphasis on interactive and engaging design.',
    tools: ['React.js', 'JavaScript', 'CSS', 'HTML'],
    url: 'https://mryunt02.github.io/sample-react-v2/',
    img: sampleReact,
  },
  {
    name: 'Personal Website',
    description:
      'I created a personal website using React.js to showcase information about myself, including my interests, skills, and background. The design is clean and responsive, reflecting my personal style.',
    tools: ['React.js', 'JavaScript', 'CSS', 'HTML'],
    url: 'https://mryunt02.github.io/personal/',
    img: personal,
  },
  {
    name: 'Weather App',
    description:
      'I built a React-based Weather App that delivers real-time weatherupdates for cities across Turkey. The app features a simple, user-friendly interface and integrates with APIs to provide accurate forecasts.',
    tools: ['React.js', 'JavasSript', 'CSS', 'HTML'],
    url: 'https://mryunt02.github.io/weatherapp',
    img: weatherappimage,
  },
  {
    name: 'Understand Box Sizing',
    description:
      'I built a JavaScript-based interactive tool that demonstrates the effects of box-sizing on layout. The tool allows users to apply padding, margins, and borders to visualize the differences between content-box and border-box in real time.',
    tools: ['JavaScript', 'CSS', 'HTML'],
    url: 'https://mryunt02.github.io/box-sizing/',
    img: boxSizing,
  },
];
