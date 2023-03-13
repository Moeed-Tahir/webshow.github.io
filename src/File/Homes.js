import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Homes.css";
import "./Comment.css";
import "./Footer.css"
import "./Round-div.css"
import "./Product1.css"
import img1 from './assets/1.png'
import img2 from './assets/2.png'
import img3 from './assets/4.jpg'
import img4 from './assets/4.png'
import img5 from './assets/5.png'
import img6 from './assets/6.png'
import img7 from './assets/5.jpg'
import img8 from './assets/6.jpg'
import img9 from './assets/7.jpg'
import img10 from './assets/8.jpg'
import img11 from './assets/9.jpg'
import img12 from './assets/10.jpg'
import img13 from "./assets/Comment/1.jpg"
import img14 from "./assets/Comment/2.jpg"
import img15 from "./assets/Comment/3.jpg"
import img16 from "./assets/Comment/4.jpg"
import { AiFillStar } from 'react-icons/ai'
import Product1 from "./Product1";
import Services from "./Services";
import Cards from "./Cards";
import Carousle from "./Carousle";
import AnotherCard from "./AnotherCard";
import Cardcarousle from "./Cardcarousle";
import Trusted from "./Trusted"
import Skewed from "./Skewed";
import Subscribe from "./Subscribe";
function Homes() {



  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <div className="home-section">
      <div  data-aos="fade-down-right" data-aos-duration="3000" className="card-tittl">
        <div className="card-tittle" >
        <h2>Welcome to E-Mart</h2>
        <h4>upto 60% off on Grossary</h4>
        <p>You can buy everything from E-Mart website. Your trust is our honour</p>
        </div>
        </div>
      </div>
      {/* Product Page */}
      <div className="Product-heading">
        <h2>Our Popular Products</h2>
      </div>
      <Product1/>
      {/* Comment Page */}
      
     <AnotherCard/>
      <Services/>
      
      <Cardcarousle/>
      <Skewed/>
      <Carousle/>
      
      {/* Comment Page */}
      <div className="comment-hadings">
        <h2 >Customer Comment</h2>
      </div>

      <div className='comment-box-container '>
      <div className='comment-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                            <img src={img13} />
                        </div>
                        <div className='name-user'>
                            <strong>Abrar Aslam</strong>
                            <span>@ahmadaslam</span>
                        </div>
                    </div>
                    <div className='reviews'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        
                    </div>
                </div>
                <div className="client-comment">
                     <p>The short documentary highlighted that Iqbal’s poetry has depth of thought and insight. The creation of the motherland had been accomplished by his intellectual efforts, it added.</p>
                </div>
            </div>
            <div className='comment-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                            <img src={img14} />
                        </div>
                        <div className='name-user'>
                            <strong>Moeed Tahir</strong>
                            <span>@sadiqcheema</span>
                        </div>
                    </div>
                    <div className='reviews'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                </div>
                <div className="client-comment">
                     <p>The short documentary highlighted that Iqbal’s poetry has depth of thought and insight. The creation of the motherland had been accomplished by his intellectual efforts, it added.</p>
                </div>
            </div>
            <div className='comment-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                            <img src={img15} />
                        </div>
                        <div className='name-user'>
                            <strong>Sheryar</strong>
                            <span>@Sheyar</span>
                        </div>
                    </div>
                    <div className='reviews'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                    </div>
                </div>
                <div className="client-comment">
                     <p>The short documentary highlighted that Iqbal’s poetry has depth of thought and insight. The creation of the motherland had been accomplished by his intellectual efforts, it added.</p>
                </div>
            </div>
            <div className='comment-box'>
                <div className='box-top'>
                    <div className='profile'>
                        <div className='profile-img'>
                            <img src={img16} />
                        </div>
                        <div className='name-user'>
                            <strong>Racardo Jason</strong>
                            <span>@racardojason</span>
                        </div>
                    </div>
                    <div className='reviews'>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        <AiFillStar/>
                        
                    </div>
                </div>
                <div className="client-comment">
                     <p>The short documentary highlighted that Iqbal’s poetry has depth of thought and insight. The creation of the motherland had been accomplished by his intellectual efforts, it added.</p>
                </div>
            </div>
        </div>
        <Subscribe/>
        <div className="partner-heading">
           <h2>Trusted Partner</h2>
        </div>
        <Trusted/>
        <Cards/>
        <footer class="footer foot">
  <div class="footer__addr">
    <h1 class="footer__logo">E-Mart</h1>
        
    <h2>Contact</h2>
    
    <address>
      Pny Training Center Lahore<br/>
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    </address>
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Products</h2>

      <ul class="nav__ul">
        <li>
          <a href="#">Garments</a>
        </li>

        <li>
          <a href="#">Cosmatics</a>
        </li>
            
        <li>
          <a href="#">Technology</a>
        </li>
      </ul>
    </li>
    
    <li class="nav__item nav__item--extra">
      <h2 class="nav__title">Services</h2>
      
      <ul class="nav__ul nav__ul--extra">
        <li>
          <a href="#">Cash on payments</a>
        </li>
        
        <li>
          <a href="#">Fast Delivery</a>
        </li>
        
        <li>
          <a href="#">24 hours Services</a>
        </li>
        
        <li>
          <a href="#">Services in all over pakistan</a>
        </li>
        
        <li>
          <a href="#">Discount Price</a>
        </li>
        
        
      </ul>
    </li>
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="#">Privacy Policy</a>
        </li>
        
        <li>
          <a href="#">Terms of Use</a>
        </li>
        
        <li>
          <a href="#">Sitemap</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2019 Something. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> remotely from Anywhere</span>
    </div>
  </div>
</footer>
    </div>
  );
}

export default Homes;
