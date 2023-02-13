import React from 'react'

const Contact = () => {
  return (
    <div className='p-24'>
      <h1 className='text-red-500 text-center sm:text-2xl md:text-3xl  font-bold tracking-[4px] pb-16 box-border'>CONTACT ME</h1>
      <div className='flex justify-center text-xl '>
      <div className='flex flex-col justify-evenly leading-8 pb-40 bg-red-500 text-black px-4  font-bold font-sans rounded-l-lg shadow-md shadow-slate-800'>
        <p className='text-3xl'>Contact Info:</p>
        <p>Phone: 304-335-5814</p>
        <p>Email: Airobinson0025@gmail.com</p>
        <p>Address: 1105 Winterlake Ct Apt.203 Midlothian, Va 23113</p>
      </div>
      <form className='font-sans flex flex-col pr-24 pl-4 py-4 shadow-md shadow-slate-800 rounded-r-lg'>
      <h2 className='font-bold font-sans md:text-3xl lg:text-4xl pb-4 '>Would love to hear from you.</h2>
        <label className='font-semibold'>Full Name</label>
        <input className='border-2 border-slate-400 rounded-md pr-36' type='text' name='name' />
        <label className='font-semibold'>Email</label>
        <input className='border-2 border-slate-400 rounded-md pr-36' type='email' name='email'/>
        <labe className='font-semibold'>Phone</labe>
        <input className='border-2 border-slate-400 rounded-md pr-36' type='tel' name='phone' />
        <label className='font-semibold'>Subject</label>
        <input className='border-2 border-slate-400 rounded-md pr-36' type='text' name='subject' />
        <label className='font-semibold'>Message</label>
        <textarea className='border-2 border-slate-400 rounded-md pr-36' name='message' />
        <div className='pt-4'>
        <button className='bg-black hover:bg-red-500 text-white font-bold py-2 px-8 transiton duration-300 hover:-translate-y-1 hover:scale-80 rounded-lg'>Send</button>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact