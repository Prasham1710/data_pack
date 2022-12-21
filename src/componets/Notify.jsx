import React from 'react'

const Notify = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Want latest updates about  upcoming packages  
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
          <div>
            <input className='p-3 flex w-full rounded-md text-black'
            type='email'
            placeholder='Enter Email'></input>
            <button  className='bg-[#8cf175] text-black rounded-md font-medium 
            w-[200px] ml-4 my-6 px-6 py-2'>Notify Me</button>
          </div>
          <p>
             About Signal -
              < a href='https://www.jio.com/en-in/jio-privacy-policy'><span className='text-[#00df9a]'>Privacy Policy.</span></a>
              
          </p>
        </div></div></div>
  )
}

export default Notify
//ml-4 my-6 px-6 py-3