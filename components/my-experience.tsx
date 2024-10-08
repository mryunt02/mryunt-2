import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';

import { experience } from '@/experience';
import Image from 'next/image';
import { Badge } from './ui/badge';

const MyExperience = () => {
  return (
    <Card className='my-3'>
      <CardHeader className=' pl-4 pt-4 pb-0 sm:pl-8 sm:pt-8 sm:pb-8'>
        <h1 className=' text-lg sm:text-4xl  pt-3 sm:static sm:pt-0 text-[#D7721D] mb-4 sm:mb-0'>
          Experience
        </h1>
      </CardHeader>
      <CardContent className='gap-5 px-4 sm:px-8'>
        {experience.map((exp) => (
          <>
            <div key={exp.title} className='flex gap-1'>
              <Image
                src={exp.logo}
                alt='company-icon'
                width={50}
                height={50}
                className='h-[50px]'
              />
              <div className='flex flex-col min-w-[200px]'>
                <h2 className='font-semibold mb-1'>{exp.title}</h2>
                <p className='text-sm'>{exp.company}</p>
                <p className='text-sm text-[#A9A9A9]'>{exp.date}</p>
              </div>
            </div>
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default MyExperience;
