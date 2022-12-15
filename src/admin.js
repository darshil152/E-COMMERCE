import React, { Component } from 'react'
import Cart from './cart'

const UserContext = React.createContext()

export default class Admin extends Component {
  render() {

    let user = { name: "mike", age: "26" }
    return (
      <UserContext.Provider value={user}>
        <Cart />
      </UserContext.Provider>

    )
  }
}
