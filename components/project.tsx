import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import mryunt from '../icons/mryunt.png';
import weatherappimg from '../icons/weatherapp.png';

export function Project() {
  return (
    <>
      <Card className='p-5 flex flex-col gap-3'>
        <Image src={weatherappimg} alt='weather-app' />
        <h2 className='text-xl'>Weather App</h2>
        <p>
          I built a React-based Weather App that delivers real-time weather
          updates for cities across Turkey. The app features a simple,
          user-friendly interface and integrates with APIs to provide accurate
          forecasts.
        </p>
        <p>Used Tools: </p>
      </Card>
    </>
  );
}
export default Project;
