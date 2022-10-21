import React from 'react'
import './ContactUs.css'
import {FaEnvelope} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";
import {MdLocationPin} from "react-icons/md"

const ContactUs = () => {
  return (
    <div>
        <div className="contact">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <MdLocationPin/>
          <div className="topic">Address</div>
          <div className="text-one">No.25 , Flower Road</div>
          <div className="text-two">Colombo</div>
        </div>
        <div className="phone details">
          <FaPhoneAlt/>
          <div className="topic">Phone</div>
          <div className="text-one">+94 77 893 5647</div>
          <div className="text-two">+94 71 434 5678</div>
        </div>
        <div className="email details">
          <FaEnvelope/>
          <div className="topic">Email</div>
          <div className="text-one">abc@gmail.com</div>
          <div className="text-two">info.abc@gmail.com</div>
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">Send us a message</div>
        <p>If you have any quries, you can send me message from here. It's a pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div className="input-box message-box" >
        <textarea placeholder="Message"></textarea>
        </div>
        <div className="button-contact">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>
    </div>
  )
}

export default ContactUs