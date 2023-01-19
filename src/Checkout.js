// import React from 'react'
// import { useEffect } from 'react';
// import { useSelector, useDispatch } from "react-redux";
// import { ToastContainer, toast } from 'react-toastify';
// import { Formik } from "formik";
// import * as Yup from "yup";

// import {
//     getCartTotal,
//     removeItem,
//     decreaseItemQuantity,
//     increaseItemQuantity,
// } from "./store/cartSlice";
// import { useState } from 'react';
// import { setDefaultLocale } from 'react-datepicker';



// let temparray1 = [];
// export default function Checkout() {

//     const [data, setData] = ([])
//     const [email, setEmail] = useState("");
//     const [name, setName] = useState("");
//     const [lastname, setLastname] = useState("");
//     const [phonenumber, setPhonenumber] = useState("");
//     const [addressline1, setAddressline1] = useState("");
//     const [addressline2, setAddressline2] = useState("");
//     const [addressline3, setAddressline3] = useState("");
//     const [postalcode, setPostalcode] = useState("");
//     const [state, setState] = useState("");
//     const [country, setCountry] = useState("");
//     const [delivery, setDelivery] = useState("");





//     const { cart, totalQuantity, totalPrice } = useSelector((state) => state.allCart);

//     const dispatch = useDispatch();


//     useEffect(() => {
//         dispatch(getCartTotal());
//         // cart['quantity'] = 0
//         console.log('cart :: ', cart)

//     }, [cart]);

//     const getcheckoutdata = (data) => {
//         setEmail(data.email)
//         setName(data.name)
//         setLastname(data.lastname)
//         setPhonenumber(data.phonenumber)
//         setAddressline1(data.addressline1)
//         setAddressline2(data.addressline2)
//         setAddressline3(data.addressline3)
//         setPostalcode(data.postalcode)
//         setCountry(data.country)
//         setState(data.state)
//         setDelivery(data.delivery)

//         let newdata = { email: email, name: name, lastname: lastname, addressline1: addressline1, phonenumber: phonenumber, addressline2: addressline2, addressline3: addressline3, postalcode: postalcode, country: country, state: state, delivery: delivery }
//         console.log(newdata);
//         temparray1.push(newdata);
//         setData(temparray1)
//         localStorage.setItem('Checkoutdata',JSON.stringify(temparray1))
//     }

//     const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

//     return (
//         <div>

//             <section className="h-100 gradient-custom">
//                 <div className="container py-5">
//                     <div className="row d-flex justify-content-center my-4">
//                         <div className="col-md-8">
//                             <div className="card mb-4">
//                                 <div className="card-header">
//                                     <h5 style={{ fontSize: 30 }}>Enter your name and address:</h5>
//                                 </div>
//                             </div>

//                             <div className="app">
//                                 <Formik
//                                     initialValues={{ email: "", name: '', lastname: "", phonenumber: "", addressline1: "", addressline2: "", addressline3: '', postalcode: "", state: "", country: "", delivery: "" }}
//                                     onSubmit={async (values) => {
//                                         getcheckoutdata(values);
//                                     }}
//                                     validationSchema={Yup.object().shape({
//                                         email: Yup.string().email().required("Required"),
//                                         name: Yup.string().required("Required"),
//                                         lastname: Yup.string().required("Required"),
//                                         phonenumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
//                                         addressline1: Yup.string().required("Required"),
//                                         addressline2: Yup.string().required("Required"),
//                                         addressline3: Yup.string().required("Required"),
//                                         postalcode: Yup.string()
//                                             .length(5)
//                                             .matches(/^[0-9]{5}/)
//                                             .required(),
//                                         state: Yup.string().required("Required"),
//                                         country: Yup.string().required("Required"),
//                                         delivery: Yup.string().required("Required"),
//                                     })}
//                                 >
//                                     {(props) => {
//                                         const {
//                                             values,
//                                             touched,
//                                             errors,
//                                             dirty,
//                                             isSubmitting,
//                                             handleChange,
//                                             handleBlur,
//                                             handleSubmit,
//                                             handleReset,
//                                             setFieldValue
//                                         } = props;
//                                         return (
//                                             <form onSubmit={handleSubmit} style={{ width: 858 }}>

