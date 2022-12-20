import { CurrencyRupee } from '@mui/icons-material';
import React from 'react'
import { useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'


export default function View() {

    let [currentdata, setCurrentdata] = useState([]);

    useEffect(() => {
        let url = window.location.href
        let id = url.substring(url.lastIndexOf('/') + 1)
        let retrivedata = localStorage.getItem('sneakers') ? JSON.parse(localStorage.getItem('sneakers')) : [];


        for (let i = 0; i < retrivedata.length; i++) {
            if (retrivedata[i].id == id)
                setCurrentdata(retrivedata[i])
        }
    }, [])

    console.log(currentdata);

    return (
        <div className='container-fluid'>
            <div className='row abc'>
                <div className='col-sm'>

                    {currentdata.file?.length > 0 && currentdata?.file.map((items) => {
                        return (
                            <img src={items} className="top" />
                        )
                    })}
                </div>
                <div className='col-sm'>
                    <h1 className='name'>{currentdata.name}</h1>
                    <h4 className='prices'>MRP : ₹{currentdata.price}</h4>
                    <h4 className='description'>{currentdata.description}</h4>
                    <h4 className='sku'>SKU : {currentdata.sku}</h4>
                    <h1 className='size'>Us Size</h1>


                    <div class="btn-group">
                        <button className='men' value="M 7 / W 7" >M 7 / W 7</button>
                        <button className='women' value="M 7 / W 7" >M 7.5 / W 7.5</button>
                    </div>
                    <div class="btn-group">
                        <button className='men' value="M 8 / W ">M 8/ W 8</button>
                        <button className='women' value="M 8.5 / W 8.5">M 8.5 / W 8.5</button>
                    </div>
                    <div class="btn-group">
                        <button className='men' value="M 9 / W 9">M 9 / W 9</button>
                        <button className='women' value="M 9.5 / W 9.5">M 9.5 / W 6.5</button>
                    </div>
                    <div class="btn-group">
                        <button className='men' value="M 10 / W 10">M 10 / W 10</button>
                        <button className='women' value="M 10.5 / W 10.5">M 10.5 / W 10.5</button>
                    </div>
                    <div class="btn-group">
                        <button className='men' value="M 11 / W 11">M 11 / W 11</button>
                        <button className='women' value="M 11.5 / W 11.5">M 11.5 / W 11.5</button>
                    </div>


                    <div class="mb6-sm prl0-lg fs14-sm">
                        <button type="button" class="ncss-btn-primary-dark btn-lg  buying-tools-cta-button ">₹{currentdata.price}</button>
                    </div>
                </div>

            </div>

            <div className='full-img'>
                {currentdata.length > 0 && currentdata.map((items) => {
                    return (
                        <img src={items.file[0]} className="top" />
                    )
                })}
            </div>
        </div>
    )
}
