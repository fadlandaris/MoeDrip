import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { collectionFilters, categoryFilters } from '../constants/constants';
import ProductItem from '../components/ProductItem';
import { SiNike } from 'react-icons/si';
import { CgAdidas } from 'react-icons/cg';
import Titles from '../components/Titles';
import { notFound } from '../assets/assets';
import SelectFilter from '../components/SelectFilter';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [collection, setCollection] = useState([]);
  const [selectFilters, setSelectFilters] = useState([]);
  const [sortType, setSortType] = useState('relevant');
  const [category, setCategory] = useState('all-brand');
  const [type, setType] = useState('unisex');

  const toggleCategory = (value) => {
    setCategory(value);
  };

  const toggleType = (value) => {
    setType(value);
  };

  const sortProducts = () => {
    let fp = [...products];

    // Filter by category
    if (category !== 'all-brand') {
      fp = fp.filter(item => item.category.toLowerCase() === category);
    }

    // Filter by type
    if (type !== 'unisex') {
      fp = fp.filter(item => item.type.toLowerCase() === type);
    }

    // Sort by price
    switch (sortType) {
      case 'low-high':
        fp.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        fp.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setCollection(fp);
  };

  useEffect(() => {
    setCollection(products);
  }, [products]);

  useEffect(() => {
    const filters = collectionFilters.map(filter => filter.value);
    setSelectFilters(filters);
  }, []);

  useEffect(() => {
    sortProducts();
  }, [sortType, category, type]);

  const getIcon = (category) => {
    if (category === 'Nike') {
      return <SiNike />;
    } else if (category === 'Adidas') {
      return <CgAdidas />;
    } else {
      return null;
    }
  };

  return (
    <main className='max-w-7xl mx-auto'>
      <div className='w-full '>
        <Titles
          tittle={`Our Blind Box Collections !`}
          desc={`We have a bunch collection for you <br /> let's go explore and have your dream sneakers`}
        />

        <div className='flex justify-center mb-4 px-6 gap-x-6'>
            {categoryFilters.map((cat, i) => (
                <SelectFilter
                  options={cat.value}
                  onChange={cat.id === 'All Brand' ? toggleCategory : toggleType}
                />
            ))}

            {selectFilters.map((filter, index) => (
              <SelectFilter
                key={index}
                options={filter}
                onChange={(value) => setSortType(value)}
              />
              ))}
         </div>

            {collection.length > 0 ? (
              <div className='grid grid-cols-4 gap-4 gap-y-6 '>
                {collection.map((item, i) => (
                  <ProductItem
                    key={i}
                    id={item._id}
                    image={item.image}
                    name={item.name}
                    price={item.price}
                    rating={item.rating}
                    releaseDate={item.date}
                    icon={getIcon(item.category)}
                    justIn={'Hot'}
                  />
                ))}
              </div>
            ) : (
              <div className=' mt-12 mx-auto text-center font-vt323 text-2xl text-chilliRed'>
                <img src={notFound} className='w-96 mx-auto' />
                <p>Sorry, No Products Found</p>
              </div>
            )}
      </div>
    </main>
  );
};

export default Collection;
