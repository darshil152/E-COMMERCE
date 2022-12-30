
import { PlusOneTwoTone, Title } from '@mui/icons-material';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Data() {

  const [myData, setMyData] = useState([]);


  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) =>
        // console.log(response.data.products)
        setMyData(response.data.products)
      )
  }, []);


  return (
    <div className="grid">
      {myData.map((post) => {
        return (
          <div>
            <h2>{post.title}</h2>
            <p>{post.id}</p>
          </div>

        );
      })}
    </div>
  )
}
