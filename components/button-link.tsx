import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from './ui/card';
import AboutMe from './about-me';
import MySkills from './my-skills';
import MyProjects from './my-projects';

export function TabsDemo() {
  return (
    <Tabs defaultValue='account'>
      <TabsList className='grid  sm:w-[400px] grid-cols-1 '>
        <TabsTrigger value='account'>About Me</TabsTrigger>
      </TabsList>
      <TabsContent
        value='account'
        className='absolute left-0 right-0 px-2 sm:px-5'
      >
        <AboutMe />
        <MySkills />
        <MyProjects />
      </TabsContent>
    </Tabs>
  );
}
