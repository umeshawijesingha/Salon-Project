import React from 'react'
import Header from '../Components/Header/Header'
import Navbar from '../Components/Navbar/Navbar'
import img2 from "../assets/hair-cutting.png";

const Offers = () => {
  return (
    <div>
          <Header/>
      <Navbar/>

        <h1>Special Offers</h1>
        <div className="row" style={{ padding: "10% 10% 2% 10%" }}>
       

        <div className="col-4">
          <div class="card">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">New Clients</h5>
              <p>We welcome new clients. Come visit us for the first time and receive 25% off your first appointment.</p>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div class="card">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Student Discount</h5>
             <p>Get 10% off on any service for a student (don't forget your student's card).</p>
            </div>
          </div>
        </div>

        <div className="col-4">
          <div class="card">
            <img src={img2} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Referral System</h5>
             <p>Refer a friend to Parfois Salon and receive up to 10% off your next visit. </p>
            </div>
          </div>
        </div>
      
      </div>


      <div className="row" style={{ padding: "10% 10% 2% 10%" }}>
       

       <div className="col-4">
         <div class="card">
           <img src={img2} class="card-img-top" alt="..." />
           <div class="card-body">
             <h5 class="card-title">Senior Citizens</h5>
             <p>Senior citizens can enjoy 25% off on all services. Offer available Monday to Wednesday.</p>
           </div>
         </div>
       </div>

       <div className="col-4">
         <div class="card">
           <img src={img2} class="card-img-top" alt="..." />
           <div class="card-body">
             <h5 class="card-title">Keratin Treatment</h5>
            <p>Get 15% off mini Keratin treatment to help fight frizz for a few weeks, including a blowout.</p>
           </div>
         </div>
       </div>

       <div className="col-4">
         <div class="card">
           <img src={img2} class="card-img-top" alt="..." />
           <div class="card-body">
             <h5 class="card-title">Kids' Thursday</h5>
            <p>Get up to 30% off for kids under 14 every Thursday.</p>
           </div>
         </div>
       </div>
     
     </div>
        </div>
  )
}

export default Offers