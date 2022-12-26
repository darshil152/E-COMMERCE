import React from 'react'
import { useState } from 'react';
import { json } from 'react-router';

let uniquedatas = (localStorage.getItem('finaldata')) ? JSON.parse(localStorage.getItem('finaldata')) : [];

export default function Cart() {

  const [abc,setAbc] = useState([]);


  const deleteid = (data) =>{
    let filter = uniquedatas.filter((uniquedatas=> uniquedatas !== data));
    window.location.href = "./cart"
    setAbc(filter)
    localStorage.setItem('finaldata',JSON.stringify(filter))
    console.log(filter);
  } 


//   const ondelete = (data) =>{
//     console.log("i",data)
//     const filteredPeople = abc.filter((abc =>abc.id !== data));
//     setAbc(filteredPeople)
//     localStorage.setItem("productdetail", JSON.stringify(filteredPeople));
//     console.log(filteredPeople)
// }



  return (
    <>
      {
        uniquedatas.map((items) => {
          return (
            <div className='sadasdsadasd'>
              <h3>{items}</h3>
              <button onClick={()=>deleteid(items)}>Delete</button>
            </div>
          )
        })
      }
    </>
  )
}
