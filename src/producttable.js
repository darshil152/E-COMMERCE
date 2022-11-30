import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import Modal from 'react-modal';



export default function Producttable() {

    let abc = JSON.parse(localStorage.getItem('productdetail'))

    let handleEdit = () => {
        console.log('You click edit button')
    }

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
        // {
        //     name: "file",
        //     label: "file",
        //     options: {
        //         filter: true,
        //         sort: false,
        //         customBodyRender: (value, tableMeta, updateValue) => (
        //             <img src={value}  />
        //         )
        //     }
        // },
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
            label: "Delete",
            options: {
                customBodyRender: (value, tableMeta, rowData) => {
                    return (
                        <button onClick={(e) => handleShow(tableMeta.rowData)}>
                            View
                        </button>
                    );
                }
            }
        },
    ];

    const options = {
        filterType: 'checkbox',
    }

    const [viewmodal, setViewmodal] = useState(false);

    const handleShow = (data) => {
        setViewmodal(true)
        console.log(data)
    }

    return (
        <div>
            <Modal show={viewmodal}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
            </Modal>

            <MUIDataTable
                title={"Product List"}
                data={abc}
                columns={columns}
                options={options}
            />

        </div>


    )

}
