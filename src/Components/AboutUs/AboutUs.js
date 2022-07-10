import React from 'react'
import './AboutUs.css'
import img1 from '../../assets/img3.jpg'
import img2 from '../../assets/img8.jpg'
import img3 from '../../assets/img9.jpg'
const AboutUs = () => {
  return (
    <div >
      
      <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 style={{"text-align":"center"}}>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src={img2} alt="Jane" style={{"width":"100%", "height":"300px"}}/>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={img1} alt="Mike" style={{"width":"100%", "height":"300px"}}/>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={img3} alt="John" style={{"width":"100%", "height":"300px"}}/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={img3} alt="John" style={{"width":"100%", "height":"300px"}}/>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default AboutUs