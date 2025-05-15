import React from "react"
import Home from "../Home/Home"
import PopularCars from "../PopularCars/PopularCars"
import Footer from "../Footer/Footer"
import HowWork from "../HowWork/HowWork"
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs"
import Testimonials from "../Testimonials/Testimonials"
import ContactUs from "../ContactUs/ContactUs"
import AllCars from "../AllProducts/AllCars"

export default function LandingPage() {
  return (
    <>
      <Home/>
      <PopularCars/>
      <HowWork/>
      <WhyChooseUs/>
      <Testimonials/>
      <ContactUs/>
      <Footer/>
    </>
  )
}
