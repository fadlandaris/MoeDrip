import React, { useContext, useState } from 'react';
import { navLinks } from '../constants/constants';
import { ShopContext } from '../context/ShopContext';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  const [navData] = useState(navLinks);

  return (
    <section className='fixed bottom-4 right-1/2 translate-x-1/2 flex justify-center space-x-6 px-6 py-4 rounded-full bg-lightBlack cursor-pointer z-30'>
      {navData.map((nav) => (
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
