import { faL } from '@fortawesome/free-solid-svg-icons';
import { AltRoute, CurrencyRupee, MarkAsUnread } from '@mui/icons-material';
import { margin } from '@mui/system';
import React from 'react'
import { useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'



let cartdata = [];
let count = 0;
export default function View() {

    let [currentdata, setCurrentdata] = useState([]);
    const [final, setFinal] = useState([]);


    useEffect(() => {
        let url = window.location.href
        let id = url.substring(url.lastIndexOf('/') + 1)
        let retrivedata = localStorage.getItem('sneakers') ? JSON.parse(localStorage.getItem('sneakers')) : [];


        for (let i = 0; i < retrivedata.length; i++) {
            if (retrivedata[i].id == id)
                setCurrentdata(retrivedata[i])
        }
    }, [])



    useEffect(() => {
        count++
        if (count == 1) {
            let abc = JSON.parse(localStorage.getItem('finaldata'))
            if (abc) {
                cartdata = abc
                setFinal(cartdata)
                console.log(final);
            } 
        }
    }, [cartdata])


    const sendtocart = (data) => {

        let retry = localStorage.getItem('sneakers') ? localStorage.getItem('sneakers') : [];
        let che = false;

        for (let i = 0; i < retry.length; i++) {
            if (retry[i].id === data) {
                che = true;
            }
        } if (!che) {
            cartdata.push(data)
            setFinal(cartdata)
            localStorage.setItem('finaldata', JSON.stringify(cartdata));
        } else {
            alert('ajsdajkfhg')
        }
    }

    const [value, setValue] = React.useState('');
    const sizechange = (event) => {
        setValue(event.target.value)
    }
    console.log(value);
    
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


                    <div>
                        <label for="size" className='choose'>Choose a size:</label>
                        <select name="sizes" id="sizes" value={value}  onChange={sizechange}>
                            <option value="7">M 7 /W 7</option>
                            <option value="7.5">M 7.5 /W 7.5</option>
                            <option value="8">M 8 /W 8</option>
                            <option value="8.5">M 8.5 /W 8.5</option>
                            <option value="9">M 9 /W 9</option>
                            <option value="9.5">M 9.5 /W 9.5</option>
                            <option value="10">M 10 /W 10</option>
                            <option value="10.5">M 10.5 /W 10.5</option>
                            <option value="11">M 11 /W 11</option>
                            <option value="11.5">M 11.5 /W 11.5</option>
                        </select>
                        <p style={{color:"black"}}>You Select {value} Us Size</p>
                    </div>


                    {/* <div className='ussize' onChange={sizechange}>
                        <input type="radio" value="7" name="gender" />   7 Us
                        <input type="radio" value="7.5" name="gender" />  7.5 Us
                        <input type="radio" value="8" name="gender" />   8 Us
                        <input type="radio" value="8.5" name="gender" />  8.5 Us
                        <input type="radio" value="9" name="gender" />    9 US
                        <input type="radio" value="9.5" name="gender" />  9.5 Us
                        <input type="radio" value="10" name="gender" />   10 Us
                        <input type="radio" value="10.5" name="gender" /> 10.5 US
                    </div> */}

                    <div class="mb6-sm prl0-lg fs14-sm">
                        <button type="button" class="ncss-btn-primary-dark btn-lg  buying-tools-cta-button " onClick={() => sendtocart(currentdata.id)}>₹{currentdata.price}</button>
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
