import React from 'react'
import { Link } from 'react-router-dom'
import { FaCartShopping, introVid } from '../assets/assets'

const Intro = () => {
  return (
    <section className='relative h-screen flex items-end justify-between  text-white p-12 font-roboto z-50'>
      <video className='absolute top-0 left-0 w-full h-full object-cover' src={introVid} autoPlay loop muted/>
      
      <div className='relative z-10 border-2 py-4 px-8'>
        <h2 className='text-6xl font-semibold tracking-wider uppercase'>
          Culture <br /> Born on the Streets, <br /> 
          <span className='ml-24'>Fashion at its Core</span>
        </h2>
      </div>
      
      <Link to="/home" className=' relative z-10 px-6 py-2 uppercase flex justify-center font-bold items-center gap-x-2 hover:gap-x-4 transition-all duration-300' href="#">
        <FaCartShopping className='text-3xl' />
        <span className=''>Shop Now</span>
      </Link>
    </section>
  )
}

export default Intro