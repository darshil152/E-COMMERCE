import { ThirtyFpsSelect } from '@mui/icons-material';
import React, { Component } from 'react'

export const UserContext = React.createContext;

export default class Cartcontext extends Component {

  state = {
    data: 'darshil',
  }


  handlcontext = (data) => {
    this.setState({data})
  }

  render() {
    return (
      <>
        <UserContext.Provider value={{ ...this.state, handlcontext:this.handlcontext }} >
          {this.props.chilren}
        </UserContext.Provider>
      </>
    )
  }
}
