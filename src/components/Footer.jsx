import React from 'react';
import { footer } from '../constants/constants';
import styles from '../style';
import { Logo } from '../assets/assets';

const Footer = () => {
  return (
    <main className='mt-24 pt-12 pb-24 w-full text-white bg-lightBlack'>
      <div className=''>
        <div className='max-w-7xl border-black grid grid-cols-4 gap-12 mx-auto mb-12 p-6'>
          <div className='col-span-2'>
            {footer[0].Title.map((item, index) => (
              <div key={index}>
                {/* <h2 className={`${styles.footerTitle} `}>{item.name}</h2> */}
                <p className='uppercase font-bold'>© {item.name}</p>
                <img src={Logo} className='w-10 mt-4 mb-8 ' />
                <div className='text-[14px] '>
                  <p >{item.desc}</p>
                  <p>{item.desc2}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <h2 className={`${styles.footerTitle} `}>{footer[0].companyTitle}</h2>
            <ul>
              {footer[0].company.map((item, index) => (
                <li key={index}>
                  <a href={item.link} className='text-[14px]'>
                    {item.footerLink}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className={`${styles.footerTitle} `}>{footer[0].aboutTitle}</h2>
            <ul className='flex space-x-4'>
              {footer[0].about.map((item, index) => (
                <li key={index}>
                  <a href={item.link} target='_blank' rel='noopener noreferrer' className=''>
                    <item.icon className='text-white' />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className='text-center font-semibold text-[12px] tracking-wider'>
      ©Moedrip 2024, All Right Reserved.
      </div>

    </main>
  );
}

export default Footer;
