import React from 'react'
import './Header.css'
import { FaTwitter } from "react-icons/fa";
import {FaEnvelope} from "react-icons/fa";
import {FaPhoneAlt} from "react-icons/fa";

function Header() {
  return (
    <div>
        <div className="header">
          
          <div className="header-icon-menu">
         
            <FaEnvelope className="header-icon" size={20}/><span>gliz@gmail.com</span>
            <FaPhoneAlt className="header-icon" size={20}/><span>+94 75874268</span>
          </div>
            
        </div>
    </div>
  )
}

export default Header