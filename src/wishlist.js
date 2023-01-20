import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';

import {
    addTowishlist,
    removeWishlistItem
  }
  from "./store/wishlistSlice";

const WishlistPage = () => {


    const { wishlist } = useSelector((state) => state.allwishlist);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     dispatch(wishlist());
    //     // cart['quantity'] = 0
    //     console.log('cart :: ', wishlist)
    // })

    return (
        <div>
            {wishlist.map((data) => {
                <img
                    src={data.file[0]}
                    style={{ width: 200 }}
                    className="w-100"
                    alt="Blue Jeans Jacket"
                />
            })}
        </div>
    )
}

export default WishlistPage;