<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import Addproduct from './addproduct';

export default function Admin() {
  return (
    <div>
    <Addproduct />
        </div>
  )
=======
import React, { Component } from 'react'
import { json } from 'react-router-dom';

export default class admin extends Component {

  constructor(props) {
    super(props)

    this.state = {
      image: '',
      y: [],
    }
  }

  onimagechange = (e) => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      //  console.log('RESULT', reader.result)
      this.setState({ image: reader.result })
    }
    reader.readAsDataURL(file);
    console.log(file.name)
  }

  click = (e) => {
    y.push({
      image: this.state.image,
    })
    localStorage.setItem('student', JSON.stringify(y))
    console.log(y)
  }

  render() {
    return (
      <div className='main-section'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 abc'>
              <h1 className='student detail'>Student Detail</h1>
            </div>

            <div className='col-9 xyz'>
              <h4 className='detail1'>Upload Your Image</h4>
              <input type="file" id="myFile" className='button1' onChange={this.onimagechange} multiple />
            </div>

          </div>

          <button type="button" onClick={this.click} class="btn btn-primary click">Save</button>
          {/* <button className='click' >Save</button> */}
        </div>

      </div>
    )
  }
>>>>>>> a62a810ae665eee760d2fc38f84b761d86e0737c
}
