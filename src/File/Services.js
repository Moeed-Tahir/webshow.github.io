import React,{useEffect} from 'react'
import "./Services.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { FaShippingFast } from 'react-icons/fa';
import {BsHandbag} from 'react-icons/bs';
import {GiReturnArrow} from 'react-icons/gi'
import {MdOutlinePayment} from 'react-icons/md'
import {BsHeadset} from 'react-icons/bs'

function Services() {
      useEffect(() => {
            AOS.init();
            AOS.refresh();
          }, []);
  return (
    <div>
        <div className='cardparent' >
             <div className='cardbox'  >
                   <div className='cardcontent'>
                   <FaShippingFast className='icon'/>
                   <h3>Free Shipping</h3>
                   <p>Let us learn in detail about this content.</p>
                   </div>
             </div>
             <div className='cardbox' >
                <div className='cardcontent'>
                <BsHandbag className='icon'/>
                   <h3>Shop Online</h3>
                   <p>Let us learn in detail about this content.</p>
                </div>
             </div>
             <div className='cardbox' >
             <div className='cardcontent'>
             <GiReturnArrow className='icon'/>
                   <h3>Return Policy</h3>
                   <p>Let us learn in detail about this content.</p>
             </div>
             </div>
             <div className='cardbox' >
             <div className='cardcontent'>
             <MdOutlinePayment className='icon'/>
                   <h3>Payments Methods</h3>
                   <p>Let us learn in detail about this content.</p>
             </div>
             </div>
             <div className='cardbox' >
             <div className='cardcontent'>
             <BsHeadset className='icon'/>
                   <h3>Online Support</h3>
                   <p>Let us learn in detail about this content.</p>
             </div>
             </div>
        </div>
    </div>
  )
}

export default Services