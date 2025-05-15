import React, { useEffect, useState } from 'react';
import CarImg1 from '../../assets/car1.svg'
import CarImg2 from '../../assets/car2.svg'
import CarImg3 from '../../assets/car3.svg'
import CarImg4 from '../../assets/car4.svg'
import axios from 'axios';

export default function AllCars() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await axios.get("https://myfakeapi.com/api/cars/");
      setProducts(response?.data?.cars);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const images=[CarImg1,CarImg2,CarImg3,CarImg4]
  

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4">All Vehicles</h2>
                <div className='row justify-content-start pt-5'>
                    {products.map((product,index)=>{
                        const image = images[index % images.length];
                        return(
                            <>
                                <div key={index} className="col-md-3 m-auto carProduct mb-4">
                                    <div className="product p-4 rounded-4">
                                        <img src={image} alt="car" className='w-100 mb-3' />
                                        <p>brand : {product.car}</p>
                                        <p>car model : {product.car_model}</p>
                                        <p>color : {product.car_color}</p>
                                        <p>model year : {product.car_model_year}</p>
                                        <p className='text-red'>Price : {product.price}</p>
                                        <p>{product.availability}</p>
                                        <button className='btn btn-primary w-100 d-flex align-items-center justify-content-center mt-4'>Rent Now <i class="fa-solid fa-arrow-right ms-2"></i></button>
                                    </div>
                                </div>
                            </>
                        )

                    })}
                </div>
    </section>
  );
}
