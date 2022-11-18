import React, { useState, useEffect } from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";

let temparray1 = []
let count = 0 



export default function Login() {

    useEffect(() => {
        count++
        if (count == 1) {
          const newarray = JSON.parse(localStorage.getItem('login'));
          if (newarray) {
            temparray1 = newarray
            setNewData(temparray1)
            console.log(temparray1);
          }
        }
      }, [temparray1]);
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allNewData, setNewData] = useState([]);

    const getData=(data)=>{
        console.log(data)
        setEmail(data.email)
        setPassword(data.password)
        
        const newData = {email:data.email , password:data.password};
        temparray1.push(newData)
        setNewData(temparray1); 
        localStorage.setItem('login',JSON.stringify(allNewData));
        // window.location.href = './addproduct'
        setEmail('')
        setPassword('')

    }

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            password: Yup.string()
                .min(8, "Minimum 8 characters")
                .required("Required!"),
            }),

        onSubmit: values => {
            getData(values)
            // localStorage.setItem('items', JSON.stringify(value))
        }
    });


    return (
        <div className='login'>
            <div className="App">
                <h1>login form</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.email && formik.touched.email && (
                            <p>{formik.errors.email}</p>
                        )}
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        {formik.errors.password && formik.touched.password && (
                            <p>{formik.errors.password}</p>
                        )}
                    </div>
                    
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
