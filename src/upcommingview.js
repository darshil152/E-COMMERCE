import { WindowSharp } from '@mui/icons-material';
import React from 'react'
import { useState, useEffect } from 'react'
import Header2 from './header2';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import moment from 'moment/moment';

export default function Shoes() {

    // let currentdata = Date.now()
    // const dates = new Date(currentdata);
    // const [finaldate,setFinaldate] = useState('');


    //   useEffect(() => {
    //     console.log(dates.getFullYear() + '-' +  dates.getMonth() + 1 + '-' + dates.getDate());
    //     setFinaldate(dates.getFullYear() + '-' +  dates.getMonth() + 1 + '-' + dates.getDate())
    //   }, [])

    const viewdata = (data) => {
        window.location.href = '/view1/' + data;
    }


    const shoesdata = localStorage.getItem('upcommingsneakers') ? JSON.parse(localStorage.getItem('upcommingsneakers')) : [];

    console.log(shoesdata[0].date);
    return (
        <div className='abc'>
            <Header2 >

            </Header2>

            <div className='grid'>
                {

                    shoesdata.length > 0 && shoesdata.map((items) => {
                        {/* if (items.date < finaldate) { */ }
                        return (
                            <div>
                                <div class="top-left">{items.date}</div>
                                <div class="item" onClick={() => viewdata(items.id)}>
                                    <img className="dunk" src={items.file[0]} />
                                </div>
                            </div>

                        )
                        {/* } */ }

                    })
                }
            </div>
        </div>
    )
}
