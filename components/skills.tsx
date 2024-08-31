import React from 'react';
import { Card, CardHeader } from './ui/card';
import Image from 'next/image';

import { skillIcons } from '@/skill-icons';

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
