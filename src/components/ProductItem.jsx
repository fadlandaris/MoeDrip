import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import styles from '../style';

const ProductItem = ({ id, image, name, price, discountPrice, icon, releaseDate, justIn }) => {
  const { currency } = useContext(ShopContext);

  const formattedDate = new Date(releaseDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long', 
    day: '2-digit',
  });

  return (
    <Link to={`/product/${id}`} className='group p-4 border-2 border-transparent rounded-2xl transition-all duration-300 hover:border-chilliRed shadow-sm relative'>
      <div className='overflow-hidden mb-4 h-[300px] bg-lightgray rounded-2xl'>
        <img src={image[0]} alt={name} className='object-cover w-full h-full object-bottom rounded-2xl group-hover:scale-100 transition-transform duration-300 scale-95' />
      </div>
      <div>
        <span className='absolute top-8 right-10 text-chilliRed text-[12px] font-bold'>{justIn}</span>
        <h2 className='font-bold'>{name}</h2>
        <div className='flex items-center gap-x-2'>
          {icon && <icon.type {...icon.props} />}
          <p className='text-text text-sm'>{formattedDate}</p>
        </div>
        <div className='flex items-center gap-x-2'>
          {discountPrice && (
            <p className='text-chilliRed line-through'>{currency}{price}</p>
          )}
          <p className='text-green-700 font-semibold'>
            {currency}{discountPrice || price}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
