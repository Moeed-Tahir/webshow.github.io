import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <div>
         {/* <!-- Footer --> */}
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
  )
}

export default Footer