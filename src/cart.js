import React, { createContext } from 'react'
// import { data } from './admin'
import { data } from './admin'

export default function Cart() {
  return (
    <data.Consumer>
         {
       (name) => {
             return (
               <h1>My name {name}</h1>
             )
           }
         }
       </data.Consumer> 
  )
}



 