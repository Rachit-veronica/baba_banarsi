import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'bootstrap';

export default function Home() {


  // alert("sorry this website is under the development \n\n Please don't do any operation");
    

        const [buysitem, setBuysitem] = useState("Buy Now");
        useEffect(()=>{
                // let buy = {buysitem};                
        })


            const [additem, setAdditem] = useState("Add Item");


    const [data,setData]= useState([])
    useEffect(()=>{
    fetch("https://raw.githubusercontent.com/Rachit-veronica/api/master/data_home.json").then((result)=>{
        result.json().then((resp)=>{
          console.log(resp);
            setData(resp)
        })
    })
    },[])
    console.warn(data)
  return (
        <>

<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="./image/img1.jpg" className="d-block w-100" alt="..." height="500px"/>
    </div>
    <div className="carousel-item">
      <img src="./image/img2.jpg" className="d-block w-100" alt="..." height="500px"/>
    </div>
    <div className="carousel-item">
      <img src="./image/img3.jpg" className="d-block w-100" alt="..."height="500px"/>
    </div>
      <Link to='Shop'><button className='btn btn-primary' id='viewproduct'>View Product</button></Link>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            {
            data.map((item)=>
                <>
                <div className="card">
            <img src={item.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.about}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{item.price}</li>
            </ul>
            <div className="card-body">
                {/* <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a> */}
                <button className='btn btn-dark' onClick={additem}>{additem}</button>
                <button className='btn btn-dark mx-3' onClick={buysitem}>{buysitem}</button>
            </div>
            </div>
                </>
            )
            }
            </>
  )
}

