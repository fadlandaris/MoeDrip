import { createContext, useState } from "react";
import { products, discount, heroImg, heroTitle, heroDesc, navLinks  } from "../constants/constants";

export const ShopContext = createContext(); 

const ShopContextProvider = (props) => { 
  const currency = '$';
  const deliveryFee = 10;
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  
  const value = {
    heroDesc, heroImg, heroTitle, navLinks, products, currency, deliveryFee, discount, search, setSearch, showSearch, setShowSearch
  };

  return (
    <ShopContext.Provider value={value}> 
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
