import React from 'react';
import { Avatar } from './ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { TabsDemo } from './button-link';

interface Icon {
  src: JSX.Element;
  link: string;
}

const icons: Icon[] = [
  { src: <Github />, link: 'https://github.com/mryunt02' },
  {
    src: <Linkedin />,
    link: 'https://www.linkedin.com/in/byunt/',
  },
];

const Header: React.FC = () => {
  return (
    <header className='max-w-[1200px] m-auto sm:sticky sm:top-0'>
      <div className='px-2 pt-3 sm:p-5 flex justify-between gap-2'>
        <div className='h-fit'>
          <Avatar>
            <AvatarImage src='https://avatars.githubusercontent.com/u/90159617?s=400&u=9c1578f9d8a06447aa302e41a43e21ff78a2b53e&v=4' />
            <AvatarFallback>BY</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <TabsDemo />
        </div>
        <div className='flex items-center gap-2 h-fit'>
          {icons.map((icon) => (
            <li key={icon.link} className='list-none hidden sm:block'>
              <Link href={icon.link} target='_blank'>
                {icon.src}
              </Link>
            </li>
          ))}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
