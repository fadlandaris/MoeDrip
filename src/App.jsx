import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Welcome, Home, Collection, About, Contact, Product, Cart, Login, PlaceOrder, Orders } from './pages/pages';
import Navbar from './components/Navbar';
import styles from './style';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';

const App = () => {
  const location = useLocation();

  const getPaddingClass = () => {
    if (location.pathname === '/') {
      return ''; 
    } else if (location.pathname === '/collection') {
      return 'pt-24'; 
    } else {
      return 'pt-12'; 
    }
  };

  return (
    <main className={`${getPaddingClass()} `}> 
      {location.pathname !== '/' && <Navbar/>} 
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route path='/home' element={<Home />} />
        <Route path='/collection' element={<Collection />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/place-order' element={<PlaceOrder />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
      {location.pathname !== '/' && <Footer />} 
    </main>
  );
}

export default App;
