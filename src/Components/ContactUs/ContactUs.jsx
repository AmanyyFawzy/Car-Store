import React from 'react'
import GooglePlayImg from '../../assets/googlePlay.svg'
import AppStoreImg from '../../assets/appStore.svg'
import ImgContact from '../../assets/contact-img.svg'
import './ContactUs.modules.css'

export default function ContactUs() {
  return (
    <>
      <section className='contact mt-3 container '>

        <section className="row">
            {/*left section*/}
            <section className="col-md-6 py-5 d-flex flex-column align-items-start align-items-md-start text-start text-md-start text-center align-items-center">
                {/*title Section */}
                <div className="about-contact">
                    <h2 className='fw-semibold'>Download Rentcars<br/> App for <span className='text-primary'>FREE</span></h2>
                    <p className='py-2'>For faster, easier booking and exclusive deals.</p>
                    <div className="contact-ways">
                        <img src={GooglePlayImg} alt="google play img" className='me-4'/>
                        <img src={AppStoreImg} alt="App store img" />
                    </div>
                </div>

                {/*form*/}
                <form action="" className='mt-5'>
                    <input type="text" placeholder='Name' className='rounded-5'/>
                    <input type="text" placeholder='Phone Number' className='rounded-5'/>
                    <input type="email" placeholder='Email' className='rounded-5'/><br />
                    <button className='btn btn-primary py-2 px-5 fw-bold d-flex mt-2 m-auto'>Send</button>
                </form>
            </section>
            
            {/*right section*/}
            <section className="col-md-6 position-relative d-none d-lg-block">
                <img src={ImgContact} alt="contact App" className=' position-absolute  bottom-0'/>
            </section>
        </section>

      </section>
    </>
  )
}
