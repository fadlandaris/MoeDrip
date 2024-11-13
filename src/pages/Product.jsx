import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { authenticGuaranteed } from '../constants/constants'
import { IoMdArrowDropdown } from 'react-icons/io';
import { Logo } from '../assets/assets';
import NotFound from '../components/NotFound';
// import ProductItem from '../components/ProductItem'


const Product = () => {
  const { productId } = useParams()
  const { products } = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [isOpen, setIsOpen] = useState(false);
  const [authentic, setAuthentic ] = useState(authenticGuaranteed)
  const [releaseDate, setReleaseDate] = useState('')

  const fetchProduct = async () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item); 
        // console.log(item)
        setImage(item.image[0])
        setName(item.name)
        setCategory(item.category)
        setPrice(item.price)
        setDescription(item.description)
        setReleaseDate(item.date)
        return null;
      }
    });
  };
  
  useEffect(() => {
    fetchProduct()
  }, [productId, products])

  useEffect(() => {
    setAuthentic(authenticGuaranteed)
  }, [])
  console.log(releaseDate)

  return productData ?  (
    <main className='w-full text-lightBlack'>
      <div className='max-w-7xl mx-auto '>
        <div className='w-full grid grid-cols-3 '> 
          <div className=''>
            <div className='text-[14px] flex justify-start gap-x-2  mb-6 font-medium'>
              <a href="/collection" className='hover:text-chilliRed transition-all duration-300'>Product</a>
              <span className='text-text'>/</span>
              <a href='' className='hover:text-chilliRed transition-all duration-300' >{productData.category}</a>
              <span className='text-text'>/</span>
              <a href='' className='hover:text-chilliRed transition-all duration-300'> {productData.name}</a>
            </div>
            {productData.image.map((img, i) => (
              <div key={i} className='bg-lightgray  rounded-2xl group h-[500px] w-full cursor-pointer'>
                <img src={img} alt="" className='h-full w-full object-cover scale-90 group-hover:scale-95 transition-all duration-300' />
              </div>
            ))}
          </div>
        

          <div className=' rounded-2xl p-10 col-span-2 '>
            <div className=''>
              <div className='flex justify-between'>
                <h2 className='uppercase font-vt323 font-bold text-4xl tracking-wide'>{productData.name}</h2>
                <img src={Logo} className='w-12 animate-pulse' />
              </div>
              {/* <p>{productData.releaseDate}</p> */}
              <div className='my-6'>
                <p className='text-chilliRed font-medium'>start from</p>
                <p className='font-bold text-green-700 text-2xl '>$ {productData.price}</p>
              </div>
              <p className='text-text font-medium '>{productData.description}</p>
            </div>

            <div className='my-6'>
              <div className='flex flex-wrap justify-start gap-x-4 my-6'>
                {productData.sizes.map((size, i) => (
                  <div key={i} className='py-2 px-4 rounded-lg font-medium bg-lightgray hover:text-white hover:bg-chilliRed transition-all duration-150 cursor-pointer text-[14px]'>
                    {size}
                  </div>
                ))}
              </div>
              <button href='' className='px-6 py-4 text-white rounded-lg bg-lightBlack uppercase font-medium text-[12px] hover:bg-chilliRed transition-all duration-300 cursor-pointer'>Add To Cart</button>
            </div>

            <div className='grid grid-cols-1 gap-y-4 font-medium text-[14px]'>
              {authentic.map((aut, i) => (
                <div key={i}>
                  <div className='rounded-lg bg-lightgray p-4 flex justify-between'>
                    <p>{aut.title}</p>
                    <IoMdArrowDropdown className={`text-lightBlack transition-transform duration-300 cursor-pointer ${aut.isOpen ? 'transform rotate-180' : ''}`}onClick={() => setAuthentic(authentic.map((item) => item === aut ? { ...item, isOpen: !item.isOpen } : item))}/>
                  </div>
                  {aut.isOpen && (
                    <div className='p-4  rounded-lg  text-[12px]'>
                      {aut.value.map((val, j) => (
                        <p key={j} className='text-text'>{val.title}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='border-2 text-lightBlack mt-4'>
          {/* <ProductItem/> */}
        </div>
      </div> 
    </main>
  ) : <NotFound/>
}

export default Product