'use client';
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';
import { SocialIcon } from 'react-social-icons';


const Hero = () => {
  
  const [text, count] = useTypewriter({
        words:[
            "Hello There.",
            "My name is Aaron Robinson.",
            "Thank you for taking a look.",
        ],
        loop:true,
        delaySpeed: 2000,
    });
  return (
    <div className='flex flex-col items-center pt-24'>
        <h1>IMAGE</h1>
        <p className='font-bold text-red-500 sm:text-2xl md:text-3xl tracking-[8px]'>FULL-STACK ENGINEER</p>
        <p className='font-garamond font-extralight sm:text-2xl md:text-3xl p-10'>{text}</p>
        <div className='space-x-5'>
          <SocialIcon className='transition duration-300 hover:-translate-y-1 hover:scale-110' url="https://github.com/Airobinson0025?tab=repositories" target='_blank' bgColor='#F75D59'/>
          <SocialIcon className='transition duration-300 hover:-translate-y-1 hover:scale-110' url="https://www.linkedin.com/in/aaron-robinson-b3949425b/" target='_blank' bgColor='#F75D59'/>
        </div>
    </div>
   
  )
}

export default Hero;