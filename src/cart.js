import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import Navbar from "./Navbar";


import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "./store/cartSlice";

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);

  const dispatch = useDispatch();

  const checkout = (cart) => {
    // window.location.href = './checkout' 
    console.log(cart);
  }

  useEffect(() => {
    dispatch(getCartTotal());
    // cart['quantity'] = 0
    console.log('cart :: ', cart)

  }, [cart]);

  return (
    
    <div>
          <Navbar/>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  {cart?.map((data) => (
                    <div className="row">
                      <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          className="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src={data.file[0]}
                            style={{ width: 200 }}
                            className="w-100"
                            alt="Blue Jeans Jacket"
                          />
                          
                        </div>
                      </div>

                      <div className="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong style={{ color: "black",fontSize:20,fontWeight:"bold" }}>Name: {data.name}</strong>
                          <p>
                            <strong style={{ color: "black",fontSize:15,fontWeight:500 }}>SIZE : US  {data.size}</strong>
                          </p>
                        </p>

                        <button
                          type="button"

                          className=" btn-sm me-1 mb-2"
                          style={{ backgroundColor: "black", color: "white" }}
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                          onClick={() => dispatch(removeItem(data.id))}
                        >
                          <i className="fas fa-trash" style={{ height: 22 }}></i>
                        </button>
                      </div>

                      <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <button
                            className=" px-3 me-2"
                            style={{ backgroundColor: "black", color: "white", height: 43, border: 0 }}
                            onClick={() =>
                              dispatch(decreaseItemQuantity(data.id))
                            }
                          >
                            <i className="fas fa-minus"></i>
                          </button>

                          <div className="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value={data.quantity}
                              type="number"
                              className="form-control"
                              onChange={() => null}
                            />
                            <label className="form-label" for="form1">
                              Quantity
                            </label>
                          </div>

                          <button
                            className="btn btn-primary px-3 ms-2"
                            style={{ backgroundColor: "black", color: "white", height: 43, border: 0 }}
                            onClick={() =>
                              dispatch(increaseItemQuantity(data.id))
                            }
                          >
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>

                        <p className="text-start text-md-center">
                          <strong style={{color:"black"}}>Amount :₹{data.price}</strong>
                        </p>
                      </div>
                      <hr className="my-4" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Total Quantity
                      <span>{totalQuantity} Items</span>
                    </li>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      discount
                      <span>5%</span>
                    </li>
                    <hr></hr>

                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>₹{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    style={{ backgroundColor: "black", color: "white", border: 0 }}
                    className="btn btn-primary btn-lg btn-block"
                    onClick={() => checkout(cart)}
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default CartPage;