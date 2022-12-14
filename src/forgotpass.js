import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";



export default function Forgotpass() {

    
    const [email, setEmail] = useState('');

    const formik = useFormik({
        initialValues: {
            email: "",
        },

        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email format")
                .required("Required!"),
            
        }),

        onSubmit: values => {
               console.log(values)            
        }
    });

    
  return (
    <div className='login'>
            <div className="App">
                <h1>Forgot Password</h1>
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
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

