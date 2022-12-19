import React, { Component } from 'react'
import Cart from './cart'

const UserContext = React.createContext()

export default function Admin() {
  return (
    <UserContext.Provider value="Reed">
    <cartcontext />
  </UserContext.Provider>
  )
  }