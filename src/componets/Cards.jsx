import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import triple from '../assets/triple.png'
const Cards = () => {
  return (
    <div className='w-full bg-white py-[10rem] px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl '>
      <img className='w-20 mx-auto mt-[-3rem] bg-white ' src={Single} alt="/"/>
      <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
      <p>Rs 249</p>
      <div>
        <p> 1gb/Day</p>
        <p>unlimited voice calls</p>
        <p>100sms/Day</p>
      </div>
      <button className='bg-[#8cf175] w-[200px] rounded-md font-medium my-6 mx-auto py-2 text-black'>Buy Now</button>
      </div>
      </div>
    </div>
  )
}

export default Cards