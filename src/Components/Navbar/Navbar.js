import React from 'react';
import './Navbar.css';
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm  navbar-dark me-auto">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <div className="nav justify-content-center">
      <ul className="navbar-nav me-auto">
      <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/about">About Us</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Services</a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link</a></li>
            <li><a className="dropdown-item" href="#">Another link</a></li>
            <li><a className="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/contact">Contact Us</a>
        </li>  
        <li className="nav-item">
          <a className="nav-link" href="/booking">Booking</a>
        </li>
        
      </ul>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar