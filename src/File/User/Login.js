import React, { useState } from 'react'
import "./Login.css"
import axios from "axios"
import {Link} from "react-router-dom"

function Login() {

  const [register,setRegister] = useState({
    email:"",
    password:""
})

const handleinput = e => {
 const {name , value} = e.target
 setRegister({
   ...register,
   [name]:value
 })
}

const login = () => {
  axios.post("http://localhost:5000/login" , register)
  .then(res => alert(res.data.message) )
}

  return (
    <div className='sub-parent'>
        <div  className='loginofdiv'>
                <h4>I have an account?</h4>
                <h2>Login</h2>
                <input type="email" onChange={handleinput} name="email" value={register.email}  placeholder='email@gmail.com'/>
                <input type="password" onChange={handleinput} name="password" value={register.password}  placeholder='enter password.....'/>
            <button onClick={login}>Login</button>
        </div>
    </div>
  )
}

export default Login