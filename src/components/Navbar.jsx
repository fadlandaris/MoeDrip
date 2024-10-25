import React from 'react';
import { navLinks } from '../constants/constants';

const Navbar = () => {
  return (
    <section className='fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-6 px-6 py-4 rounded-full bg-lightBlack cursor-pointer'>
      {navLinks.map((nav) => (
        <div key={nav.id} className='relative flex flex-col items-center group'>
          {/* The icon */}
          <a href={`/${nav.link}`} className='text-white flex items-center hover:scale-110 transition-all duration-150'>
            {nav.icon && <nav.icon />} {/* Adjust icon size if needed */}
          </a>
          
          {/* The text that appears on hover */}
          <div className='bg-lightBlack text-[12px] rounded-full px-4 py-2 absolute bottom-10 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300'>
            {nav.nav}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Navbar;
