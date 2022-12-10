import React, { useState, useCallback, createContext } from "react";
import Addproduct from './addproduct';
import Wishlist from "./wishlist";

export const CartContext = createContext;
export default function Admin() {

  const [getteesdata, setGetteesdata] = useState(JSON.parse(localStorage.getItem('productdetail')));
  const [color, setColor] = useState('green')

  return (
    <>
      <CartContext.Provider value={{ abc: color }} >
        <div>
          <h1>ajgfkgakkags</h1>
          <Wishlist />
        </div>
      </CartContext.Provider>
    </>
  )
}