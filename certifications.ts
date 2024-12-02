import { StaticImageData } from 'next/image';
import jotformicon from './icons/jotform-icon.png';
interface certificates {
  logo: StaticImageData;
  title: string;
  company: string;
  date: string;
  credentialURL: string;
  skills: string[] | null;
}
export const certificates: certificates[] = [
  {
    logo: jotformicon,
    title: 'AI for Fullstack Developers | Skill:Up',
    company: 'Jotform',
    date: 'Dec 2024',
    credentialURL: 'https://learn.re-coded.com/certificates/kkxxmfmd4h',
    skills: null,
  },
];
