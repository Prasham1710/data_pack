 import React from 'react';
 const Hero = () => {
  return (
    <div className='text-white'>
     <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
         Every Jio SIM is True 5G ready</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
       Let's welcome True 5G
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Welcome offer</p>
         </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Unlimited data at up to 1 Gbps speed.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Buy now</button>
      </div>
    </div>
  );
};

export default Hero;