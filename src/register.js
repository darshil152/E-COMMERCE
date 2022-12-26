import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { DataArray } from '@mui/icons-material';
import { dataRef } from './firebase';



const LoginSchema = Yup.object().shape({
    email: Yup.string()
        .email("Invalid email address format")
        .required("Email is required"),
    password: Yup.string()
        .min(3, "Password must be 3 characters at minimum")
        .required("Password is required"),
    confirmpassword: Yup.string().when("password", {
        is: val => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
            [Yup.ref("password")],
            "Both password need to be the same"
        )
    })
});

let registararray = [];
let count = 0

export default function Register() {

    useEffect(() => {
        count++
        if (count == 1) {
            const newregister = JSON.parse(localStorage.getItem('Register'));
            console.log(newregister)
            if (newregister) {
                registararray = newregister
                setNewData(registararray)
            }
        }
    }, [registararray]);



    let arraya = [];
    const [picure, setPicture] = useState(arraya);
    const [file, setFile] = useState("")


    const getBase64 = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            arraya.push(reader.result)
            console.log(arraya);
        }
        setPicture(arraya);
    }


    const uploadImage = (images) => {
        for (let i = 0; i < images.length; i++) {
            getBase64(images[i])
        }
    }


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [id, setId] = useState()
    const [savedata, setNewData] = useState([]);

    const olddatas = localStorage.getItem('Register') ? JSON.parse(localStorage.getItem('Register')) : []
    let oldflag = false






    const getData = (data) => {
        console.log(data)
        setName(data.name)
        setFile(data.file)
        setEmail(data.email)
        setPassword(data.password)
        setCpassword(data.confirmpassword)
        setId(data.id)

        let savedata = { name: data.name, email: data.email, password: data.password, cpassword: data.confirmpassword, id: Date.now(), file: arraya }
        console.log(savedata);

        for (let i = 0; i < olddatas.length; i++) {
            if (olddatas[i].email == data.email && olddatas[i].name == data.name) {
                oldflag = true;
            }
        }
        if (oldflag) {
            alert('Please try unique email and name');
            window.location.href = './register';
        } else {
            registararray.push(savedata)
            setNewData(registararray);
            localStorage.setItem('Register', JSON.stringify(registararray));
            window.location = './'
        }

    }


    // const acvxd = (data) => {
    //     dataRef.ref('Login User').set({
    //         name: data.name,
    //         email: data.email,
    //     }).catch(alert);
    // }




    return (
        <div className="container">
            <div className="row mb-5">
                <div className="col-lg-12 text-center">
                    <h1 className="mt-5">Register Form</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <Formik
                        initialValues={{ name: "", email: "", password: "", confirmpassword: "", file: arraya, }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            getData(values);
                            // acvxd(values);
                        }}
                    >
                        {({ touched, errors, isSubmitting, values, handleChange, handleBlur, }) => (
                            <Form>


                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <Field
                                        type="text"
                                        name="name"
                                        placeholder="Enter name"
                                        className={`form-control ${touched.name && errors.name ? "is-invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="name"
                                        className="invalid-feedback"
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        name="email"
                                        placeholder="Enter email"
                                        className={`form-control ${touched.email && errors.email ? "is-invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="email"
                                        className="invalid-feedback"
                                    />
                                </div>


                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <Field
                                        type="password"
                                        name="password"
                                        placeholder="Enter password"
                                        className={`form-control ${touched.password && errors.password ? "is-invalid" : ""
                                            }`}
                                    />
                                    <ErrorMessage
                                        component="div"
                                        name="password"
                                        className="invalid-feedback"
                                    />
                                </div>

                                <div className='form-group'>
                                    <label for="passowrd">Confirm Password</label>
                                    <input
                                        type="password"
                                        name="confirmpassword"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        value={values.confirmpassword}
                                    />
                                    <span class="error" style={{ color: "red" }}>
                                        {errors.confirmpassword}
                                    </span>
                                </div>


                                <div className="form-group">
                                    <lable>Profile picture</lable>
                                    <input id="file" name="file" className={`form-control ${touched.file && errors.file ? "is-invalid" : ""
                                        }`} type="file" onChange={(event) => {
                                            uploadImage(event.target.files);
                                        }} multiple />
                                    <div className="showimgae">
                                        {/* {console.log('first', showpreview)} */}
                                        {/* {
                                            picure.map((items, i) => {
                                                return (
                                                    <>
                                                        <img src={items} style={{ height: "100px" }} alt='noe' />
                                                    </>
                                                )
                                            })
                                        }  */}
                                    </div>
                                </div>



                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Please wait..." : "Submit"}
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div >
    )
}
