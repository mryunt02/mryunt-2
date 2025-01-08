'use client';
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

import { Badge } from './ui/badge';
import { projects } from '@/projects';
import { ExternalLink } from 'lucide-react';
import Link from 'next/link';

export function Project() {
  return (
    <>
      {projects.map((project, index) => (
        <Card className='p-5 flex flex-col gap-3' key={project.name}>
          <div className='relative aspect-[16/9] w-full overflow-hidden rounded-lg'>
            <Link href={project.url}>
              <Image
                src={project.img}
                alt={`${project.name} project screenshot`}
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className='object-cover hover:scale-105 transition-transform duration-300 ease-in-out'
                loading={index === 0 ? 'eager' : 'lazy'}
                quality={100}
                placeholder='blur'
                blurDataURL={`data:image/svg+xml;base64,...`}
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </Link>
          </div>
          <h2 className='text-xl flex items-center justify-between'>
            {project.name}{' '}
            <Link href={project.url} target='_blank' rel='noopener noreferrer'>
              <ExternalLink />{' '}
              <span className='sr-only'>Visit {project.name}</span>
            </Link>
          </h2>
          <p className='min-h-[96px] sm:min-h-[144px]'>{project.description}</p>
          <div className='flex flex-col lg:flex-row gap-2'>
            <p>Used Tools: </p>
            <div className='flex flex-wrap gap-1'>
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
