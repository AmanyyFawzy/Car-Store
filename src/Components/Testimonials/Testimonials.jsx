import React from 'react'
import Person1 from '../../assets/person1.svg'
import Person2 from '../../assets/person2.svg'
import Person3 from '../../assets/person3.svg'
import Person4 from '../../assets/person4.svg'
import StarsImg from '../../assets/stars.svg'
import './Testimonials.modules.css'

const opinions=[
    {img:Person1,evaluationNum:'5.0',name:"Emily Thompson" ,country:"From New York"},
    {img:Person2,evaluationNum:'8.0',name:"Charlie Johnson" ,country:"From Canada"},
    {img:Person3,evaluationNum:'9.0',name:"Ella Jackson" ,country:"From France"},
    {img:Person4,evaluationNum:'8.5',name:"Leo Harrison" ,country:"Italy"},
]

export default function Testimonials() {
  return (
    <>
       <section className='py-5'>
            {/*header section*/}
            <div className="header d-flex flex-column align-items-center mb-3">
                <button className='text-primary py-3 px-4 fw-medium'>TESTIMONIALS</button>
                <p className='fw-medium pt-1'>What peole say about us?</p>
            </div>

            {/*content section*/}
            <section className='opinion my-5'>
                {opinions.map((opinion,index)=>(
                    <div key={index} className='opinion-card d-flex align-items-center me-4 bg-body-tertiary rounded-5'>
                        
                        {/*persons img */}
                        <div>
                            <img src={opinion.img} alt="person image"/>
                        </div>

                        {/*opinion details*/}
                        <div className="opinion-details ms-4">
                            <h2>{opinion.evaluationNum}<span className='ms-2 fs-5'>Stars</span></h2>
                            <img src={StarsImg} alt="stars image" className='star-img'/>
                            <p className='my-4 lh-base'>“I feel very secure when using<br/> caretall's services. Your customer<br/> care team is very enthusiastic and <br/>the driver is always on time.”</p>
                            <h4 className='fw-normal'>{opinion.name}</h4>
                            <h6 className='fw-light'>{opinion.country}</h6>
                        </div>
                    </div>

                ))}
            </section>
       </section>
    </>
  )
}
