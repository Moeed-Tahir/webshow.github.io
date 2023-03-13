import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import img1 from "../File/assets/Card-carousle/5.webp"
import img2 from "../File/assets/Card-carousle/6.webp"
import img3 from "../File/assets/Card-carousle/7.webp"
import img4 from "../File/assets/Card-carousle/8.webp"
import img5 from "../File/assets/Card-carousle/9.webp"
import img6 from "../File/assets/Card-carousle/10.webp"
import img7 from "../File/assets/Card-carousle/11.webp"
import img8 from "../File/assets/Card-carousle/12.webp"
import img9 from "../File/assets/Card-carousle/13.webp"
import "./Cardcarousle.css"
import {Link } from "react-router-dom"

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        }
      ]
    };
    
  
    return (
      <div className="slider">
        <h1>Upcomming Products</h1>
        <Slider {...settings}>
          <div className="slide">
            <div className="slidercard">
              <img src={img1} />
              <h2>Shoes</h2>
              <h5 className="desc">Description</h5>
              <Link to ="/file1"><button>Go Somewhere</button></Link>
              </div>
          </div>
          <div className="slide">
            <div className="slidercard">
          <img src={img2}/>
              <h2>HeadPhone</h2>
              <h5 className="desc">Description</h5>
              <Link to="/file2"> <button>Go Somewhere</button></Link>
              </div>
          </div>
          <div className="slide">
            <div className="slidercard">
          <img src={img3}/>
              <h2>Watch</h2>
              <h5 className="desc">Description</h5>
              <Link to="/file3"> <button>Go Somewhere</button></Link>
              </div>
          </div >
          <div className="slide">
            <div className="slidercard"> 
          <img src={img4}/>
              <h2>Face Tube</h2>
              <h5 className="desc">Description</h5>
              <Link to="/file4"> <button>Go Somewhere</button></Link>
              </div>
          </div>
          <div className="slide">
            <div className="slidercard">
          <img src={img5}/>
              <h2>Bag</h2>
              <h5 className="desc">Description</h5>
              <Link to="/file5"> <button>Go Somewhere</button></Link>
              </div>
          </div>
          <div className="slide">
            <div className="slidercard">
          <img src={img6} />
              <h2>Charging Car</h2>
              <h5 className="desc">Description</h5>
              <Link to="/file6"> <button>Go Somewhere</button></Link>
              </div>
          </div>
          <div className="slide">
            <div className="slidercard">
          <img src={img7} />
              <h2>Title</h2>
              <h5 className="desc">Description</h5>
              <Link to="/file7"> <button>Go Somewhere</button></Link>
              </div>
          </div>
          <div className="slide">
            <div className="slidercard">
          <img src={img8} />
              <h2>Sensor charger</h2>
              <h5 className="desc">Description</h5>
              <Link to="/file8"> <button>Go Somewhere</button></Link>
              </div>
          </div>
          <div className="slide">
            <div className="slidercard">
          <img src={img9} />
              <h2>Title</h2>
              <h5 className="desc">Description</h5>
              <Link to="/file9"> <button>Go Somewhere</button></Link>
              </div>
          </div>
        </Slider>
      </div>
    );
  }
}