import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import mryunt from '../icons/mryunt.png';

const AboutMe = () => {
  return (
    <Card className='flex justify-between'>
      <div>
        <CardHeader className='px-8 pt-8'>
          <h1 className=' text-lg sm:text-4xl'>
            Hi, 👋 I'm <span className='text-[#D7721D]'>Buğrahan</span>
            <i className='text-sm block'> Front-end Developer</i>
          </h1>
        </CardHeader>
        <CardContent className='px-8'>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className='px-8'>
          <p>Card Footer</p>
        </CardFooter>
      </div>
      <div className='p-8'>
        <Image src={mryunt} alt='mryunt-photo' />
      </div>
    </Card>
  );
};

export default AboutMe;
