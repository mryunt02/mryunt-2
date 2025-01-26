import { StaticImageData } from 'next/image';
import jotformicon from './icons/jotform-icon.png';
import filllabsicon from './icons/fill_labs_logo.jpeg';
interface Experience {
  logo: StaticImageData;
  url: string;
  title: string;
  company: string;
  date: string;
  skills: string[];
}
export const experience: Experience[] = [
  {
    logo: filllabsicon,
    url: 'https://www.fill-labs.com/',
    title: 'Full-Stack Developer',
    company: 'Fill-Labs',
    date: 'Jan 2025 - Present',
    skills: ['React.js', 'Next.js', 'TypeScript', 'Go'],
  },
  {
    logo: jotformicon,
    url: 'https://www.jotform.com/',
    title: 'UI Developer Intern',
    company: 'Jotform',
    date: 'Jun 2024 - Aug 2024',
    skills: ['React.js', 'Redux', 'Accessible HTML', 'CSS'],
  },
];
