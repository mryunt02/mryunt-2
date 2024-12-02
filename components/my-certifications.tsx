// components/my-certifications.tsx
import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';
import { certificates } from '@/certifications';
import Image from 'next/image';
import { Badge } from './ui/badge';

const MyCertifications = () => {
  return (
    <Card className='my-3'>
      <CardHeader className='pl-4 pt-4 pb-0 sm:pl-8 sm:pt-8 sm:pb-8'>
        <h1 className='text-lg sm:text-4xl pt-3 sm:static sm:pt-0 text-[#D7721D] mb-4 sm:mb-0'>
          Licenses & certifications
        </h1>
      </CardHeader>
      <CardContent className='gap-5 px-4 sm:px-8'>
        {certificates.map((exp) => (
          <div key={exp.title} className='flex gap-2 items-start border-b py-4'>
            <Image
              src={exp.logo}
              alt='company-icon'
              width={50}
              height={50}
              className='h-[50px] rounded-lg' // Updated hover effect
            />
            <div className='flex flex-col min-w-[200px]'>
              <h2 className='font-semibold mb-1'>{exp.title}</h2>
              <p className='text-sm'>{exp.company}</p>
              <p className='text-sm text-[#A9A9A9]'>Issued {exp.date}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default MyCertifications;
