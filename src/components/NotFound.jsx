import React from 'react'
import { notFound } from '../assets/assets'

const NotFound = () => {
  return (
    <div className='mt-24 mx-auto text-center font-vt323 text-4xl text-chilliRed uppercase font-bold tracking-wide '>   
    <img src={notFound} className='w-96 mx-auto animate-bounce ' />
  </div>
  )
}

export default NotFound