import React from 'react'
import LogoImg from '../../assets/logo-light.svg'
import './Footer.modules.css'

export default function () {
  return (
      <footer className="footer text-light">
          <div className="container">
              <div className="row">
                  {/*col1*/}
                  <div className="col-lg-4 footer-section">
                      {/*Logo Section*/}
                      <div className="logo-part d-flex align-items-center">
                        <img src={LogoImg} alt="logo image" className="logo-img me-3"/><span className='fw-bold'>RENTCARS</span>
                      </div>
                      <section className="d-flex flex-column mt-4">
                          <div className="contact-details">
                            <i className="fa-solid fa-location-dot"></i><p>25566 Hc 1, Glenallen,<br/> Alaska, 99588, USA</p>
                          </div>

                          <div className="contact-details">
                            <i className="fa-solid fa-phone"></i><p>+603 4784 274 12</p>
                          </div>

                          <div className="contact-details">
                            <i className="fa-solid fa-envelope"></i><p>rentcars@gmail.com</p>
                          </div>
                          </section>
                  </div>
                  
                  {/*col2*/}
                  <div className="col-lg-2 col-md-6 footer-section">
                      <h3>Our Products</h3>
                      <ul className="footer-links">
                          <li><a href="#">Career</a></li>
                          <li><a href="#">Car</a></li>
                          <li><a href="#">Packages</a></li>
                          <li><a href="#">Features</a></li>
                          <li><a href="#">Priceline</a></li>
                      </ul>
                  </div>

                  {/*col3*/}
                  <div className="col-lg-2 col-md-6 footer-section">
                      <h3>Resourse</h3>
                      <ul className="footer-links">
                          <li><a href="#">Download</a></li>
                          <li><a href="#">Help Centre</a></li>
                          <li><a href="#">Guides</a></li>
                          <li><a href="#">Partner Network</a></li>
                          <li><a href="#">Cruises</a></li>
                          <li><a href="#">Developer</a></li>
                      </ul>
                  </div>

                  {/*col4*/}
                  <div className="col-lg-2 col-md-6 footer-section">
                      <h3>About Rentcars</h3>
                      <ul className="footer-links">
                          <li><a href="#">Why Choose us</a></li>
                          <li><a href="#">Our Story</a></li>
                          <li><a href="#">Investor Relations</a></li>
                          <li><a href="#">Press Center</a></li>
                          <li><a href="#">Advertise</a></li>
                      </ul>
                  </div>
 
                  {/*col5*/}
                  <div className="col-lg-2 footer-section">
                      <h3>Follow Us</h3>
                      <div className="icons-social">
                         <i className="fa-brands fa-square-facebook"></i>
                          <i className="fa-brands fa-square-twitter"></i>
                          <i className="fa-brands fa-square-youtube"></i>
                      </div>
   
                  </div>
              </div>

              <div className="footer-bottom">
                  <p>Copyright 2025 - Rentcars,All Rights Reserved.</p>
              </div>
          </div>
      </footer>  
  )
}
