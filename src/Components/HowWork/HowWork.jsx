import React from 'react'
import ImgBar1 from '../../assets/Bottom-bar-5.svg'
import ImgBar2 from '../../assets/Bottom-bar-2.svg'
import ImgBar3 from '../../assets/Bottom-bar-3.svg'
import ImgBar4 from '../../assets/Bottom-bar-4.svg'
import ImgBar5 from '../../assets/Bottom-bar-1.svg'
import './HoWork.modules.css'

const steps=[
    {icon:<i className="fa-solid fa-location-dot"></i>,title:"Choose location",desc:"Choose your and find your best car"},
    {icon:<i className="fa-solid fa-calendar-days"></i>,title:"Pick-up date",desc:"Select your pick up date and time to book your car"},
    {icon:<i className="fa-solid fa-car"></i>,title:"Book your car",desc:"Book your car and we will deliver it directly to you"}
]


export default function HowWork() {
  return (
    <>
       <section className='mt-5 pb-4' id="howWork">
            {/*header section*/}
            <div className="header d-flex flex-column align-items-center pt-5">
                <button className='text-primary py-3 px-3 fw-medium'>HOW IT WORK</button>
                <p className='fw-medium pt-1'>Rent with following 3 working steps</p>
            </div>

            {/*Rent Steps*/}
            <div className="row d-flex justify-content-center py-3">
                {steps.map((step,index)=>(      
                    <div key={index} className="col-md-2 text-center pt-5">
                        <div className='icon-container rounded fs-3 text-primary d-inline py-3 px-4'>
                            {step.icon}
                        </div>
                        <h5 className='pt-4'>{step.title}</h5>
                        <p style={{fontSize:"14px",color:"#6D6D6D"}}>{step.desc}</p>
                    </div>       
                ))}
            </div>
           
           {/*bottom bar*/}
           <section className="bottom-bar-wrapper position-relative pt-5">
                <div className="bottom-bar d-flex mt-5">
                    <img src={ImgBar1} alt="img" />
                    <img src={ImgBar2} alt="img" />
                    <img src={ImgBar3} alt="img" />
                    <img src={ImgBar4} alt="img" />
                    <img src={ImgBar5} alt="img" />
                    {/* تكرار نفس الصور عشان تعمل تأثير اللوب */}
                    <img src={ImgBar1} alt="img" />
                    <img src={ImgBar2} alt="img" />
                    <img src={ImgBar3} alt="img" />
                    <img src={ImgBar4} alt="img" />
                    <img src={ImgBar5} alt="img" />
                </div>
           </section>

       </section>
    </>
  )
}
