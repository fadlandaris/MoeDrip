import { createContext } from "react";
import { products, discount } from "../constants/constants";

export const ShopContext = createContext(); 

const ShopContextProvider = (props) => { 
  const currency = '$';
  const deliveryFee = 10;
  
  const value = {
    products, currency, deliveryFee, discount
  };

  return (
    <ShopContext.Provider value={value}> 
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
