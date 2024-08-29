import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card } from './ui/card';
import AboutMe from './about-me';

export function TabsDemo() {
  return (
    <Tabs defaultValue='account' className='w-[400px]'>
      <TabsList className='grid w-full grid-cols-3'>
        <TabsTrigger value='account'>About Me</TabsTrigger>
        <TabsTrigger value='projects'>Projects</TabsTrigger>
        <TabsTrigger value='experience'>Experience</TabsTrigger>
      </TabsList>
      <TabsContent value='account'>
        <AboutMe />
      </TabsContent>
      <TabsContent value='projects'>qwxewqxe</TabsContent>
      <TabsContent value='experince'>qwxewqxe</TabsContent>
    </Tabs>
  );
}
