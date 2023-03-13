import React from "react";
import img1 from "./assets/1.avif";
import img2 from "./assets/12.jpg";
import img3 from "./assets/13.jpg";
import img4 from "./assets/14.jpg";
import img5 from "./assets/15.jpg";
import img6 from "./assets/16.jpg";
import img7 from "./assets/17.webp";
import img8 from "./assets/2.webp";
import img9 from "./assets/3.webp";
import img10 from "./assets/2.avif";
import "./Blog.css";
import Footer from "./Footer";
function Blog() {
  return (
    <div>
      <div className="bloghead">
        <h2>Blog</h2>
      </div>
      <div className="blogparent">
        <div className="blogrow">
          <img src={img1} />
          <h5>
            A paragraph is a group of related sentences that <br /> support one
            main idea.
          </h5>
          <p> 2 January 2023</p>
        </div>
        <div className="blogrow">
          <img src={img2} />
          <h5>
            A paragraph is a group of related sentences that <br /> support one
            main idea.
          </h5>
          <p> 2 January 2023</p>
        </div>
        <div className="blogrow">
          <img src={img3} />
          <h5>
            A paragraph is a group of related sentences that <br /> support one
            main idea.
          </h5>
          <p> 2 January 2023</p>
        </div>
        <div className="blogrow">
          <img src={img4} />
          <h5>
            A paragraph is a group of related sentences that <br /> support one
            main idea.
          </h5>
          <p> 2 January 2023</p>
        </div>
        <div className="blogrow">
          <img src={img5} />
          <h5>
            A paragraph is a group of related sentences that <br /> support one
            main idea.
          </h5>
          <p> 2 January 2023</p>
        </div>
        <div className="blogrow">
          <img src={img6} />
          <h5>
            A paragraph is a group of related sentences that <br /> support one
            main idea.
          </h5>
          <p> 2 January 2023</p>
        </div>
      </div>
      <div className="banner">
        <img src={img7} />
      </div>
      <div className="parent-underbanner">
      <div className="underbanner">
        <img src={img8} />
        <h5>
          A paragraph is a group of related sentences that <br /> support one
          main idea.
        </h5>
        <p> 2 January 2023</p>
      </div>
      <div className="underbanner">
        <img src={img9} />
        <h5>
          A paragraph is a group of related sentences that <br /> support one
          main idea.
        </h5>
        <p> 2 January 2023</p>
      </div>
      <div className="underbanner">
        <img src={img10} />
        <h5>
          A paragraph is a group of related sentences that <br /> support one
          main idea.
        </h5>
        <p> 2 January 2023</p>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Blog;
