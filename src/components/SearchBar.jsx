import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { FiSearch } from 'react-icons/fi'
import { Logo } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext)
  const [show, setShow] = useState(false)
  const location = useLocation();

  useEffect(() => {
    if(location.pathname.includes('collection')) {
        setShow(true)
    } else {
      setShow(false)
    }
  }, [location])

  return show ? (
    <main className='w-full fixed top-0 py-4 z-30 bg-white border-b-2 border-lightgray'>
      <div className='max-w-7xl mx-auto flex items-center gap-x-4 '>
        <div className='w-full mx-auto relative '>
          <input value={search} onChange={(e) => setSearch(e.target.value) } type="text" placeholder={`try "Nike Dunk"`} className='w-full bg-lightgray py-3 px-6 rounded-full text-[14px] text-lightBlack font-medium  focus:outline-none focus:ring-1 focus:ring-chilliRed  ' />
          <FiSearch className='text-lightBlack absolute top-1/2 -translate-y-1/2 right-6 text-lg'/>
        </div>
        <img src={Logo} alt="Logo" className='w-12' />
      </div>
    </main>
  ) : null
}

export default SearchBar
