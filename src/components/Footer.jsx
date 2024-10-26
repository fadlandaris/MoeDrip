import React from 'react';
import { footer } from '../constants/constants';
import { footerBanner } from '../assets/assets';

const Footer = () => {
  return (
    <main className='border-2 p-6 py-24 max-w-7xl mx-auto mt-24 bg-lightBlack text-white rounded-2xl' style={{ backgroundImage: `url(${footerBanner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex justify-center items-center text-center'>
        {footer.map((footerItem, i) => (
          <div key={i} className='w-1/2'>
            <h2 className='text-4xl font-bold font-vt323 uppercase tracking-wider '>{footerItem.header}</h2>
            <p className='text-[12px] text-lightgray mt-8'>{footerItem.body} !</p>
            <div className="flex justify-center space-x-4 mt-4">
              {footerItem.about.map((item, index) => {
                const Icon = item.icon; 
                return (
                  <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                    <Icon className="text-white hover:scale-110 transition-all duration-150 cursor-pointer" />
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default Footer;
