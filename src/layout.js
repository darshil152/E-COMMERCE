import React from 'react'
import Header from './header'
import Sidebar from './sidebar'

export default function Layout(props) {
  return (
    <div>
        <Header />
        <Sidebar />
        {props.children}  
    </div>
  )
}
