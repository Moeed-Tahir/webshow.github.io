import React from "react";
import "./About.css";
import img1 from "./assets/11.jpg";
import img2 from "../File/assets/Team-member/1.jpg"
import img3 from "../File/assets/Team-member/2.jpg"
import img4 from "../File/assets/Team-member/3.jpg"
import img5 from "../File/assets/Team-member/4.jpg"
import Cards from "./Cards";
import Footer from "./Footer";

function About() {
  return (
    <div className="parentcontact">
         <div className="contactbox">
          <div className="contactbox1">
               <img src={img1} />
          </div>
          <div className="contactbox2">
            <h2>Welcome to our Site</h2>
            <h5>Hello we are the themes <br/>
            Established in 2004 <br/>
            AMERICAN
            </h5>
            <p>Ecommerce has come a long way since its humble beginnings and is now a major industry. It has revolutionized the way we do business and has made it possible for anyone to start their own online store. If you’re thinking of starting an online business, then ecommerce is a great option. There are many different platforms to choose from, so you’ll be sure to find one that suits your needs.</p>
            <h5>-By Mathew C Winter</h5>
            <h6>Founder <br/>
            (+1) 704-331-9678
            </h6>
          </div>
         </div>
         <div className="team">
              <h1>Meet Our Team</h1>
              <p>E-commerce also offers businesses a more efficient way to manage inventory and orders, and can help them save money on overhead costs. For these reasons, e-commerce is becoming an increasingly popular option for businesses of all sizes</p>
         </div>
         <div className="team-member">
          <div className="member">
              <img src={img2} />
              <h4>HALIE</h4>
              <h5>CEO & Co-Founder</h5>
          </div>
          <div className="member">
          <img src={img3} />
          <h4>JOHNSON</h4>
              <h5>Customer Care</h5>
          </div>
          <div className="member">
          <img src={img4} />
          <h4>TONY NAST</h4>
              <h5>Developer</h5>
          </div>
          <div className="member">
          <img src={img5} />
          <h4>HANTE DESIGN</h4>
              <h5>Designer</h5>
          </div>
         </div>
         <Footer/>
    </div>
  );
}

export default About;
