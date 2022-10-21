import React from 'react'
import './Login.css'
import { RiCloseLine } from "react-icons/ri";
const Login = () => {
  return (
    <div>
    <div className='logincover'>
      <div style={{"margin-top":"-550px","margin-left":"60%","position":"absolute","padding-right":"-200px"}}>
      <a href="/"><RiCloseLine style={{color:"#D67096"}}size={30}   ></RiCloseLine></a>
      </div>


        <div className="login">
        
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="front">
     
        <img className="front" src="https://t3.ftcdn.net/jpg/03/14/73/84/240_F_314738462_LwEMUBJVTDBhu4zQyxHbzriRnhOrxCi9.jpg" alt=""/>
        <div className="text">
        
        </div>
      </div>
      <div className="back">
        <img className="front" src="https://media.istockphoto.com/photos/portrait-of-beautiful-woman-with-a-misty-look-makeup-and-cosmetic-picture-id1179439661?b=1&k=20&m=1179439661&s=612x612&w=0&h=OuEcEMOqt1qEBbaxnQfibJrXtoSMju8WB9l3CFqlAHY=" alt=""/>
        <div className="text">
          
        </div>
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="titlename">Login</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="text"><a href="#">Forgot password?</a></div>
              <div className="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div className="text sign-up-text">Don't have an account? <label for="flip">Sigup now</label></div>
              <div className="text sign-up-text"> <label>Continue as a guest user</label></div>
            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="titlename">Signup</div>
        <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div className="text sign-up-text">Already have an account? <label for="flip">Login now</label></div>
              <div className="text sign-up-text"> <label >Continue as a guest user</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>
 
    </div>
    
    </div>
  )
}

export default Login