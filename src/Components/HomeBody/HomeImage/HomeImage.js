import React from "react";
import "./HomeImage.css";
import img1 from "../../../assets/img5.jpg";
import img2 from "../../../assets/img10.jpg";
import img3 from "../../../assets/img15.jpg";
import img4 from "../../../assets/img20.jpg";

function HomeImage() {
  return (
    <div>
      <div className="mainImage">
        <img
          src={img4}
          className="d-block h-250"
          style={{
            width: "100%",
            height: "700px",
            padding: "50px 100px 70px 70px",
          }}
          alt="..."
        />
        <div className="centered">
          <h3>Beauty For You...</h3>
          <p>
            We celebrates wellness and beauty in a tranquil setting. As our
            specialists work their magic to improve your appearance and
            uniqueness, sit back and unwind.
          </p>
          <button className="btn btn-secondary btn-lg">Make a Booking</button>
        </div>
      </div>
      <hr />
      <br />

      <div className="sub">
        <span className="w-text-content">
          Visit our salon to feel the &nbsp;
        </span>
        <br />
        <span className="w-text-content">
          sensation of beauty and style!&nbsp;
        </span>
        <p className="content">
          For both men and women, Parfois is a luxury hair salon that aims to
          produce works of art by using the most recent hair styling, colour,
          and design trends. With each visit, we promise to enhance your
          inherent attractiveness.
        </p>
      </div>

      <hr
        style={{
          width: "400px",
          margin: "auto",
          border: "1px solid",
          "margin-bottom": "50px",
        }}
      />

      <h1 style={{ fontFamily: "serif", "margin-bottom": "50px" }}>
        Our Services
      </h1>

      <div
        id="carouselExampleDark"
        className="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={img1}
              className="d-block h-250"
              style={{ width: "500px", height: "600px", "margin-left": "50px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5 className="service-desc">Hair Design & style</h5> */}

              <div className="serr">
                <div class="card">
                  <h5 className="card-header">Hair Design & style</h5>

                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      Our makeup professionals are eager to elevate your
                      appearance while keeping you true to yourself. We use a
                      variety of well-known and expensive makeup products. You
                      can stick with the cosmetics you like most or let our team
                      try out some new colors, textures, and trends.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item " data-bs-interval="20000">
            <img
              src={img1}
              className="d-block h-250"
              style={{ width: "500px", height: "600px", "margin-left": "50px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5 className="service-desc">Hair Design & style</h5> */}

              <div className="serr">
                <div class="card">
                  <h5 className="card-header">Hair Design & style</h5>

                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      Our makeup professionals are eager to elevate your
                      appearance while keeping you true to yourself. We use a
                      variety of well-known and expensive makeup products. You
                      can stick with the cosmetics you like most or let our team
                      try out some new colors, textures, and trends.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="30000">
            <img
              src={img1}
              className="d-block h-250"
              style={{ width: "500px", height: "600px", "margin-left": "50px" }}
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              {/* <h5 className="service-desc">Hair Design & style</h5> */}

              <div className="serr">
                <div class="card">
                  <h5 className="card-header">Hair Design & style</h5>

                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      Our makeup professionals are eager to elevate your
                      appearance while keeping you true to yourself. We use a
                      variety of well-known and expensive makeup products. You
                      can stick with the cosmetics you like most or let our team
                      try out some new colors, textures, and trends.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item" data-bs-interval="40000">
            <img
              src={img1}
              className="d-block h-250"
              style={{ width: "500px", height: "600px", "margin-left": "50px" }}
              alt="..."
            />
            
            <div className="carousel-caption d-none d-md-block">
              {/* <h5 className="service-desc">Hair Design & style</h5> */}

              <div className="serr">
                <div class="card">
                  <h5 className="card-header">Hair Design & style</h5>

                  <div className="card-body">
                    <h5 className="card-title">Special title treatment</h5>
                    <p className="card-text">
                      Our makeup professionals are eager to elevate your
                      appearance while keeping you true to yourself. We use a
                      variety of well-known and expensive makeup products. You
                      can stick with the cosmetics you like most or let our team
                      try out some new colors, textures, and trends.
                    </p>
                    <a href="#" className="btn btn-primary">
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default HomeImage;
