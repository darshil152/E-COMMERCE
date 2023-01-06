import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';



export default function Sample() {

  const [data, setData] = useState([])
  // const date = new Date().to
  


  const config = {
    method: 'get',
    url: 'https://newsapi.org/v2/everything?q=keyword&apiKey=b352ebf27d104cdabcd64d00575651e2',
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
                <div class="image"><img src={items.urlToImage} alt="ls-sample1" /></div>
                <figcaption>
                  <div class="date"><span class="day">4</span><span class="month">Jan</span></div>
                  <h3>{items.title}</h3>
                  <p>
                    <a href={items.url} target="_blank" >{items.url} </a>
                  </p>
             
                </figcaption>
              </figure>
            </div>
          )
        })
      }
    </div>

  )
}
