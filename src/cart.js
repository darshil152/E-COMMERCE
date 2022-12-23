import { FlareSharp } from '@mui/icons-material';
import React from 'react'
import { useEffect } from 'react';

export default function Cart() {


  const data = localStorage.getItem('finaldata') ? localStorage.getItem('finaldata') : [];
  const mixdata = localStorage.getItem('sneakers') ? JSON.parse(localStorage.getItem('sneakers')) : [];
  let [currentdata, setCurrentdata] = [];


  console.log(data, '--------------------', mixdata);
  

  useEffect(() => {
    console.log(data);
    for (let i = 0; i < mixdata.length; i++) {
      console.log('asdashgdjhgj');
      if (mixdata[i].id == data) {
        setCurrentdata(mixdata[i].id)
      }
    }
    console.log(currentdata);
  }, [currentdata])



  return (
    <div>

    </div>
  )
}
