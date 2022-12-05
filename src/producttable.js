import React, { useState } from 'react';
import MUIDataTable from "mui-datatables";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ContactPageSharp } from '@mui/icons-material';


<<<<<<< HEAD

let handleEdit = () => {
    console.log('You click edit button')
}

const options = {
    filterType: 'checkbox',
}


export default function Producttable() {

=======

export default function Producttable() {

    let abc = JSON.parse(localStorage.getItem('productdetail'))

    let handleEdit = () => {
        console.log('You click edit button')
    }

>>>>>>> a62a810ae665eee760d2fc38f84b761d86e0737c
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
<<<<<<< HEAD
            label: "View",
            options: {
                customBodyRender: (value, tableMeta, rowData) => {
                    return (
                        <button onClick={(e) => handleShow(value)}>
=======
            label: "Delete",
            options: {
                customBodyRender: (value, tableMeta, rowData) => {
                    return (
                        <button onClick={(e) => handleShow(tableMeta.rowData)}>
>>>>>>> a62a810ae665eee760d2fc38f84b761d86e0737c
                            View
                        </button>
                    );
                }
            }
        },
<<<<<<< HEAD
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
    const [data,setData] = useState([])
    // const [viewmodal, setViewmodal] = useState(false);
   

    const handleShow = (data) => {
        window.location.href = '/addproduct/' + data;
      console.log(data)
      setData(data)
    //   setViewmodal(true)
    }

    const ondelete = (data) =>{
        console.log("i",data)
        const filteredPeople = abc.filter((abc =>abc.id !== data));
        setAbc(filteredPeople)
        localStorage.setItem("productdetail", JSON.stringify(filteredPeople));
        console.log(filteredPeople)
    }


    return (
  

        <div>    
        {/* <Modal show={viewmodal}>
=======
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
>>>>>>> a62a810ae665eee760d2fc38f84b761d86e0737c
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                </Modal.Footer>
<<<<<<< HEAD
            </Modal>        */}

=======
            </Modal>
>>>>>>> a62a810ae665eee760d2fc38f84b761d86e0737c

            <MUIDataTable
                title={"Product List"}
                data={abc}
                columns={columns}
                options={options}
            />
        </div>




    )

}
