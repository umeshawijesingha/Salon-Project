import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import img14 from "../assets/img_hair_keratin.png";
const Events = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <h1>Upcoming Events</h1>

        <div class="card mb-3" style={{"max-width": "70%","margin":"2% 10% 2% 20%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img14} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">Keratin Treatement</h5>
              <p class="card-text">
              By making your hair more resilient and less likely to break, We will delivers you the greatest hair restoration therapy, giving you voluminous, thicker-looking hair! In a flash, breathe fresh life into your damaged, lifeless hair.  
              </p>
              <a href="#" class="btn btn-primary">
                Book Now
              </a>
      </div>
    </div>
  </div>
</div>



<div class="card mb-3" style={{"max-width": "70%","margin":"2% 10% 2% 20%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img14} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">Keratin Treatement</h5>
              <p class="card-text">
              By making your hair more resilient and less likely to break, We will delivers you the greatest hair restoration therapy, giving you voluminous, thicker-looking hair! In a flash, breathe fresh life into your damaged, lifeless hair.  
              </p>
              <a href="#" class="btn btn-primary">
                Book Now
              </a>
      </div>
    </div>
  </div>
</div>



<div class="card mb-3" style={{"max-width": "70%","margin":"2% 10% 2% 20%"}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={img14} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
      <h5 class="card-title">Keratin Treatement</h5>
              <p class="card-text">
              By making your hair more resilient and less likely to break, We will delivers you the greatest hair restoration therapy, giving you voluminous, thicker-looking hair! In a flash, breathe fresh life into your damaged, lifeless hair.  
              </p>
              <a href="#" class="btn btn-primary">
                Book Now
              </a>
      </div>
    </div>
  </div>
</div>


    </div>
  )
}

export default Events