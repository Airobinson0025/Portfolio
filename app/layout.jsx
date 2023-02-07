import Link from 'next/link'
import Intro from './Intro'
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='bg-white text-black text-lg font-bold flex flex-row justify-between items-center p-6 max-w-7xl mx-auto'>
          <div>
            <p className='font-homemade text-3xl'>Aaron Robinson</p>
          </div>
          <div className='flex flex-row space-x-6 items-center'>
            <Link className='hover:text-red-500 transition duration-200' href="/About">About</Link>
            <Link className='hover:text-red-500 transition duration-200' href="/Skills">Skills</Link>
            <Link className='hover:text-red-500 transition duration-200' href="/Projects">Projects</Link>
            <Link className='hover:text-red-500 transition duration-200' href="/Contact">Contact</Link>
            <button className='bg-transparent hover:bg-black hover:text-white font-bold py-2 px-4 border border-black hover:border-transparent rounded transition duration-300'>Resume.pdf</button>
          </div> 
        </div>
        <Intro />
        <div>{children}</div>
        </body>
    </html>
  )
}
