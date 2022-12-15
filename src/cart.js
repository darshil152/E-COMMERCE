import React, { Component, useContext } from 'react'
import UserContext from "./admin"

export default class Cart extends Component {

  static contextType = UserContext

  render() {

    let userDetail = this.context
    return (
      <div>
        <div>Name:{userDetail.name}</div>
        <div>age:{userDetail.age}</div>
      </div>
    )
  }
}
