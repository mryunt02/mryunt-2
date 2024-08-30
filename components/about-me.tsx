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
import { Book, LocateIcon, MapPin } from 'lucide-react';

const AboutMe = () => {
  return (
    <Card className='flex justify-between flex-col-reverse sm:flex-row'>
      <div>
        <CardHeader className=' pl-4 pt-4 pb-0 sm:pl-8 sm:pt-8 sm:pb-4'>
          <h1 className=' text-lg sm:text-4xl absolute top-0 pt-3 sm:static sm:pt-0'>
            Hi, 👋 I'm <span className='text-[#D7721D]'>Buğrahan</span>
            <i className=' text-xs sm:text-sm block text-[#a9a9a9]'>
              {' '}
              Front-end Developer
            </i>
          </h1>
        </CardHeader>
        <CardContent className=' pl-4 sm:px-8 pb-4'>
          <h2 className='max-w-[500px] text-sm sm:text-base'>
            Software engineer focused on developing and maintaining scalable and
            reliable front-end systems.
          </h2>
        </CardContent>
        <CardFooter className='sm:pl-8 px-8 flex flex-col items-start gap-2 pl-3 text-sm sm:text-base'>
          <div className='flex gap-1 items-center'>
            <MapPin width={20} />
            <p>Sivas, Turkey</p>
          </div>
          <div className='flex gap-1 items-center'>
            <Book width={20} />
            <p>Sivas Cumhuriyet Üniversitesi, Computer Engineering</p>
          </div>
        </CardFooter>
      </div>
      <div className='py-8 p-8 pb-0 sm:pb-8 m-auto w-[350px] sm:w-auto'>
        <Image src={mryunt} alt='mryunt-photo' />
      </div>
    </Card>
  );
};

export default AboutMe;
