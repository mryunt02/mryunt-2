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
import { Badge } from './ui/badge';
import { projects } from '@/projects';

export function Project() {
  return (
    <>
      {projects.map((project) => (
        <Card className='p-5 flex flex-col gap-3' key={project.name}>
          <Image src={weatherappimg} alt='weather-app' />
          <h2 className='text-xl'>{project.name}</h2>
          <p>{project.description}</p>
          <div className='flex gap-2'>
            <p>Used Tools: </p>
            <div className='flex gap-1'>
              {project.tools.map((tool) => (
                <Badge key={tool}>{tool}</Badge>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </>
  );
}
export default Project;
