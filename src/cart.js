import React, { Component, createRef } from 'react'
import { UserContext } from './cartcontext'

export default class Cart extends Component {

  constructor(props) {
    super(props);
    this.cartRef = createRef('');
  }

  componentDidMount() {
    console.log('ref :: ', this.cartRef)
  }

  render() {
    return (
      <UserContext.Consumer ref={this.cartRef}>
        {data => {
          return (
            <>
              {console.log('data :: ', data)}
            </>
          )
        }
        }
      </UserContext.Consumer>
    )
  }
}
