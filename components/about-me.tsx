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
    <div>
      <Card>
        <div>
          <CardHeader>
            <CardTitle>Buğrahan Yünt</CardTitle>
            <CardDescription>Card Description</CardDescription>
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
    </div>
  );
};

export default AboutMe;
