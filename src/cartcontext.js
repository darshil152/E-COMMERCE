import React, { Component } from 'react'

export const UserContext = React.createContext()

export default class Cartcontext extends Component {

  state = {
    data: localStorage.getItem('sneakers') ? localStorage.getItem('sneakers') : [],
  }



  render() {
    return (
      <>
        <UserContext.Provider
          value={{ ...this.state }}>
          {this.props.children}
        </UserContext.Provider>
      </>
    )
  }
}
