import './globals.css'
import { BsMoonStarsFill } from 'react-icons/bs'

export default function RootLayout({ children }) {
  return (

   
    
    <html lang="en" className='scroll-smooth'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <div className='bg-white text-black  md:text-xl  font-bold flex justify-evenly items-center p-6'>
          <div>
            <p className='font-homemade md:text-xl lg:text-3xl'>Aaron Robinson</p>
          </div>
          <div className='hover:cursor-pointer'>
            <BsMoonStarsFill size={30}/>
          </div>
          <div className='flex flex-row  items-center'>
            <a href='Resume.pdf' download>
              <button className='bg-transparent hover:bg-red-500 hover:text-white font-bold py-2 px-4 border border-black hover:border-transparent rounded transition duration-300'>Resume.pdf</button>
            </a>
          </div> 
        </div>
        
        <div>{children}</div>
        </body>
    </html>
  )
}
