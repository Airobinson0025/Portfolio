'use client';
import React from 'react'
import { useTypewriter } from 'react-simple-typewriter';


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
    <div className='flex flex-col items-center'>
        <h1>IMAGE</h1>
        <p className='font-black font-garamond text-red-500 sm:text-md md:text-lg lg:text-xl tracking-[8px]'>FULL-STACK DEVELOPER</p>
        <p className='font-garamond sm:text-2xl md:text-3xl lg:text-4xl p-5'>{text}</p>
        
    </div>
   
  )
}

export default Hero;