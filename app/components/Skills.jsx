import React from 'react'
import { SiJavascript } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { TbBrandNextjs } from 'react-icons/tb'

const Skills = () => {
  return (
    <div className='flex flex-col justify-center text-center pt-24'>
      <h1 className='text-red-500 sm:text-2xl md:text-3xl  font-bold tracking-[4px]'>SKILLS</h1>
      <div className='flex items-center justify-center space-x-6 pt-24'>
        <SiTailwindcss size={70 } color='#F75D59'/>
        <SiJavascript size={70} color='black'/>
        <FaHtml5 size={70} color='#F75D59'/>
        <FaNodeJs size={70} color='black'/>
        <SiPostgresql size={70} color='#F75D59'/>
        <FaReact size={70} color='black'/>
        <TbBrandNextjs size={70} color='#F75D59' />
      </div>
    </div>
  )
}

export default Skills