import React, { Component } from 'react'

export const UserContext = React.createContext()

export default class Cartcontext extends Component {

  state = {
    data: localStorage.getItem('finaldata') ? localStorage.getItem('finaldata') : [],
    mixdata: localStorage.getItem('sneakers') ? JSON.parse(localStorage.getItem('sneakers')) : [],
    final: []
  }

  // componentDidMount() {
  //   let olddata = JSON.parse(localStorage.getItem('sneakers'));
  //   let curretndata = [];

  //   for (let i = 0; i < olddata.length; i++) {
  //     if (olddata[i].id == this.state.data) {
  //       console.log('asdkasghdakjsghj');
  //       curretndata = olddata[i]
  //     }
  //   }
  //   console.log(curretndata);
  // }


  // componentDidMount() {
  //   let jodddd = localStorage.getItem('finaldata') ? JSON.parse(localStorage.getItem('finaldata')) : [];
  //   let cartdata = [];
  //   let che = false;
  //   console.log(jodddd);

  //   for (let i = 0; i < jodddd.length; i++) {
  //     if (jodddd[i] == data)
  //       che = true;
  //   } if (che) {
  //     alert('already push')
  //   } else {
  //     cartdata.push(data)
  //     this.setState({ final: cartdata })
  //     localStorage.setItem('finaldata', JSON.stringify(cartdata))

  //   }
  // }


  handlecart = (data) => {
    this.setState({ ...this.state, handlecart: this.handlecart })
  }

  render() {
    return (
      <>
        {/* <UserContext.Provider
          value={{ ...this.state, handlecart: data }}>
          {this.props.children}
        </UserContext.Provider> */}
      </>
    )
  }
}
