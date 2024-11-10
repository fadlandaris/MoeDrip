import React from 'react'
import Card from '../components/Card'
import LatestCollection from '../components/LatestCollection'
import Discount from '../components/Discount'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main>
      <Card/>
      <Discount/>
      <LatestCollection/>
      {/* <Footer/> */}
    </main>
  )
}

export default Home