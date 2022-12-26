import React from 'react'
import logos from './assets/snkrs.png'
export default function Header2() {

    const getto = () =>{
        window.location.href = "./upcommingview"
    }

    const getto1 = () =>{
        window.location.href = "./shoes"
    }
    return (
        
         <div className='container'>
            <div className='row abq'>
                <div className='col-sm'>
                   <img src={logos} className="logo" />
                </div>
                <div className='col-sm abr'>
                    <a href='#'>feed</a>
                    <a href='#'  onClick={getto1}>In stock</a>
                    <a href='#' onClick={getto}>Upcoming</a>
                </div>
                <div className='col-sm'>
                </div>
            </div>
         </div>
  )
}
