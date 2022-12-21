import React from 'react'
import Laptop from '../assets/laptop.jpg'
const analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w[1240px] mx- auto grid md:grid-cols-2'>
            <img src={Laptop} alt="/" />
            <div>

                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About the Network </h1>
                <p>Type of Network:Jio is the only network which offers advanced 4G LTE technology on all its sites. Jio is also the only network in the country which offers VoLTE technology for voice calling on all of its sites.
Width of the Network/ Number of base stations: Jio has approximately 5.32 lakh 4G LTE network base stations and covers more than 95% of India’s population. The number of base stations clearly establish that Jio is the widest operator in terms of number of base stations. </p>
             <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div></div>
  )
}

export default analytics