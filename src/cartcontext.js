import React, { Component } from 'react'
const Context = React.createContext('1')
export default class ContextStore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cartData: 'asdaghsdhs',
    }
  }

  handleCart = (data) => {
    console.log('come')
    this.setState({ cartData: data })
  }

  render() {
    return (
      <div>
        <Context.Provider value={{ ...this.state, handleCart: this.handleCart }} >
          {this.props.children}
        </Context.Provider>
      </div>
    )
  }
}
