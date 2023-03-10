import React from 'react'
import Single from '../assets/single.png'
const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
         <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Single} alt="/"/>
      <h2 className='text-4xl font-bold text-center py-8'>Rs209</h2>
       <p className='text-center text-2xl font-bold'>Validity:28 days</p>
      <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>1 GB/Day</p>
                  <p className='py-2 border-b mx-8'>Unlimited voice calls</p>
                  <p className='py-2 border-b mx-8'>100 sms/day</p>
              </div>
      <button className='bg-[#8cf175] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Single} alt="/"/>
      <h2 className='text-4xl font-bold text-center py-8'>Rs666</h2>
       <p className='text-center text-2xl font-bold'>Validity:84 days</p>
      <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>1.5GB/Day</p>
                  <p className='py-2 border-b mx-8'>Unlimited voice calls</p>
                  <p className='py-2 border-b mx-8'>100 sms/day</p>
              </div>
      <button className='bg-[#8cf175] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>
      <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
      <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Single} alt="/"/>
      <h2 className='text-4xl font-bold text-center py-8'>Rs 2999</h2>
       <p className='text-center text-2xl font-bold'>Validity:365 days</p>
      <div className='text-center font-medium'>
                  <p className='py-2 border-b mx-8 mt-8'>2.5 GB/Day</p>
                  <p className='py-2 border-b mx-8'>Unlimited voice calls</p>
                  <p className='py-2 border-b mx-8'>100 sms/day</p>
              </div>
      <button className='bg-[#8cf175] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'><a href = 'https://www.jio.com/mobile.html#fiber'>Buy now</a></button>
      </div>
      
      </div>
    </div>
  )
}

export default Cards