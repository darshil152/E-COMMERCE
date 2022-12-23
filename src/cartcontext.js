import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react'
import { useInRouterContext } from 'react-router-dom'
let cartData = []
let newdata = [];
export const UserContext = React.createContext();

export default class Cartcontext extends Component {

    state = {
        data: localStorage.getItem('sneakersdata') ? localStorage.getItem('sneakersdata') : [],
        data1: localStorage.getItem('sneakers') ? localStorage.getItem('sneakers') : [],
        cartData: [],
        newdata: [],

    }


    componentDidMount() {
        let abc = JSON.parse(localStorage.getItem('sneakersdata'));
        newdata.push(abc)
        this.setState({ newdata })
        localStorage.setItem('sneakersdata', JSON.stringify(newdata))
    }

    snekerdata = (data) => {

        let ismatched = false;

        for (let i = 0; i < this.state.data1.length; i++) {
            if (this.state.data1[i].id == data) {
                ismatched = true
            }
        }
        if (ismatched) {
            alert('You already added this prodect');
        } else {
            newdata.push(data)
            this.setState({ newdata })
            localStorage.setItem('sneakersdata', JSON.stringify(newdata))
        }
        console.log(this.state.final);
    }



    handlecart = (data) => {


        this.setState({ data }, () => {

            // for (let i = 0; i < this.state.data1.length; i++) {

            //     for (let j = 0; j < this.state.data.length; j++) {
            //         if (this.state.data[j] == this.state.data1[j].id) {
            //             cartData.push(this.state.data1[j])
            //             this.setState({ cartData })
            //         }

            //     }

            // }
        })
    }

    render() {
        return (
            <>
                <UserContext.Provider value={{ state: this.state, handlecart: this.handlecart, snekerdata: this.snekerdata }}>
                    {
                        this.props.children
                    }
                </UserContext.Provider>
            </>
        )
    }
}
