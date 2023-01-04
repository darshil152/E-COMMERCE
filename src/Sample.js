import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



export default function Sample() {

  const [data, setData] = useState([])
  // const date = new Date().to
  


  const config = {
    method: 'get',
    url: 'https://api.goperigon.com/v1/all?source=cnn.com&sortBy=date&apiKey=17a6c68f-61ca-4de1-889e-b792cb50a8ad',
  };


  useEffect(() => {
    axios(config)
      .then(function (response) {
        console.log((response.data.articles));
        setData(response.data.articles)
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <div>
      {
        data.length > 0 && data.map((items, i) => {
          return (
            <div className='show'>
              <figure class="snip1493">
                <div class="image"><img src={items.imageUrl} alt="ls-sample1" /></div>
                <figcaption>
                  <div class="date"><span class="day">4</span><span class="month">Jan</span></div>
                  <h3>{items.title}</h3>
                  <p>
                  {items.url}
                    {/* <a href={items.url} target="_blank" >{items.url} </a> */}
                  </p>
                  {/* <footer>
                    <div class="views"><i class="ion-eye"></i>2,907</div>
                    <div class="love"><i class="ion-heart"></i>623</div>
                    <div class="comments"><i class="ion-chatboxes"></i>23</div>
                  </footer> */}
                </figcaption>
                <a href="#"></a>
              </figure>
            </div>
          )
        })
      }
    </div>

  )
}
