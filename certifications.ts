import { StaticImageData } from 'next/image';
import recodedIcon from 'icons/re_coded_logo.jpeg';
import scrimbaLogo from 'icons/scrimba_logo.jpeg';
import freecodecamplogo from 'icons/free_code_camp_logo.jpeg';
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
    logo: recodedIcon,
    title: 'AI for Fullstack Developers | Skill:Up',
    company: 'Re:Coded',
    date: 'Dec 2024',
    credentialURL: 'https://learn.re-coded.com/certificates/kkxxmfmd4h',
    skills: null,
  },
  {
    logo: scrimbaLogo,
    title: 'TypeScript',
    company: 'Scrimba',
    date: 'Dec 2024',
    credentialURL: 'https://scrimba.com/certificates/cert-4b4b4b4b',
    skills: ['TypeScript'],
  },
  {
    logo: scrimbaLogo,
    title: 'Advanced React',
    company: 'Scrimba',
    date: 'Dec 2024',
    credentialURL: '',
    skills: ['React'],
  },
  {
    logo: freecodecamplogo,
    title: 'JavaScript Algorithms and Data Structures',
    company: 'freeCodeCamp',
    date: 'Feb 2024',
    credentialURL: '',
    skills: ['JavaScript'],
  },
];
