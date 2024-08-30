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
        <CardHeader className=' pl-4 pt-4  sm:pl-8 sm:pt-8'>
          <h1 className=' text-lg sm:text-4xl'>
            Hi, 👋 I'm <span className='text-[#D7721D]'>Buğrahan</span>
            <i className=' text-xs sm:text-sm block'> Front-end Developer</i>
          </h1>
        </CardHeader>
        <CardContent className=' pl-4 sm:px-8'>
          <p>Card Content</p>
        </CardContent>
        <CardFooter className='pl-4 px-8'>
          <p>Card Footer</p>
        </CardFooter>
      </div>
      <div className='py-8 pr-8 absolute max-w-[200px] right-0 top-[-23px] sm:static sm:max-w-[1000px]'>
        <Image src={mryunt} alt='mryunt-photo' />
      </div>
    </Card>
  );
};

export default AboutMe;
