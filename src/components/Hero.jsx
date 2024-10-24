import React from 'react'
import styles from '../style'
import { heroTitle, heroImg, heroDesc } from '../constants/constants'
import { Skate, Tennis, Hype,} from '../assets/assets'

const Hero = () => {
  return (
    <section className=' relative border-white w-full h-screen font-dotgothic font-bold bg-lightBlack p-12 flex flex-col justify-between'>
    <div className={`${styles.flexBetween} mb-24`}>
      {heroTitle.map((title, i) => (
        <h2 className='text-chilliRed text-4xl tracking-widest uppercase font-bold'>{title.title}</h2>
      ))}
    </div>
  
    <div className='text-white flex-grow flex justify-between items-center'>
      {heroImg.map((img, i) => {
        let className;
        if (i === 0) {
          className = 'container  h-full w-1/4 flex items-start ';
        } else if (i === 1) {
          className = 'container h-96  flex w-1/3';
        } else if (i === 2) {
          className = 'container h-full w-1/4 flex items-end';
        } 

        return (
          <div key={i} className={className}>
            <img src={img.img} alt="" className={i === 1 ? "w-full h-full object-cover object-bottom" : ""} />
          </div>
        );
      })}
    </div>

    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full p-12'>
      {heroDesc.map((desc, i) => (
        <p key={desc.id} className={ i === 0 ? 'text-white font-dotgothic mb-32 text-justify uppercase text-[10px] tracking-[5px] font-bold' : 'text-chilliRed font-dotgothic font-bold w-1/2 text-justify text-[10px] uppercase z-20 tracking-widest'}dangerouslySetInnerHTML={{ __html: desc.text }}/>
      ))}
    </div>

  </section>
  
  )
}

export default Hero