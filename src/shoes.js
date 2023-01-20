import { ShowChart, WindowSharp } from '@mui/icons-material';
import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';
import Header2 from './header2';
import { useDispatch } from 'react-redux';


export default function Shoes() {

    const [show, setShow] = useState(true);
    const dispatch = useDispatch();

    const viewdata = (data) => {
        window.location.href = '/view/' + data;
    }

    // const addtowishlist = (data) => {

    //     console.log(data)
    //     localStorage.setItem('wishlistItem', JSON.stringify(data))
    //     dispatch(addtowishlist(data))
    //     toast.success('Product added to wishlist ', {
    //         position: toast.TOP_RIGHT
    //     })
    // }




    const shoesdata = localStorage.getItem('sneakers') ? JSON.parse(localStorage.getItem('sneakers')) : [];
    console.log(shoesdata);
    return (
        <div className='abc'>
            <Header2 >
            </Header2>
            <button className='ncss-btn-primary-dark btn-lg  buying-tools-cta-button' style={{ width: 150, padding: 0, minHeight: 37, marginBottom: 20, position: "relative", left: 550 }} onClick={() => setShow(!show)}>Grid view</button>



            {show ? <div className='grid'>
                {
                    shoesdata.length > 0 && shoesdata.map((items) => {
                        return (
                            <div class="item" onClick={() => viewdata(items.id)}>
                                <img className="dunk" src={items.file[0]} />
                            </div>
                        )
                    })
                }
            </div> : <div className='container-fluid'>
                <div className='row'>
                    {
                        shoesdata.length > 0 && shoesdata.map((items) => {
                            return (
                                <div class="col-md-4" >
                                    <img className="dunk1" src={items.file[0]} onClick={() => viewdata(items.id)} />
                                    <h1 style={{ fontSize: 20, marginBottom: 30, marginTop: 10 }}>{items.name}</h1>\
                                </div>
                            )
                        })
                    }
                </div>
            </div>}



        </div>
    )
}
