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
          <CardTitle>
            Hi, 👋 I'm <span className='text-[#D7721D]'>Buğrahan</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </div>
      <div>
        <Image src={mryunt} alt='mryunt-photo' />
      </div>
    </Card>
  );
};

export default AboutMe;
