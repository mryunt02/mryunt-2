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
    <Card className='flex'>
      <div>
        <CardHeader>
          <h1 className=' text-lg sm:text-4xl'>
            Hi, 👋 I'm <span className='text-[#D7721D]'>Buğrahan</span>
          </h1>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </div>
      <div className='p-5'>
        <Image src={mryunt} alt='mryunt-photo' />
      </div>
    </Card>
  );
};

export default AboutMe;
