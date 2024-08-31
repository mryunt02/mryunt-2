import React from 'react';
import { Card, CardHeader } from './ui/card';
import { reacticon } from '../icons/react-original-wordmark.svg';
import Image from 'next/image';

const skillIcons = [
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    alt: 'react-icon',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    alt: 'js-icon',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg',
    alt: 'ts-icon',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg',
    alt: 'php-icon',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    alt: 'java-icon',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    alt: 'css-icon',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    alt: 'html-icon',
  },
  {
    src: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg',
    alt: 'sass-icon',
  },
];

const Skills = () => {
  return (
    <div>
      {skillIcons.map((icon) => (
        <Card key={icon.alt}>
          <Image src={icon.src} alt={icon.alt} width={24} height={24} />
        </Card>
      ))}
    </div>
  );
};

export default Skills;
