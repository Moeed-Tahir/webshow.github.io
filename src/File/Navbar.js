
import './Navbar.css'
import { BsFillCartFill } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import {Link} from "react-router-dom";
import Cart from './Cart';
function Navbar(props) {

  return (
    <div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <Link to="/"><a class="navbar-brand" href="#">E-MART</a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <Link class="nav-link active" to="/">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/Product" >Product</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/contact" >Contact</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/blog">Blog</Link>
      </li>
      <li class="nav-item dropdown">
        <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          For Search <BsSearch/>
        </Link>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
        </div>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/about">About</Link>
      </li> 
      <li className="nav-item">
        <Link  to="/cart" >< BsFillCartFill className='cart'/>
        <sup className='sup'>{props.count}</sup>
        </Link>
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Navbar