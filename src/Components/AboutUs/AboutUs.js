import React from "react";
import "./AboutUs.css";
import img1 from "../../assets/img3.jpg";
import img2 from "../../assets/img8.jpg";
import img3 from "../../assets/img9.jpg";
import img4 from "../../assets/img25.jpg";
import img5 from "../../assets/img28.jpg";

import { FaBuffer } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { TbStars } from "react-icons/tb";

const AboutUs = () => {
  return (
    <div>
      <div className="about-section">
        <h2>We are ...</h2>
        <h2>Professional in Hair Care and Beauty</h2>
        <p>
          Your experience is our top priority, and we strive to meet your needs
          and exceed your expectations.
        </p>
      </div>
      <div className="sub">
        <span className="w-text-content">Our Story &nbsp;</span>
        <br />
      </div>
      <div>
        <div
          className="row"
          style={{
            "background-color": "rgb(234, 234, 234)",
            padding: "100px",
            "padding-left": "80px",
            width: "90%",
            margin: "auto",
          }}
        >
          <div className="col-3 " style={{ "margin-right": "200px" }}>
            <img src={img1} style={{ width: "150%", height: "400px","object-fit":"cover" }} />
          </div>
          <div
            className="col-6 "
            style={{
              "text-align": "justify",
              "font-size": "18px",
              color: "grey",
            }}
          >
            <p style={{ "padding-left": "50px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Pellentesque massa placerat duis ultricies lacus sed turpis
              tincidunt id. Ipsum faucibus vitae aliquet nec ullamcorper sit
              amet risus nullam. Interdum posuere lorem ipsum dolor sit amet
              consectetur adipiscing elit. Interdum velit laoreet id donec
              ultrices tincidunt. Aliquam vestibulum morbi blandit cursus.
              Bibendum neque egestas congue quisque egestas diam in. In
              fermentum et sollicitudin ac orci phasellus egestas tellus. Amet
              nisl suscipit adipiscing bibendum est ultricies integer. Nulla
              pharetra diam sit amet nisl suscipit adipiscing bibendum. Enim
              diam vulputate ut pharetra sit amet aliquam. Mauris pellentesque
              pulvinar pellentesque habitant morbi tristique senectus et. Dolor
              magna eget est lorem. Sagittis id consectetur purus ut. Nisl
              pretium fusce id velit.
            </p>
          </div>
        </div>
      </div>
      <div className="sub">
        <span className="w-text-content">Our Vision &nbsp;</span>
        <br />

        <p className="content">
          we’re dedicated to providing superior skincare services and education
          to men and women of all ages. Our goal is to help each client achieve
          and maintain healthy skin because we believe every person deserves
          this luxury.
        </p>
      </div>

      <div>
        <div
          className="row"
          style={{
            "background-color": "rgb(234, 234, 234)",
            "padding-left": "100px",
            width: "100%",
            margin: "auto",
            "padding-top": "50px",
            "padding-bottom": "50px",
            "background-image":
              "url('https://www.pexels.com/photo/woman-in-white-crop-top-2092474/')",
          }}
        >
          <div className="col-3 " style={{ "margin-right": "200px" }}>
            <img src={img4} style={{ width: "150%", height: "400px" ,"object-fit":"cover"}} />
          </div>
          <div
            className="col-6 "
            style={{
              "text-align": "justify",
              "font-size": "18px",
              color: "grey",
            }}
          >
            <div className="sub">
              <span className="w-text-content">
                OWNER & Founder &nbsp;
                <h3>Kaycee Hartley</h3>
              </span>

              <p style={{ "padding-left": "50px", "margin-top": "-30px" }}>
                Kaycee has dedicated her entire Medical Aesthetics career to
                bringing the most innovative and effective treatments to the
                area. Her passion for staying current and educated in this
                growing field should reassure you that the standards are met and
                even surpassed here at Willow Med Spa & Salon. In this
                ever-changing industry, staying on trend and upholding the most
                current knowledge has always been her desire for the Willow
                team’s driving force. Kaycee invests in continuous education to
                always provide the best.
              </p>
            </div>
          </div>
        </div>
      </div>



      <div className="sub">
        <p className="content">
          Visit one of our salons and treat yourself to the beauty, style, and
          perfection We are a luxury hair salon practicing the art of beautiful
          hair and offering modern hair styling, coloring, and cutting services
          for men and women at very affordable prices. We strive to enhance your
          natural beauty with every visit. So if you want to have a totally new
          appearance, make a modern haircut, or change your hair color, our
          stylists will design your look and style that suits your needs.
        </p>
      </div>

      <h2 className="content" style={{ "font-size": "40px" }}>
            OUR TEAM
          </h2>
      
      <div
        className="row"
        style={{
          
          padding: "20px",
          "margin-bottom": "150px",
        }}
      >
        <div className="col-8">
          <div style={{"background-color":"black","height":"50px"}}></div>
          <p className="content" style={{ "font-size": "20px" ,"margin-top":"80px","padding-left":"10%"}}>
          Meet our knowledgeable and supportive team of experts who will guide you on the journey to your most beautiful self! Experience the relaxing oasis of Willow Med Spa & Salon through one-on-one treatments in our cozy private rooms where our team will help refresh your mind and rejuvenate your body.We invite you to experience our salon, where you can live, love and be true to yourself. Contact us today to request an appointment.
          </p>
        </div>
        <div className="col-4">
          <img src={img5} style={{"width":"450px","height":"450px","object-fit":"cover"}}/>
        </div>
      </div>


      <div
        className="row"
        style={{
          "background-color": "#CA6A8E",
          padding: "20px",
          "margin-bottom": "150px",
        }}
      >
        <div className="col-8">
          <h2 className="content" style={{ "font-size": "40px" }}>
            Ready to get high-level service and experience our professionalism?
          </h2>
        </div>
        <div className="col-4">
          <button
            className="btn btn-primary content"
            style={{
              "font-size": "20px",
              "margin-top": "40px",
              color: "white",
            }}
          >
            Book Now
          </button>
        </div>
      </div>

      <div>
        <div
          className="row"
          style={{
            "padding-left": "20%",
            "padding-right": "20%",
            "margin-bottom": "80px",
          }}
        >
          <div className="col-4">
            <FaBuffer size={50} />
            <h5 className="content">5 Branches</h5>
          </div>
          <div className="col-4">
            <FaUsers size={50} />
            <h5 className="content">50+ Staff</h5>
          </div>
          <div className="col-4">
            <TbStars size={50} />
            <h5 className="content">100% Ratings</h5>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default AboutUs;
