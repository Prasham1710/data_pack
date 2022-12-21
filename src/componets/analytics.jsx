import React from 'react'
import Laptop from '../assets/laptop.jpg'
const analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w[1240px] mx- auto grid md:grid-cols-2'>
            <img src={Laptop} alt="/" />
            <div>
                <p> Data analysis for investment</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis</p>
             <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div></div>
  )
}

export default analytics