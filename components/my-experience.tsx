import React from 'react';
import { Card, CardContent, CardHeader } from './ui/card';

const MyExperience = () => {
  return (
    <Card className='my-3'>
      <CardHeader className=' pl-4 pt-4 pb-0 sm:pl-8 sm:pt-8 sm:pb-8'>
        <h1 className=' text-lg sm:text-4xl  pt-3 sm:static sm:pt-0 text-[#D7721D] mb-4 sm:mb-0'>
          Experience
        </h1>
      </CardHeader>
      <CardContent className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 px-4 sm:px-8'>
        qwxeqwexqwe
      </CardContent>
    </Card>
  );
};

export default MyExperience;
