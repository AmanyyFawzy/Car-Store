import React from 'react'
import carImg from '../../assets/car-home.svg'
import googlePlay from '../../assets/googlePlay.svg'
import appStore from '../../assets/appStore.svg'
import './Home.modules.css'
import PopularCars from '../PopularCars/PopularCars'

export default function Home() {
  return (
    <>
      <section className='hero-section d-flex justify-content-between px-4'>

        {/*Home caption*/}
        <section className='d-flex ps-5 flex-column justify-content-center mb-5 text-lg-start flex-grow-1 align-items-center'>
          <h2 className='fw-bold mb-3'>Find, book and<br/>rent a car <span className='text-primary'>Easily</span></h2>
          <p>Get a car wherever and whenever you<br/> need it with your IOS and Android device.</p>
          <div className="buttons-communication mt-2 w-75 ms-4">
              <img src={googlePlay} alt="google play image" className='me-3'/>
               <img src={appStore} alt="app store image"/>
          </div>
        </section>

        {/*Home img*/}
        <section className='mt-5 d-none d-lg-block'>
           <img src={carImg} alt="car image" className='w-fluid'/>
        </section>
      </section>

    </>
  )
}
