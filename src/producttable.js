import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ContactPageSharp } from '@mui/icons-material';



let handleEdit = () => {
    console.log('You click edit button')
}

const options = {
    filterType: 'checkbox',
}


export default function Producttable() {

    const columns = [
        {
            name: "id",
            label: "id",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "productname",
            label: "productname",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "skucode",
            label: "skucode",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "price",
            label: "price",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "gender",
            label: "gender",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "discount",
            label: "discount",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "category",
            label: "category",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "file",
            label: "file",
            options: {
                filter: true,
                sort: false,
                customBodyRender: (value, tableMeta, rowData) => (
                    console.log(value)
                )
            }
        },
        // {
        //     name: "data",
        //     label: "Edit",
        //     options: {
        //         customBodyRender: (value, tableMeta, updateValue) => (
        //             <button onClick={()=>handleEdit(value, tableMeta)}>Edit</button>
        //         )
        //     }
        // },
        {
            name: "id",
            label: "Edit",
            options: {
                customBodyRender: (value, tableMeta, rowData) => {
                    return (
                        <button onClick={(e) => handleShow(value)}>
                            Edit
                        </button>
                    );
                }
            }
        },
        {
            name: "id",
            label: "View",
            options: {
                customBodyRender: (id) => {
                    return (
                        <button onClick={(e) => ondelete(id)}>
                            Delete
                        </button>
                    );
                }
            }
        },
    ];

    const [abc, setAbc] = useState(JSON.parse(localStorage.getItem('productdetail')));
    console.log(abc);
    const [data, setData] = useState([])
    // const [viewmodal, setViewmodal] = useState(false);


    const handleShow = (data) => {
        window.location.href = '/addproduct/' + data;
        console.log(data)
        setData(data)
        //   setViewmodal(true)
    }

    const ondelete = (data) => {
        console.log("i", data)
        const filteredPeople = abc.filter((abc => abc.id !== data));
        setAbc(filteredPeople)
        localStorage.setItem("productdetail", JSON.stringify(filteredPeople));
        console.log(filteredPeople)
    }


    return (

        <div>
            {/* <Modal show={viewmodal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>        */}


            <MUIDataTable
                title={"Product List"}
                data={abc}
                columns={columns}
                options={options}
            />
        </div>




    )

}