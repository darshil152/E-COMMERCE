import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import firebase from './firebase';
import { click } from '@testing-library/user-event/dist/click';


export default function Forgotpass() {

    
//  const pressed = () => {
//     let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha');
//     let number = '+916353377827';
//     firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
//         let code = prompt('enter the otp','');
//         if(code == null) return;
//         e.cofirm(code).then(function(result){
//             console.log(result.user,'user');
//             document.querySelector('lable').textContent = result.user.phoneNumber + "number verified";
//         }).catch((error)=>{
//             console.log(error);
//         })
//     })
//  }
    
   
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
            //   pressed();         
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

