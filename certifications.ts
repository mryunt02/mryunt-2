import { StaticImageData } from 'next/image';
import jotformicon from './icons/jotform-icon.png';
interface Experience {
  logo: StaticImageData;
  title: string;
  company: string;
  date: string;
  skills: string[];
}
export const experience: Experience[] = [
  {
    logo: jotformicon,
    title: 'AI for Fullstack Developers | Skill:Up',
    company: 'Jotform',
    date: 'Jun 2024 - Aug 2024',
    skills: ['React.js', 'Redux', 'Accessible HTML', 'CSS'],
  },
];
