import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from "./store/cartSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {

    const dispatch = useDispatch();
    const products = useSelector((state) => state.cart);


    const handleRemove = (data) => {
        dispatch(remove(data))
        toast.success('Product remove successfully ', {
            position: toast.POSITION.TOP_RIGHT
        });
    }

    return (
        <div>
            <h3>Cart</h3>
            <div className="cartWrapper">
                {products.map((product) => (
                    <div key={product.id} className="cartCard">
                        <img src={product.file[0]} alt="" style={{width:100}} />
                        <h5 style={{fontSize:23}}>{product.name}</h5>
                        <h5 style={{fontSize:23}}>₹{product.price}</h5>
                        <h5 style={{fontSize:23}}>{product.sku}</h5>
                        <button
                            className="btn"
                            onClick={() => handleRemove(product.id)}
                        >
                            Remove
                        </button>
                    </div>
                ))}
            </div>
            <ToastContainer />
        </div>
    )
}
