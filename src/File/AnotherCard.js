import React from 'react'
import "./AnotherCard.css"
import img1 from "../File/assets/Another-card/1.jpg"
import img2 from "../File/assets/Another-card/2.jpg"
import img3 from "../File/assets/Another-card/3.jpg"
import img4 from "../File/assets/Another-card/4.jpg"

function AnotherCard() {
  return (
    <div>
        <div className='another'>
            <div className='anothercard'>
           <div className='card-img1' >
            <img src={img1} />
           </div>
           <div className='card-img1'>
           <img src={img2} />
           </div>
           </div>
           <div className='anothercard2'>
           <div className='card-img2'>
           <img src={img3} />
           </div>
           <div className='card-img2'>
           <img src={img4} />
           </div>
           </div>
        </div>
    </div>
  )
}

export default AnotherCard