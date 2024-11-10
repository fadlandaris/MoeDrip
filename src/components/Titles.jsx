import React from 'react'
import styles from '../style'

const Titles = ({tittle, desc, }) => {
  return (
    <div className='text-center mb-12'>
    <h2 className={`${styles.headerTitle}`}>{tittle}</h2>
    <p dangerouslySetInnerHTML={{ __html: desc }} className={`${styles.bodyText}`} />
  </div>
  )
}

export default Titles