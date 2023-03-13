import React ,{useEffect} from 'react'
import "./Trusted.css"
import img1 from "../File/assets/Partner/1.webp"
import img2 from "../File/assets/Partner/2.webp"
import img3 from "../File/assets/Partner/3.webp"
import img4 from "../File/assets/Partner/4.webp"
import img5 from "../File/assets/Partner/5.webp"
import AOS from "aos";
import "aos/dist/aos.css";

function Trusted() {
    
  return (
    <div>
        <div className='partner-parent'>
        <div  className='brandlogo1'>
            <img src={img1} />
        </div>
        <div  className='brandlogo2'>
        <img src={img2} />
        </div>
        <div  className='brandlogo3'>
        <img src={img3} />
        </div>
        <div  className='brandlogo4'>
        <img src={img4} />
        </div>
        <div  className='brandlogo5'>
        <img src={img5} />
        </div>
        </div>
    </div>
  )
}

export default Trusted