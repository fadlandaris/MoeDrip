import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants/constants';
import { Logo } from '../assets/assets';
import { p } from 'framer-motion/client';

const Navbar = () => {
  const [navData, setNavData] = useState([])

  useEffect(() => {
    setNavData(navLinks)
  }, [])

  // console.log(navData)

  return (
    <section className='fixed bottom-4 right-1/2 translate-x-1/2 flex justify-center space-x-6 px-6 py-4 rounded-full bg-lightBlack cursor-pointer z-30'>
      {navLinks.map((nav) => (
        <div key={nav.id} className='relative flex flex-col items-center group'>
          
          <a href={`/${nav.link}`} className='text-white flex items-center hover:scale-110 transition-all duration-150'>
            {nav.icon && <nav.icon />} 
          </a>
          
          <div className='bg-lightBlack text-[12px] rounded-full px-4 py-2 absolute bottom-10 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300'>
            {nav.nav}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Navbar;
