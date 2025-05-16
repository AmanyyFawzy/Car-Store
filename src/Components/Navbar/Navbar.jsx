import logoImg from '../../assets/logo.svg'

export default function Navbar() {
  return (
    <>
    <nav className="navbar pt-3">

        <div className="container d-flex justify-content-between align-items-center mt-1 ">
          {/*Logo Section*/}
          <div className="logo-part d-flex align-items-center">
            <img src={logoImg} alt="logo image" className="logo-img me-2"/><span className='fw-semibold text-primary '>RENTCARS</span>
          </div>

          {/*nav Lists*/}
          <ul className="navbar-nav d-none d-lg-flex flex-row">
            <li className="nav-item"><a className="nav-link px-3 " href="#">Become a renter</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#rentalDeals">Rental deals</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#howWork">How it work</a></li>
            <li className="nav-item"><a className="nav-link px-3" href="#whyChooseUs">Why choose us</a></li>
          </ul>
          
          {/*nav form*/}
          <form className="d-none d-lg-flex" role="search">
            <button className="btn me-2" type="submit">Sign in</button>
            <button className="btn btn-primary px-4" type="submit">Sign up</button>
          </form>

          {/*button toggle to responsive*/}       
          <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMobile"
            aria-controls="navbarMobile" aria-expanded="false" aria-label="Toggle navigation">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/*nav rsponsive*/}
        <div className="collapse navbar-collapse d-lg-none mt-2" id="navbarMobile">
        <ul className="navbar-nav text-center">
            <li className="nav-item"><a className="nav-link" href="#">Become a renter</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Rental deals</a></li>
            <li className="nav-item"><a className="nav-link" href="#">How it work</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Why choose us</a></li>
        </ul>
        <form className="d-flex justify-content-center mt-4" role="search">
            <button className="btn me-2" type="submit">Sign in</button>
            <button className="btn btn-primary" type="submit">Sign up</button>
        </form>
        </div>
        
    </nav>
    </>
  )
}
