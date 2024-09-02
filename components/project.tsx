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
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Project() {
  return (
    <>
      {projects.map((project) => (
        <Card className='p-5 flex flex-col gap-3' key={project.name}>
          <Image src={weatherappimg} alt='weather-app' />
          <h2 className='text-xl flex items-center justify-between'>
            {project.name}{' '}
            <Link href='https://mryunt02.github.io/weatherapp' target='blank'>
              <ExternalLink />
            </Link>
          </h2>
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
