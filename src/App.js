import logo from "./logo.svg";
import { heroapi } from "./Type/index";
import { Navapi } from "./Type/index";
import Navbar from "./File/Navbar";
import Footer from "./File/Footer";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Homes from "./File/Homes";
import Cart from "./File/Cart";
import Product from "./File/Product";
import { useEffect, useState } from "react";
import img1 from "./File/assets/Product/1.webp"
import img2 from "./File/assets/Product/2.webp"
import img3 from "./File/assets/Product/3.webp"
import img4 from "./File/assets/Product/4.webp"
import img5 from "./File/assets/Product/5.webp"
import img6 from "./File/assets/Product/6.webp"
import img7 from "./File/assets/Product/7.webp"
import img8 from "./File/assets/Product/8.webp"
import img9 from "./File/assets/Product/9.webp"
import img10 from "./File/assets/Product/10.webp"
import img11 from "./File/assets/Product/11.webp"
import img12 from "./File/assets/Product/12.webp"
import img13 from "./File/assets/Product/13.webp"
import img14 from "./File/assets/Product/14.webp"
import img15 from "./File/assets/Product/15.webp"
import img16 from "./File/assets/Product/16.webp"
import img17 from "./File/assets/Product/17.webp"
import img18 from "./File/assets/Product/18.webp"
import img19 from "./File/assets/Product/19.webp"
import img20 from "./File/assets/Product/20.webp"
import Contact from "./File/Contact";
import About from "./File/About";
import Upper from "./File/Upper"
import Login from "./File/User/Login";
import Blog from "./File/Blog";
import Register from "./File/User/Register";
import Searchbar from "./File/Searchbar";
import { BsFillDice1Fill } from "react-icons/bs";
import Page from "./File/description/Page";
import Page1 from "./File/description/Page1";
import Page2 from "./File/description/Page2";
import Page3 from "./File/description/Page3";
import Page4 from "./File/description/Page4";
import Page5 from "./File/description/Page5";
import Page6 from "./File/description/Page6";
import Page7 from "./File/description/Page7";
import Page8 from "./File/description/Page8";
// import Page1 from "./File/description/Page1";
const  App = () => {

  const [product,setproduct] = useState([
    {
      id : 1,
      image : img1,
      name : "Traveler Bag",
      price : "120000",
   },
   {
       id : 2,
       image : img2,
       name : "Men's watches",
       price : "1200",
    },
    {
       id : 3,
       image : img3,
       name : "Men's shorts",
       price : "420000",
    },
    {
       id : 4,
       image : img4,
       name : "Handcarry Bag",
       price : "12000",
    },
    {
       id : 5,
       image : img5,
       name : "Men's Shirt",
       price : "1000",
    },
    {
       id : 6,
       image : img6,
       name : "Men's Sneaker",
       price : "1200",
    },
    {
       id : 7,
       image : img7,
       name : "Nixon Watch",
       price : "10000",
    },
    {
       id : 8,
       image : img8,
       name : "Black Sneaker",
       price : "15000",
    },
    {
       id : 9,
       image : img9,
       name : "Sun galsses",
       price : "100000",
    },
    {
       id : 10,
       image : img10,
       name : "Girl Bags",
       price : "1200",
    },
    {
       id : 11,
       image : img11,
       name : "Girl Bag",
       price : "35000",
    },
    {
       id : 12,
       image : img12,
       name : "Multicolor Sneaker",
       price : "140000",
    },
    {
       id : 13,
       image : img13,
       name : "Men's Shoes",
       price : "1000",
    },
    {
       id : 14,
       image : img14,
       name : "Swead Shirt",
       price : "22000",
    },
    {
       id : 15,
       image : img15,
       name : "Pant",
       price : "45000",
    },
    {
       id : 16,
       image : img16,
       name : "Casual Dress",
       price : "3000",
    },
    {
       id : 17,
       image : img17,
       name : "Sports Shoes",
       price : "6000",
    },
    {
       id : 18,
       image : img18,
       name : "Check Shirt",
       price : "3000",
    },
    {
       id : 19,
       image : img19,
       name : "Cap ",
       price : "7000",
    },
    {
       id : 20,
       image : img20,
       name : "Casual Kot",
       price : "2000",
    }
  ]
  
  )

  const [cart , setcart] = useState([]);
  
  console.log(cart);
  const addtocart = (data) => {
    
    setcart([...cart,{...data,quantity : 1}])
  }

//   useEffect(()=>{
//    localStorage.setItem("moeedcart" , JSON.stringify(Cart))
//  },[Cart])

  return (
    <div className="App">
      {/* <Home hero={heroapi}/> */}
      
      <Router>
      <Upper/>
      <Navbar count={cart.length}  />
        <Routes>
        <Route  path="/Product" element={<Product product={product} addtocart={addtocart} />} ></Route>
        <Route path="/file1" element={<Page/>}></Route>
        <Route path="/file2" element={<Page1/>}></Route>
        <Route path="/file3" element={<Page2/>}></Route>
        <Route path="/file4" element={<Page3/>}></Route>
        <Route path="/file5" element={<Page4/>}></Route>
        <Route path="/file6" element={<Page5/>}></Route>
        <Route path="/file7" element={<Page6/>}></Route>
        <Route path="/file8" element={<Page7/>}></Route>
        <Route path="/file9" element={<Page8/>}></Route>
          <Route path="/" element={<Homes />}></Route>
           <Route path="/cart" element={<Cart cart={cart} />}></Route> :
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          {/* <Route path="/cmt" element={<Comment />}></Route> */}
          {/* <Route path="/product" element={<Product/>}></Route> */}
      </Routes>
      </Router>
    </div>
  );
}

export default App;
