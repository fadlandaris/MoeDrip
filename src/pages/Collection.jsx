import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { collectionFilters } from '../constants/constants';
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

  const sortProducts = () => {
    let fp = [...products];

    switch (sortType) {
      case 'low-high':
        setCollection(fp.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setCollection(fp.sort((a, b) => b.price - a.price));
        break;
      case 'nike':
        setCollection(fp.filter(item => item.category === 'Nike'));
        break;
      case 'adidas':
        setCollection(fp.filter(item => item.category === 'Adidas'));
        break;
      case 'new-balance':
        setCollection(fp.filter(item => item.category === 'New Balance'));
        break;
      case 'men':
        setCollection(fp.filter(item => item.type === 'Men'));
        break;
      case 'women':
        setCollection(fp.filter(item => item.type === 'Women'));
        break;
      default:
        setCollection(fp);
        break;
    }
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
  }, [sortType]);

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
      <div className='w-full'>
        <Titles
          tittle={`Our Collections`}
          desc={`We have a bunch collection for you <br /> let's go explore and have your dream sneakers`}
        />

        <div className='flex justify-center mb-4 gap-x-8'>
          {selectFilters.map((filter, index) => (
            <SelectFilter
              key={index}
              options={filter}
              onChange={(value) => setSortType(value)}
            />
          ))}
        </div>

        {collection.length > 0 ? (
          <div className='grid grid-cols-4 gap-4 gap-y-6'>
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
              />
            ))}
          </div>
        ) : (
          <div className='font-vt323 text-3xl mt-12 text-center text-[#635555]  mx-auto'>
            <img src={notFound} className='w-96 mx-auto' />
          </div>
        )}
      </div>
    </main>
  );
};

export default Collection;
