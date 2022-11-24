import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";



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
                setNewData(newregister)
                console.log(newregister);
            }
        }
    }, [[registararray]])


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')
    const [id, setId] = useState()

    const [savedata, setNewData] = useState([])

    const getData = (data) => {
        console.log(data)
        setName(data.name)
        setEmail(data.email)
        setPassword(data.password)
        setCpassword(data.confirmpassword)
        setId(data.id)

        let savedata = { name: data.name, email: data.email, password: data.password, cpassword: data.confirmpassword, id: Date.now() }
        registararray.push(savedata)
        console.log(registararray)
        localStorage.setItem('Register', JSON.stringify(registararray));
        // setNewData(registararray);
        setName('')
        setEmail('')
        setPassword('')
        setCpassword('')

    }

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
                        initialValues={{ name: "", email: "", password: "", confirmpassword: "", }}
                        validationSchema={LoginSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            getData(values)

                        }}
                    >
                        {({ touched, errors, isSubmitting, values, handleChange, handleBlur }) => (
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