//                                                 <input
//                                                     id="email"
//                                                     placeholder="Enter your email"
//                                                     type="text"
//                                                     style={{ marginTop: 15 }}
//                                                     value={values.email}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.email && touched.email
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.email && touched.email && (
//                                                     <div className="input-feedback">{errors.email}</div>
//                                                 )}


//                                                 <input
//                                                     id="name"
//                                                     placeholder="Enter your name"
//                                                     type="text"
//                                                     style={{ marginTop: 20 }}
//                                                     value={values.name}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.name && touched.name
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.name && touched.name && (
//                                                     <div className="input-feedback">{errors.name}</div>
//                                                 )}


//                                                 <input
//                                                     id="lastname"
//                                                     placeholder="Enter your lastname"
//                                                     type="text"
//                                                     style={{ marginTop: 20 }}
//                                                     value={values.lastname}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.lastname && touched.lastname
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.lastname && touched.lastname && (
//                                                     <div className="input-feedback">{errors.lastname}</div>
//                                                 )}

//                                                 <input
//                                                     id="addressline1"
//                                                     placeholder="Enter your addressline1"
//                                                     type="text"
//                                                     style={{ marginTop: 20 }}
//                                                     value={values.addressline1}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.addressline1 && touched.addressline1
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.addressline1 && touched.addressline1 && (
//                                                     <div className="input-feedback">{errors.addressline1}</div>
//                                                 )}

//                                                 <input
//                                                     id="addressline2"
//                                                     placeholder="Enter your addressline2"
//                                                     type="text"
//                                                     style={{ marginTop: 20 }}
//                                                     value={values.addressline2}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.addressline2 && touched.addressline2
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.addressline2 && touched.addressline2 && (
//                                                     <div className="input-feedback">{errors.addressline2}</div>
//                                                 )}

//                                                 <input
//                                                     id="addressline3"
//                                                     placeholder="Enter your addressline3"
//                                                     type="text"
//                                                     style={{ marginTop: 20 }}
//                                                     value={values.addressline3}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.addressline3 && touched.addressline3
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.addressline3 && touched.addressline3 && (
//                                                     <div className="input-feedback">{errors.addressline3}</div>
//                                                 )}


//                                                 <input
//                                                     id="postalcode"
//                                                     placeholder="Enter your postalcode"
//                                                     type="number"
//                                                     style={{ marginTop: 20 }}
//                                                     value={values.postalcode}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.postalcode && touched.postalcode
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.postalcode && touched.postalcode && (
//                                                     <div className="input-feedback">{errors.postalcode}</div>
//                                                 )}

//                                                 <input
//                                                     id="state"
//                                                     placeholder="Enter your state"
//                                                     type="text"
//                                                     style={{ marginTop: 20, width: 400 }}
//                                                     value={values.state}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.state && touched.state
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.state && touched.state && (
//                                                     <div className="input-feedback">{errors.state}</div>
//                                                 )}


//                                                 <input
//                                                     id="country"
//                                                     placeholder="Enter your country"
//                                                     type="text"
//                                                     style={{ marginTop: 20, width: 400, marginLeft: 15 }}
//                                                     value={values.country}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.country && touched.country
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.country && touched.country && (
//                                                     <div className="input-feedback">{errors.country}</div>
//                                                 )}

//                                                 <input
//                                                     id="phonenumber"
//                                                     placeholder="Enter your phonenumber"
//                                                     type="tel"
//                                                     style={{ marginTop: 20 }}
//                                                     value={values.phonenumber}
//                                                     onChange={handleChange}
//                                                     onBlur={handleBlur}
//                                                     className={
//                                                         errors.phonenumber && touched.phonenumber
//                                                             ? "text-input error"
//                                                             : "text-input"
//                                                     }
//                                                 />
//                                                 {errors.phonenumber && touched.phonenumber && (
//                                                     <div className="input-feedback">{errors.phonenumber}</div>
//                                                 )}


//                                                 <label className="name">
//                                                     <input
//                                                         type="radio"
//                                                         name="COD"
//                                                         id="COD"
//                                                         style={{ marginTop: 20 }}
//                                                         defaultValue="COD"
//                                                         checked={values.delivery === "COD"}
//                                                         onChange={() => setFieldValue("delivery", "COD")}
//                                                     />
//                                                     COD
//                                                 </label>

//                                                 <button type="submit" disabled={isSubmitting} style={{ marginTop: 20 }}>
//                                                     Submit
//                                                 </button>


//                                             </form>
//                                         );
//                                     }}
//                                 </Formik>
//                             </div>

//                         </div>
//                         <div className="col-md-4">
//                             <div className="card mb-4">
//                                 <div className="card-header py-3">
//                                     <h5 className="mb-0">Summary</h5>
//                                 </div>
//                                 <div className="card-body">
//                                     <ul className="list-group list-group-flush">
//                                         <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                                             Total Quantity
//                                             <span>{totalQuantity} Items</span>
//                                         </li>

//                                         <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
//                                             discount
//                                             <span>5%</span>
//                                         </li>
//                                         <hr></hr>

//                                         <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
//                                             <div>
//                                                 <strong>Total amount</strong>
//                                             </div>
//                                             <span>
//                                                 <strong>₹{totalPrice}</strong>
//                                             </span>
//                                         </li>
//                                     </ul>


//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <ToastContainer />
//         </div>

//     )
// }
