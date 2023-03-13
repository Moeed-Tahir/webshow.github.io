import React, { useEffect, useState } from 'react'
import "./Cart.css"
import Table from 'react-bootstrap/Table';

function Cart ({cart}) {

  const [CART,setCart] = useState([]);
  
  useEffect(()=>{
    setCart(cart)
  }, [cart])

  const handleclick=()=>{
    localStorage.setItem("moeedcart",JSON.stringify(cart))
  }

  return (
    <div className='full-size'>
      <Table className='table' striped bordered >
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
    </Table >
         {
          CART?.map((cartItem,cartIndex) => {
            return (
              <div>
              <Table className='ndtable' striped bordered hover variant="dark">
      <tbody>
        <tr>
          <td className='tdone'>
            <img src={cartItem.image} />
          </td>
          <td className='tdtwo'>
            <h2>{cartItem.name}</h2>
          </td>
          <td className='tdthree' >
                      <button className='bt1' onClick={() => {
                          const _CART =CART.map((item,index) => {
                            return cartIndex === index ? { ...item,quantity:item.quantity + 1} : item
                          })
                          setCart(_CART)
                         }} >+</button>
                      <h6>{cartItem.quantity}</h6>
                      <button className='bt2' onClick={() => {
                          const _CART =CART.map((item,index) => {
                            return cartIndex === index ? { ...item,quantity:item.quantity>0 ? item.quantity - 1 :0} : item
                          })
                       setCart(_CART)
                    }}  >-</button>
                    
          </td>
          <td className='tdfour'><h6>{cartItem.price}</h6></td>
        </tr>
      </tbody>
    </Table>
              </div>
            )
          })
         }
         <div className='end-price'>
         <p className='total-price'>
          {
            CART.map(item => item.price *item.quantity).reduce((total,value)=> total + value,0)
          }
          
         </p>
         <button className='check-btn'  onClick={handleclick}>Checkout</button>
         </div>
    </div>
  )
}

export default Cart