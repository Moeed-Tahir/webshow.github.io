import React from 'react'
import "./Product1.css"
import img1 from './assets/Product/1.webp'
import img2 from './assets/Product/2.webp'
import img3 from './assets/Product/3.webp'
import img4 from './assets/Product/4.webp'
import img5 from './assets/Product/5.webp'
import img6 from './assets/Product/6.webp'
import img7 from './assets/Product/7.webp'
import img8 from './assets/Product/8.webp'
import { Link } from 'react-router-dom'
function Product1() {
   
  return (
    <div>
      
        <div className='card-parent'>
        <div className='card-shape' >
             <img src={img1}  />
             <div className='card-data'>
                <p>adidas</p>
                <Link to="/Product" ><h5>Travel Bag</h5></Link>
                <p><span>Price : $44.00</span></p>
                
             </div>
        </div>
        <div className='card-shape'>
             <img src={img2}  />
             <div className='card-data'>
                <p>adidas</p>
                <h5>Men's watches</h5>
                <p><span>Price : $44.00</span></p>
                
             </div>
        </div>
        <div className='card-shape'>
             <img src={img3}  />
             <div className='card-data'>
                <p>adidas</p>
                <h5>Men's shorts</h5>
                <p><span>Price : $44.00</span></p>
                
             </div>
        </div>
        <div className='card-shape'>
             <img src={img4}  />
             <div className='card-data'>
                <p>adidas</p>
                <h5>Travel Bag</h5>
                <p><span>Price : $44.00</span></p>
                
             </div>
        </div>
        <div className='card-shape'>
             <img src={img5}  />
             <div className='card-data'>
                <p>adidas</p>
                <h5>Men's shirt</h5>
                <p><span>Price : $44.00</span></p>
                
             </div>
        </div>
        <div className='card-shape'>
             <img src={img6}  />
             <div className='card-data'>
                <p>adidas</p>
                <h5>Sneaker </h5>
                <p><span>Price : $44.00</span></p>
                
             </div>
        </div>
        <div className='card-shape'>
             <img src={img7}  />
             <div className='card-data'>
                <p>adidas</p>
                <h5>Nixon watch</h5>
                <p><span>Price : $44.00</span></p>
                
             </div>
        </div>
         <div className='card-shape'>
             <img src={img8}  />
             <div className='card-data'>
                <p>adidas</p>
                <h5>Black color sneaker</h5>
                <p><span>Price : $44.00</span></p>
             </div>
        </div>
        </div>
    </div>
  )
}

export default Product1