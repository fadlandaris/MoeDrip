import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem';
import { SiNike } from 'react-icons/si'
import { CgAdidas } from "react-icons/cg";
import DateCounter from './DateCounter';
import { GiTigerHead } from "react-icons/gi";

const Discount = () => {

  const { products }  = useContext(ShopContext);
  const [discount, setDiscount] = useState([])

  useEffect(() => {
    const discountProduct = products.filter((item, i) => (item.discount))
    setDiscount(discountProduct.slice(0, 4))
  }, []); 
  // console.log(bestSeller)

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
    <main className='max-w-7xl mx-auto p-6 mt-4 bg-lightgray rounded-2xl relative'>
      <div className='flex justify-between items-center'>
        <Title bestSeller={`Flash Sale 30% Discount  !`}/>
        <DateCounter/>
      </div>
       <div className='grid grid-cols-4 mt-4 gap-4 gap-y-6'>
         {discount.map((item, i) => (
          <ProductItem key={i} id={item._id} image={item.image} name={item.name} price={item.price} discountPrice={(item.price * 0.7).toFixed(2)} rating={item.rating} icon={getIcon(item.category)} releaseDate={item.date}/>
         ))}
       </div>
    </main>
  )
}

export default Discount