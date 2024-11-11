import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Welcome, Home, Collection, About, Contact, Product, Cart, Login, PlaceOrder, Orders } from './pages/pages';
import Navbar from './components/Navbar';
import styles from './style';
import Footer from './components/Footer';

const App = () => {
  const location = useLocation(); // Get current location

  return (
    <main className={`${location.pathname === '/' ? '' : 'pt-12'}`}> 
      <Navbar />
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
