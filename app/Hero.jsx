'use client';
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';

const Hero = () => {
    const [text, count] = useTypewriter({
        words:[
            "< Hello There />",
            "< My name is Aaron Robinson />",
            "< Thank you for taking a look />",
        ],
        loop:true,
        delaySpeed: 1500,
    });
  return (
    <div className='flex flex-col items-center'>
        <h1>IMAGE</h1>
        <p className=''>FULL STACK DEVELOPER</p>
        <p className='font-semibold sm:text-2xl md:text-3xl lg:text-4xl p-5'>{text}</p>
        <div className='flex flex-row space-x-4'>
            <SocialIcon url='https://www.linkedin.com/in/aaron-robinson-b3949425b/' bgColor='black' />
            <SocialIcon url='https://github.com/Airobinson0025?tab=repositories' bgColor='black' />
        </div>
    </div>
   
  )
}

export default Hero;