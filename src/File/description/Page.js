import React from "react";
import "./Page1.css";
import img1 from "../assets/Card-carousle/5.webp";
import Footer from "../Footer";
// import Cardcarousle from "../Cardcarousle";
// import img2 from "../File/assets/Card-carousle/6.webp"
// import img3 from "../File/assets/Card-carousle/7.webp"
// import img4 from "../File/assets/Card-carousle/8.webp"
// import img5 from "../File/assets/Card-carousle/9.webp"
// import img6 from "../File/assets/Card-carousle/10.webp"
// import img7 from "../File/assets/Card-carousle/11.webp"
// import img8 from "../File/assets/Card-carousle/12.webp"
// import img9 from "../File/assets/Card-carousle/13.webp"
import Cardcarousle from "../Cardcarousle"
function Page1() {
  return (
    <div>
      <div className="detailparent">
        <div className="detailimg">
          <img src={img1} />
        </div>
        <div className="detail">
          <div className="producthead"><h3>GENTS SNEAKERS SHOES 01-20199</h3></div>
          <div className="detail-price">
            <h4>
              <del> PKR 7,900</del> <span> PKR 7,110</span>{" "}
            </h4>
          </div>
          <div className="product-review">
            <h4>HURRY UP! STOCK IS AVAILABLE <br/>
              <span>32 people are viewing this product.</span> </h4>
          </div>
          <div className="size-chart">
            <h5>Sizes of Product</h5>
               <div className="size-data">
                   <button>44</button>
                   <button>45</button>
                   <button>46</button>
                   <button>47</button>
                   <button>48</button>
               </div>
          </div>
          <div className="availability">
                 <button>Available !</button>
          </div>
          <div className="Buy">
                 <button>Buy Now</button>
          </div>
        </div>
      </div>
      <Cardcarousle/>
      <Footer/>
    </div>
  );
}

export default Page1;
