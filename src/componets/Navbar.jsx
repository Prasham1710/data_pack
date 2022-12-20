import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#b6b63c]'>Data Pack</h1>
      <ul className= 'flex hidden'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      <div>
         <AiOutlineMenu size={20} />
      </div>
      <div className='fixed left-0 top-0 w-[60%]h-full border-r border-r-gray-900 bg-gray-700' >
         <h1 className='w-full text-3xl font-bold text-[#b6b63c]'>Data Pack</h1>
        <ul className='pt-3 uppercase'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>
      </div>
          </div>
  );
};

export default Navbar;