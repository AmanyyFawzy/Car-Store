import React from 'react'
import CarImg from '../../assets/car-chooseUs.svg'
import PriceIcon from '../../assets/price-icon.svg'
import driver from '../../assets/experience-driver-icon.svg'
import hour from '../../assets/24-hour.svg'
import technicalSupport from '../../assets/technical-support.svg'

const experiences=[
    {img:PriceIcon,title:"Best price guaranteed",desc:<>Find a lower price? We’ll refund you 100%<br/> of the difference.</>},
    {img:driver,title:"Experience driver",desc:<>Don’t have driver? Don’t worry, we have many <br/>experienced driver for you.</>},
    {img:hour,title:"24 hour car delivery",desc:<>Book your car anytime and we will deliver it <br/> directly to you.</>},
    {img:technicalSupport,title:"24/7 technical support",desc:<>Have a question? Contact Rentcars support <br/> any time when you have problem.</>}
]

export default function WhyChooseUs() {
  return (
    <>
      <section className='mt-5 pb-5' id="whyChooseUs">

        <div className="row d-flex align-items-center">
            {/*Image*/}
            <div className="col-md-6 d-none d-lg-block">
                <img src={CarImg} alt="car image" className='img-fluid'/>
            </div>

            {/*Content*/}
            <div className="col-md-6 px-5">

                {/*header section*/}
                <div className="header pt-5">
                    <button className='text-primary py-2 px-3 fw-medium'>WHY CHOOSE US</button>
                    <p className='fw-medium pt-1'>We offer the best experience<br/> with our rental deals</p>
                </div>
               
                {/*experiences content*/}
                <section className='pt-3'>
                    {experiences.map((experience,index)=>(
                        <div key={index} className='d-flex justify-content-start column-gap-4 align-items-center features-card'>
                            <div className='icon-container p-3 mb-3'> 
                                <img src={experience.img} alt="" />
                            </div>
                            <div>
                                <h5>{experience.title}</h5>
                                <p>{experience.desc}</p>
                            </div>
                        </div>

                    ))}
                </section>
            </div>
        </div>

      </section>
    </>
  )
}
