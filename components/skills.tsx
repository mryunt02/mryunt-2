import React from 'react';
import { Card, CardHeader } from './ui/card';
import Image from 'next/image';

import { skillIcons } from '@/skill-icons';

const Skills = () => {
  return (
    <>
      {skillIcons.map((icon) => (
        <Card
          key={icon.alt}
          className='p-5 flex flex-col items-center justify-center gap-5'
        >
          <div className='h-[100px] flex'>
            <Image src={icon.src} alt={icon.alt} width={100} height={100} />
          </div>
          <h3>React</h3>
        </Card>
      ))}
    </>
  );
};

export default Skills;
