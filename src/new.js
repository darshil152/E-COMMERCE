import React, { Component } from 'react'
import CartC from './cartcontext'

export default class New extends Component {

    static contextType = CartC

    handleClick = () => {
        console.log('context :: ', this.context)
    }

    render() {
        console.log('state :: ', this.context)
        return (
            <div onClick={this.handleClick}>New</div>
        )
    }
}













