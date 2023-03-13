import Carousel from 'react-bootstrap/Carousel';
import img1 from "../File/assets/Carousel/1.jpg"
import img2 from "../File/assets/Carousel/2.webp"
import img3 from "../File/assets/Carousel/1.webp"
import "./Carousle.css"

function UncontrolledExample() {
  return (
    <Carousel variant='dark' fade>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;