import React from 'react'
import MUIDataTable from "mui-datatables";

let data = JSON.parse(localStorage.getItem('Register'))
console.log(data)

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
        name: "name",
        label: "Name",
        options: {
            filter: true,
            sort: true,
        }
    },
    {
        name: "email",
        label: "email",
        options: {
            filter: true,
            sort: false,
        }
    },
    {
        name: "password",
        label: "password",
        options: {
            filter: true,
            sort: false,
        }
    },

];
const options = {
    filterType: 'checkbox',
};


export default function Table() {
    return (


        <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
        />
    )
}
