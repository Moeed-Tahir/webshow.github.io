import React from 'react'
import "./Cards.css"
import img1 from "../File/assets/card/1.webp"
import img2 from "../File/assets/card/2.webp"
import img3 from "../File/assets/card/3.webp"
import img4 from "../File/assets/card/4.webp"
import img5 from "../File/assets/card/5.webp"
import img6 from "../File/assets/card/6.webp"

function Cards() {
  return (
    <div>
         <div className='imparent'>
            <div className='parent-box1'>
              <img className='img1' src={img1}/>
              <img className='img2'  src={img2}/>
              <img className='img3'  src={img3}/>
              <img className='img4'  src={img4}/>
              <img className='img5'   src={img5}/>
              <img className='img6'  src={img1}/>
            </div>
            <div className='parent-box2'>
                <img src={img6} />
            </div>
         </div>
    </div>
  )
}

export default Cards