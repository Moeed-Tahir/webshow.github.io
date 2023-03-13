import React, { useState } from 'react'
import "./Register.css"
import axios from "axios"
function Register() {

   const [register,setRegister] = useState({
         name:"",
         email:"",
         password:"",
         reenterpassword:"",
         country:""
   })

   const handleinput = e => {
      const {name , value} = e.target
      setRegister({
        ...register,
        [name]:value
      })
   }

   const Register = () => {
     const {name,email,password,reenterpassword,country} = register
     if(name && email && password && (password === reenterpassword) && country){
      
      axios.post("http://localhost:5000/register", register)
      .then( res => console.log(res))
     }
     else {
      alert("Invalid Input")
     }
   }

  return (
    <div>
        <div className='regimage'>
          {console.log("user",register)}
            <div className='regsubparent'>
              <h4>I create an account</h4>
              <h2>Register</h2>
               <input type="text" onChange={handleinput} name="name" value={register.name} className='reginput' placeholder='enter name'/>
               <input type="email"  onChange={handleinput}  name="email" value={register.email}   className='reginput'  placeholder='enter email'/> 
               <input type="password"  onChange={handleinput}  name="password" value={register.password}   className='reginput'  placeholder='enter password'/> 
               <input type="password" onChange={handleinput}  name="reenterpassword" value={register.reenterpassword}   className='reginput'  placeholder='enter re-enter password'/> 
               <input type="text" onChange={handleinput}  name="country"  className='reginput' value={register.country}   placeholder='enter city'/> 
               <button onClick={Register}>Register</button>
            </div>
        </div>
    </div>
  )
}

export default Register