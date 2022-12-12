import React, { createContext } from 'react'
import Cart from './cart'


 const data = createContext

export default function Admin() {
  const name  = "Darshil"
  return (
    <>
    <data.Provider value={name}>
      <Cart />
    </data.Provider>
    </>
  )
}
export {data};
