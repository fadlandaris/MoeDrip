import React from 'react'

const Title = ({newArrival, bestSeller}) => {
  return (
    <div>
      <h2 className='font-bold text-chilliRed uppercase'>{newArrival}{bestSeller}</h2>
    </div>
  )
}

export default Title