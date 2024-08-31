/* eslint-disable react/no-unescaped-entities */
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
import { Book, Download, Ghost, LocateIcon, Mail, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import Link from 'next/link';

const AboutMe = () => {
  return (
    <Card className='flex justify-between flex-col-reverse sm:flex-row'>
      <div>
        <CardHeader className=' pl-4 pt-4 pb-0 sm:pl-8 sm:pt-8 sm:pb-8'>
          <h1 className=' text-lg sm:text-4xl absolute top-0 pt-3 sm:static sm:pt-0'>
            Hi, 👋 I'm <span className='text-[#D7721D]'>Buğrahan</span>
            <i className=' text-xs sm:text-sm block text-[#a9a9a9]'>
              {' '}
              Front-end Developer
            </i>
          </h1>
        </CardHeader>
        <CardContent className=' pl-4 sm:px-8 pb-8 flex flex-col gap-2'>
          <h2 className='max-w-[500px] text-sm sm:text-base'>
            Software engineer focused on developing and maintaining scalable and
            reliable front-end systems.
          </h2>
          <div className='flex gap-1 items-center text-sm sm:text-base'>
            <MapPin width={20} />
            <p>Sivas, Turkey</p>
          </div>
          <div className='flex gap-1 items-center text-sm sm:text-base'>
            <Book width={20} />
            <p>Sivas Cumhuriyet Üniversitesi, Computer Engineering</p>
          </div>
        </CardContent>
        <CardFooter className='sm:pl-8 px-8 flex flex-col items-start gap-2 pl-3 text-sm sm:text-base sm:mt-4'>
          <div>
            <Button asChild className='bg-[#D7721D] hover:bg-[#dc8944]'>
              <Link href='mailto:yuntbugrahan@gmail.com '>
                <Mail className='mr-2 h-4 w-4' /> Reach Me
              </Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link href={'mailto: yuntbugrahan@gmail.com'}>
                <Download className='mr-2 h-4 w-4' /> Download CV
              </Link>
            </Button>
          </div>
        </CardFooter>
      </div>
      <div className='py-8 p-8 pb-0 sm:pb-8 m-auto  sm:w-auto'>
        <Image
          src={mryunt}
          alt='mryunt-photo'
          className='pointer-events-none'
        />
      </div>
    </Card>
  );
};

export default AboutMe;
