import Link from 'next/link'
import Image from 'next/image'
import logo from 'src/mylogo.png'
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
        <div className='bg-white text-black font-bold flex flex-row justify-between items-center p-6'>
          <div>
            <Image src={logo} alt="Logo for portfolio" width={100} height={100}></Image>
          </div>
          <div className='flex flex-row space-x-4 items-center'>
            <Link className='hover:text-red-500' href="/About">About</Link>
            <Link className='hover:text-red-500' href="/Skills">Skills</Link>
            <Link className='hover:text-red-500' href="/Projects">Projects</Link>
            <Link className='hover:text-red-500' href="/Contact">Contact</Link>
            <button className='bg-transparent hover:bg-black text-white-700 font-semibold hover:text-white py-2 px-4 border border-black hover:border-transparent rounded'>Resume.pdf</button>
          </div> 
        </div>
        <div>{children}</div>
        </body>
    </html>
  )
}
