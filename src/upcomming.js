import { useEffect } from 'react';
import { Formik } from "formik";
import * as Yup from "yup";
import { red } from '@material-ui/core/colors';
import { useState } from 'react';
import { UploadFile } from '@mui/icons-material';
import { width } from '@mui/system';
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

let count = 0

let count1 = 0
let array1 = [];
let array2 = [];
let array3 = [];



export default function Upcomming() {


    useEffect(() => {
        count++
        if (count == 1) {
            const addeddata = JSON.parse(localStorage.getItem('upcommingsneakers'));
            // console.log(addeddata);
            if (addeddata) {
                array1 = addeddata
                setData(array1)
            }
        }
    }, [array1])



    useEffect(() => {
        count++
        if (count1 == 1) {
            const addeddata2 = JSON.parse(localStorage.getItem('sneakers'));
            // console.log(addeddata);
            if (addeddata2) {
                array3 = addeddata2
                setData1(array3)
            }
        }
    }, [array3])



    const [showimage, setShowimage] = useState(array2)

    const getBase64 = (file) => {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log('RESULT', reader.result)
            array2.push(reader.result)
            console.log(array2);
        }
        setShowimage(array2);
    }

    const uploadImage = (images) => {
        for (let i = 0; i < images.length; i++) {
            getBase64(images[i])
        }
    }


    const [name, setName] = useState('')
    const [price, setPrice] = useState('');
    const [file, setFile] = useState('');
    const [description, setDescription] = useState('');
    const [sku, setSku] = useState('')
    const [data, setData] = useState();
    const [data1, setData1] = useState();
    const [date, setDate] = useState('')
    const [id, setId] = useState(Date.now());
    // const todaysDate = new Date();
    let currentDate = Date.now();



    const getdata = (data) => {
        setName(data.name);
        setPrice(data.price);
        setFile(data.file);
        setSku(data.sku);
        setDescription(data.description);
        setDate(data.date);
        const newshoesdata = { name: data.name, price: data.price, file: array2, sku: data.sku, id: id, description: data.description, date: data.date }
        const seconddata = { name: data.name, price: data.price, file: array2, sku: data.sku, id: id, description: data.description }




        const str = data.date;
        const date = new Date(str);
        // ✅ Get timestamp in Milliseconds
        const timestamp = date.getTime();
        console.log(timestamp); // 👉️ 1650931200000
        // ✅ If you need to convert to Seconds
        const timestampSeconds = Math.floor(date.getTime() / 1);
        console.log(timestampSeconds);
        console.log(currentDate)

        if (currentDate < timestampSeconds) {
            array1.push(newshoesdata)
            setData(array1)
            console.log(array1);
            localStorage.setItem('upcommingsneakers', JSON.stringify(array1))
        } else {
            array3.push(seconddata)
            setData1(array3)
            console.log(array3);
            localStorage.setItem('sneakers', JSON.stringify(array3))
        }
    }


    const upcomming = () => {
        window.location.href = './upcomming'
    }

    return (
        <div>

            <div className='upcooming'>
                <h1 onClick={upcomming}>Upcomming Shoes form</h1>
            </div>
            <Formik
                initialValues={{ name: "", price: "", file: array2, description: "", sku: "", date: "", data: [] }}
                onSubmit={(values, { setSubmitting }) => {
                    getdata(values);
                    // window.location.href = './upcomming'
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required("name Required"),
                    price: Yup.string()
                        .required('Price required'),
                    // file: Yup.string()
                    //     .required('Image required'),
                    description: Yup.string()
                        .required('Description required'),
                    sku: Yup.string()
                        .required('sku required'),
                })}

            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        onClick,
                    } = props;
                    return (
                        <>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">name</label>
                                <input
                                    name="name"
                                    type="text"
                                    placeholder="Enter your name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.name && touched.name && "error"}
                                />
                                {errors.name && touched.name && (
                                    <div className="input feedback">{errors.name}</div>
                                )}


                                <label htmlFor="sku">Skucode</label>
                                <input
                                    name="sku"
                                    type="text"
                                    placeholder="Enter your sku"
                                    value={values.sku}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.sku && touched.sku && "error"}
                                />
                                {errors.sku && touched.sku && (
                                    <div className="input feedback">{errors.sku}</div>
                                )}

                                <label htmlFor="price">price</label>
                                <input
                                    name="price"
                                    type="number"
                                    placeholder="Enter your price"
                                    value={values.price}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.price && touched.price && "error"}
                                />
                                {errors.price && touched.price && (
                                    <div className="input feedback">{errors.price}</div>
                                )}

                                <label htmlFor="price">launching Date</label>
                                <input
                                    name="date"
                                    type="date"
                                    placeholder="Enter your price"
                                    value={values.date}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={errors.date && touched.date && "error"}
                                />
                                {errors.date && touched.date && (
                                    <div className="input feedback">{errors.date}</div>
                                )}


                                <label htmlFor="image">Product Images</label>
                                <input id="file" name="file" className={`form-control ${touched.file && errors.file ? "is-invalid" : ""
                                    }`} type="file" onChange={(event) => {
                                        uploadImage(event.target.files);
                                    }} multiple />
                                <div className='showimage'>
                                    {
                                        showimage.length > 0 && showimage.map((img) => {
                                            return (
                                                <img src={img} style={{ width: "100px" }} />
                                            )
                                        })
                                    }
                                </div>
                                {errors.price && touched.price && (
                                    <div className="input feedback">{errors.price}</div>
                                )}

                                <label htmlFor="description">description</label>
                                <textarea
                                    name="description"
                                    type="text"
                                    placeholder="Enter your description"
                                    value={values.description}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    style={{ width: "100%" }}
                                    className={errors.description && touched.description && "error"}
                                />
                                {errors.description && touched.description && (
                                    <div className="input feedback">{errors.description}</div>
                                )}

                                <div className='submit'>

                                    <button type="submit" disabled={isSubmitting}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </>
                    );
                }}
            </Formik>
        </div>
    )
}
