import React from 'react'
import {BsFillTelephoneInboundFill} from "react-icons/bs"
import {SlLocationPin} from "react-icons/sl"
import {BiTimeFive} from "react-icons/bi"
import "./Contact.css"
import Footer from './Footer'
function Contact() {
  return (
    <div>
         <div className='contact-page'>
            <div className='contact-headings'>
            <h1>Contact</h1>
            <h4>Please use the form below to contact us for any product related or wholesale inquiry.</h4>
            </div>
            <div className='contact-form'>
                 <div className='contact-info'>
                    <div className='contact-name'>
                        <input type="text" className='name' placeholder='Enter Name'/>
                    </div>
                    <div className='contact-email'>
                        <input type="email" className='email' placeholder='Enter Email'/>
                    </div>
                 </div>
                 <div className='contact-phone'>
                       <input className='phone' type="text" placeholder='Enter Phone' />
                 </div>
                 <div className='contact-comment'>
                  
                       <textarea className='comment' placeholder='Enter Comment' ></textarea>
                 </div>
                 <button>Send</button>
            </div>
         </div>
         <Footer/>
    </div>
  )
}

export default Contact