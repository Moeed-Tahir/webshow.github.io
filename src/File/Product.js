import React from 'react'
import "./Product.css"
import "./Footer.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Product  ({product , addtocart}) {
  return (
    <div>
          {/* <Searchbar/> */}
          {
            product.map((productItem,productIndex)=>{
              return(
                <div>
                  {
                  <Card className='card' >
                  <Card.Img variant="top" src={productItem.image} />
                  <Card.Body className='cardbody'>
                    <Card.Title>{productItem.name}</Card.Title>
                    <Card.Text>
                      ${productItem.price}
                    </Card.Text>
                    <Button onClick={() => addtocart(productItem)} className="add-btn" >Go somewhere</Button>
                  </Card.Body>
                </Card>
                
                  }
                </div> 
              )
            })
          }
    </div>
  )
}

export default Product