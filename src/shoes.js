import { WindowSharp } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react'
import Header2 from './header2';


export default function Shoes() {


    const viewdata = (data) => {
        window.location.href = '/view/' + data;
    }

    const shoesdata = localStorage.getItem('sneakers') ? JSON.parse(localStorage.getItem('sneakers')) : [];
    console.log(shoesdata);
    return (
        <div className='abc'>
        <Header2 >
            
        </Header2>
            <div className='grid'>
                {
                    shoesdata.length > 0 && shoesdata.map((items) => {
                        return (
                            <div class="item" onClick={()=>viewdata(items.id)}>
                                <img className="dunk" src={items.file[0]} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
