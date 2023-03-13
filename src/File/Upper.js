import React from 'react'
import {Link} from "react-router-dom"
import "./Upper.css"
function Log() {
  return (
    <div>
        <div className='uper'>
          <div className='uper-head'>
            <h3>UAN 123 345 345</h3>
            </div>
            <div className='end'>
            <Link className='log' to="/login"><button >Login</button></Link>
            <Link to="/register"><button className='reg' >Register</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Log