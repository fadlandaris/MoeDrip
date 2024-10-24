import React from 'react'
import Intro from '../components/Intro'
import Hero from '../components/Hero'
import styles from '../style'
import { Router } from 'react-router-dom'

const Welcome = () => {
  return (
    <main className='flex justify-center items-center'>
      <Hero/>
      <Intro/>
    </main>
  )
}

export default Welcome