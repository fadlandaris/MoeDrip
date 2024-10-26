import { createContext } from "react";
import { products, discount, heroImg, heroTitle, heroDesc, navLinks  } from "../constants/constants";

export const ShopContext = createContext(); 

const ShopContextProvider = (props) => { 
  const currency = '$';
  const deliveryFee = 10;
  
  const value = {
    heroDesc, heroImg, heroTitle, navLinks, products, currency, deliveryFee, discount
  };

  return (
    <ShopContext.Provider value={value}> 
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
