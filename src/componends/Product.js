import React from 'react'
import { useEffect, useState } from 'react';


export default function Product() {


  const [buysitem, setBuysitem] = useState("Buy Now");
  useEffect(()=>{
          // let buy = {buysitem};                
  })


      const [additem, setAdditem] = useState("Add Item");


    const [data,setData]= useState([])
    useEffect(()=>{
    fetch("https://raw.githubusercontent.com/Rachit-veronica/api/master/data_product.json").then((result)=>{
        result.json().then((resp)=>{
            // console.warn("result",resp)
            setData(resp)
        })
    })
    },[])
    console.warn(data)


  return (
    <>
    {
      data.map((item)=>
          <div className="card">
      <img src="./image/img1.jpg" class="card-img-top" alt="..."/>
      <div class="card-body">
          <h5 class="card-title">{item.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">An item</li>
      </ul>
      <div class="card-body">
          {/* <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a> */}
          <button className='btn btn-dark' onClick={additem}>{additem}</button>
          <button className='btn btn-dark mx-3' onClick={buysitem}>{buysitem}</button>
      </div>
      </div>
      )
      } 
      </>
      )

}
