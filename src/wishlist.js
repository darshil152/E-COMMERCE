import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from './admin'


export default function Wishlist() {

    const {abc} = useContext(CartContext);
    console.log(abc)

    const [getitem, setGetitem] = useState(JSON.parse(localStorage.getItem('wishlist')));
    //--------------Deleteitem ---------------//
    const deleteitem = (data) => {
        const filteredPeople = getitem.filter((getitem => getitem.id !== data));
        setGetitem(filteredPeople)
        localStorage.setItem('wishlist', JSON.stringify(filteredPeople))
        console.log(filteredPeople);
    }

    return (
        <>
            {
                getitem.length > 0 && getitem.map((items, i) => {
                    return (
                        <div class="cart-wrap">
                            <div class="container">
                                <div class="row">
                                    <div class="main-heading mb-10">My wishlist</div>
                                    <div class="col-md-12">
                                        <div class="table-wishlist">
                                            <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                <thead>
                                                    <tr>
                                                        <th>Product image</th>
                                                        <th>Product Name</th>
                                                        <th>Product Price</th>
                                                        <th>Discount</th>
                                                        <th>category</th>
                                                        <th>Action</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <div class="display-flex align-center">
                                                                <div class="img-product">
                                                                    <img src={items.file[0]} style={{ width: "150px" }} />
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td><div class="name-product">
                                                            {items.productname}
                                                        </div></td>
                                                        <td class="price"> {items.price}</td>
                                                        <td><span class="in-stock-box">{items.discount}%</span></td>
                                                        <td><span class="in-stock-box">{items.category}</span></td>
                                                        <td><button class="round-black-btn small-btn" >Add to Cart</button></td>
                                                        <td class="text-center"><a class="trash-icon" onClick={() => deleteitem(items.id)}><i class="far fa-trash-alt"></i></a></td>
                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
