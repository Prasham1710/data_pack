import React from 'react'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'> <div>
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Contact us</h1>

       <p className='py-4'>Copyright © 2022 Signal Infocomm Ltd. All rights reserved.</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <button><a href = 'https://www.facebook.com/Jio'> <FaFacebookSquare size={30} /></a></button>
            <button><a href = 'https://www.instagram.com/reliancejio/'> <FaInstagram size={30} /></a></button>
             <button><a href = 'https://twitter.com/reliancejio/'> <FaTwitterSquare size={30} /></a></button>
             <button><a href = 'https://github.com/Prasham1710'> <FaGithubSquare size={30} /></a></button>
        </div> </div>
        </div>
  )
}

export default Footer