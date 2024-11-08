"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
        className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        <Card className="w-full bg-card text-card-foreground">
          <CardHeader>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
              <FaLightbulb className="mr-2" /> About Me
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm sm:text-base text-foreground space-y-4">
            <p>
              👋 Hello there! I&apos;m Riazul Islam, a Full Stack Web Developer passionate about creating impactful digital experiences. With a strong foundation in development, I am currently diving into the world of machine learning and artificial intelligence to further expand my skill set.
            </p>
            <p>
              <FaCode className="inline-block mr-2" /> My journey as a developer has been a continuous learning adventure, from mastering full stack technologies to exploring the latest advancements in AI. I’m excited by the potential of integrating AI with web applications to push the boundaries of what’s possible in the digital realm.
            </p>
            <p>
              When I’m not coding or experimenting with AI, you can find me:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><FaPizzaSlice className="inline-block mr-2" /> Perfecting the art of pizza-making</li>
              <li><FaHiking className="inline-block mr-2" /> Exploring new hiking trails and embracing the adventure (even if it means getting a little lost!)</li>
              <li><FaPuzzlePiece className="inline-block mr-2" /> Solving challenging puzzles that make my mind stretch</li>
            </ul>
            <p>
              I believe in lifelong learning and self-improvement, always eager to enhance my skills and apply them to bring creative visions to life. There’s a unique thrill in using technology to build solutions that simplify and enhance everyday life, and I’m always ready to tackle the next challenge.
            </p>
          </CardContent>
        </Card>
      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[350px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
