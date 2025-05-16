import React, { useEffect, useState } from 'react';
import CarImg1 from '../../assets/car1.svg'
import CarImg2 from '../../assets/car2.svg'
import CarImg3 from '../../assets/car3.svg'
import CarImg4 from '../../assets/car4.svg'
import Pagination from '../Pagination/Pagination';
import axios from 'axios';

export default function AllCars() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage =28;

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

  const images = [CarImg1, CarImg2, CarImg3, CarImg4];
 
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="container my-5">

      {/*header section*/}
      <div className="header d-flex flex-column align-items-center">
          <button className='text-primary py-3 px-4 fw-medium'>POPULAR RENTAL DEALS</button>
          <p className='fw-medium pt-1'>Most popular cars rental deals</p>
      </div>

      {/*allcars*/}
      <div className='allcars row justify-content-start pt-5'>
        {currentProducts.map((product, index) => {
          const image = images[index % images.length];
          return (
            <div key={index} className="col-10 col-md-3 m-auto carProduct mb-4">
              <div className="product p-4 rounded-4">
                <img src={image} alt="car" className='w-100 mb-3' />
                <p className='fw-bold text-primary'><span>brand </span>: {product.car}</p>
                <p><span>car model</span> : {product.car_model}</p>
                <p><span>color</span> : {product.car_color}</p>
                <p><span>model year</span> : {product.car_model_year}</p>
                <p className='fs-5 fw-bold'><span className='fs-6'>Price</span> : {product.price}</p>
                <button className='btn btn-primary w-100 d-flex align-items-center justify-content-center mt-4'>
                  Rent Now <i className="fa-solid fa-arrow-right ms-2"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <Pagination productPerPage={productPerPage} length={products.length} handlePagination={handlePagination}/>
    </section>
  );
}
