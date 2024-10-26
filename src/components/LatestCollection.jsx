import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import styles from '../style'
import ProductItem from './ProductItem'
import { SiNike } from 'react-icons/si'
import { CgAdidas } from 'react-icons/cg'

const LatestCollection = () => {

  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  // console.log(products)

  useEffect(() => {
    const latestProduct = products.filter((item, i ) => (item.newArrival))
    setLatestProducts(latestProduct.slice())
  },[])
  // console.log(latestProducts)

  function getIcon(category) {
    if (category === "Nike") {
      return <SiNike />;
    } else if (category === "Adidas") {
      return <CgAdidas />;
    } else {
      return null; 
    }
  }
  
  return (
    <main className='max-w-7xl mx-auto rounded-2xl mt-12'>
      <div className='text-center mb-12'>
        <h2 className={`${styles.headerTitle}`}>Latest Arrival !</h2>
        <p className={`${styles.bodyText} text-text`}>Discover sneakers that bring together trend and  comfort.  Perfect <br /> for those who make a statement with every step.</p>
      </div>

      {/* rendering product */}
      <div className='grid grid-cols-4 gap-4 gap-y-6'>
        {
          latestProducts.map((item, i) => (
            <ProductItem key={i} id={item._id} image={item.image} name={item.name} price={item.price} rating={item.rating} icon={getIcon(item.category)}  releaseDate={item.date} justIn={'Just In'}/>
          ))
        }
      </div>
    </main>
  )
}

export default LatestCollection