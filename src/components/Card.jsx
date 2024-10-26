import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import styles from '../style';
import { Link } from 'react-router-dom';

const Card = () => {

  const { products, discount } = useContext(ShopContext)
  
  return (
    <main className='max-w-7xl mx-auto'>
      <section className='w-full grid grid-cols-3 gap-4'>
        <div className='col-span-2 bg-lightgray p-6 rounded-2xl flex group cursor-pointer'>
          <div>
            <Title newArrival={`New Arrival !`}/>
              {products.slice(0, 1).map((item, i) => (
                <div className='mt-2 mb-8' key={item._id}>
                  <h2 className='text-4xl font-bold uppercase text-lightBlack mb-4 font-vt323 '>{item.name}</h2>
                  <p className={`${styles.bodyText} w-[80%] text-text`}>{item.description}</p>
                </div>
              ))}
             <Link to={`/product/aaaa`} className='px-6 py-2 rounded-full bg-lightBlack text-white inline-block text-[12px] hover:bg-chilliRed transition-all duration-150'>View Product</Link>
          </div>
              {products.slice(0,1).map((img, i) => (
                <img key={i} src={img.image[1]} alt={img.image} className='group-hover:-rotate-6  transition-all duration-300 w-80' />
              ))}
          </div>

          <div className='col-span-1 border-2 p-6 rounded-2xl bg-chilliRed text-white cursor-pointer relative overflow-hidden group'>
            <div className='relative z-10'>
              <p className='font-bold uppercase'>Discount</p>
              {discount.map((disc, i) => (
                <div key={i} className='mt-2 mb-8'>
                  <h2 className='text-4xl font-bold uppercase font-vt323 mb-4'>{disc.title}</h2>
                  <p className={`${styles.bodyText} w-[80%]`}>{disc.desc}</p>
                </div>
              ))}
            </div>
            <img  src={discount[0].image[0]} alt={discount[0].title[0]}  className='absolute bottom-0 right-0 w-72 group-hover:scale-110 duration-300 transition-all '/>
          </div>

      </section>
    </main>
  );
};

export default Card;
