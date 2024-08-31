import React from 'react';
import { Avatar } from './ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { ModeToggle } from './mode-toggle';
import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';
import { TabsDemo } from './button-link';
const icons = [
  { src: <Github />, link: 'https://github.com/mryunt02' },
  {
    src: <Linkedin />,
    link: 'https://www.linkedin.com/in/byunt/',
  },
];
const Header = () => {
  return (
    <header className='max-w-[1200px] m-auto sm:sticky sm:top-0 bg-background'>
      <div className='px-2 pt-3 sm:p-5 flex justify-between gap-2 '>
        <div className='h-fit'>
          <Avatar>
            <AvatarImage src='https://avatars.githubusercontent.com/u/90159617?s=400&u=7a4fbc54e4e78df0b7998762608a444936992c1a&v=4' />
            <AvatarFallback>BY</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <TabsDemo />
        </div>
        <div className='flex items-center gap-2 h-fit'>
          {icons.map((icon) => {
            return (
              <li key={icon.link} className='list-none hidden sm:block'>
                <Link href={icon.link} target='_blank'>
                  {icon.src}
                </Link>
              </li>
            );
          })}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
