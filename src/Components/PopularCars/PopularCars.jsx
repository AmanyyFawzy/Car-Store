import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import CarImg1 from '../../assets/car1.svg'
import CarImg2 from '../../assets/car2.svg'
import CarImg3 from '../../assets/car3.svg'
import CarImg4 from '../../assets/car4.svg'

import './PopularCars.modules.css'
import axios from 'axios';
import Pagination from '../Pagination/Pagination';

export default function PopularCars() {

    let[products,setProducts]=useState([])

    const getProducts=async()=>{
      try {
        let response=await axios.get("https://myfakeapi.com/api/cars/");
        setProducts(response?.data?.cars);
        
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(()=>{
        getProducts()
    },[])


    const images=[CarImg1,CarImg2,CarImg3,CarImg4]


    return (
    <>
        <section className="main container mb-5 mt-5" id="rentalDeals">

            {/*Search Component*/}
            <div className="input-container">
                <i className="fa-solid fa-location-dot"></i>
                <div className="input-search">
                    <input type="text" placeholder='search by Name' className='px-5'/>
                </div>
                <button className='btn btn-primary py-1 px-4 rounded'>Search</button>
            </div>
            
            {/*content of Section*/}
            <section className="carsProducts mt-5">

                {/*header section*/}
                <div className="header d-flex flex-column align-items-center">
                    <button className='text-primary py-3 px-4 fw-medium'>POPULAR RENTAL DEALS</button>
                    <p className='fw-medium pt-1'>Most popular cars rental deals</p>
                </div>

                {/*cards*/}
                <div className='row justify-content-start pt-5'>
                    {products.slice(0,4).map((product,index)=>{
                        const image = images[index % images.length];
                        return(
                            <>
                                <div key={index} className="col-10 col-md-3 m-auto carProduct">
                                    <div className="product p-4 rounded-4">
                                        <img src={image} alt="car" className='w-100 mb-3' />
                                        <p className='fw-bold text-primary'><span>brand </span>: {product.car}</p>
                                        <p><span>car model</span> : {product.car_model}</p>
                                        <p><span>color</span> : {product.car_color}</p>
                                        <p><span>model year</span> : {product.car_model_year}</p>
                                        <p className='fs-5 fw-bold'><span className='fs-6'>Price</span> : {product.price}</p>
                                        <button className='btn btn-primary w-100 d-flex align-items-center justify-content-center mt-4'>Rent Now <i className="fa-solid fa-arrow-right ms-2"></i></button>
                                    </div>
                                </div>
                               
                            </>
                        )

                    })}
                </div>

                {/* button display all cars*/}
                <div className="button text-center mt-5">
                    <button><Link to="AllCars" className='text-decoration-none'>Show More<i className="fa-solid fa-arrow-right ms-2"></i> </Link></button>
                </div>
            </section>
        </section>
    </>
  )
}
