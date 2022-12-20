import React from 'react'
import logos from './assets/snkrs.png'
export default function Header2() {
    return (
        
         <div className='container'>
            <div className='row abq'>
                <div className='col-sm'>
                   <img src={logos} className="logo" />
                </div>
                <div className='col-sm abr'>
                    <a href='#'>feed</a>
                    <a href='#'>In stock</a>
                    <a href='#'>Upcoming</a>
                </div>
                <div className='col-sm'>
                </div>
            </div>
         </div>
  )
}
