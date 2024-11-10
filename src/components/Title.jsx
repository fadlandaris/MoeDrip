import React from 'react'

const Title = ({newArrival, bestSeller, categories }) => {
  return (
    <div>
      <h2 className='font-bold text-chilliRed uppercase'>{newArrival}{bestSeller}{categories}</h2>
    </div>
  )
}

export default Title