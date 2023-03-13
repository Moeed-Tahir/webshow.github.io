import React from 'react'
import "./Subscribe.css"
import { IoIosSend } from 'react-icons/io'
import img1 from "./assets/Subscribe/2.png"

function Subscribe() {
  return (
    <div>
        <div className='subscribe-parent'>
           <div className='subscribeheadings'>
            <div className='subscribecontent'>
                <h3 className='subsh3'>Ready to get started</h3>
                <h5 className='subsh5'>Diam elitr est dolore at sanctus nonumy.</h5>
                <input placeholder='Enter Your Email' />
                <a><IoIosSend className='submit-icon' /></a>
            </div>
           </div>
           <div className='subscribepic'>
            <img src={img1} />
           </div>
        </div>
    </div>
  )
}

export default Subscribe