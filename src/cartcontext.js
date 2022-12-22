import React, { Component } from 'react'
import { useInRouterContext } from 'react-router-dom'

export const UserContext = React.createContext();

export default class Cartcontext extends Component {

    state = {
        data: localStorage.getItem('sneakersdata') ? localStorage.getItem('sneakersdata') : [],
        data1: localStorage.getItem('sneakers') ? localStorage.getItem('sneakers') : [],
        newdata: [],
        final: [],

    }

    // snekerdata = (data) => {

    //     let ismatched = false;

    //     for (let i = 0; i < this.state.data1.length; i++) {
    //         if (this.state.data1[i].id == data.id) {
    //             ismatched = true
    //         }
    //     }
    //     if (ismatched) {
    //         alert('You already added this prodect');
    //     } else {
    //         newdata.push(data)
    //         this.setState({ final: this.state.newdata })
    //         localStorage.setItem('sneakersdata', JSON.stringify(newdata))
    //     }
    //     console.log(final);
    // }



    handlecart = (data) => {


        this.setState({ data }, () => {
            console.log('data :: ', this.state.data)
        })
    }

    render() {
        return (
            <>
                <UserContext.Provider value={{ state: this.state, handlecart: this.handlecart }}>
                    {
                        this.props.children
                    }
                </UserContext.Provider>
            </>
        )
    }
}
