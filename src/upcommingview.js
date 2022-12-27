import { WindowSharp } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react'
import Header2 from './header2';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Shoes() {


    const viewdata = (data) => {
        window.location.href = '/view1/' + data;
    }
    

    const shoesdata = localStorage.getItem('upcommingsneakers') ? JSON.parse(localStorage.getItem('upcommingsneakers')) : [];
    console.log(shoesdata);
    return (
        <div className='abc'>
            <Header2 >

            </Header2>
            <div className='grid'>
                {
                    shoesdata.length > 0 && shoesdata.map((items) => {
                        return (
                            <div>
                                <div class="top-left">{items.date}</div>
                                <div class="item" onClick={() => viewdata(items.id)}>
                                    <img className="dunk" src={items.file[0]} />
                                </div>
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
