
import React from 'react';
import "./Product.css";
import { Link } from 'react-router-dom';



function Product(){

    return(
        
       <nav>
        <div className="medi">
        <img src="https://t3.ftcdn.net/jpg/00/59/80/66/360_F_59806660_0Hxo7H1WPs29SJQr9Mrr51KzIDb1toJj.jpg"></img>
        </div>
        <h3>Me<span>D</span>i-Help</h3>
        <div className="img">
        <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"></img>
        </div>
        <ul>
             <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Department</a>
             <a href="#">Doctor</a>
            <a href="#">Contact Us</a>
            <input type="search" placeholder="Search medicine" spellCheck="false"></input>

        </ul>
       <Link to="/login">
        <button className="login">Login</button>
        </Link>

        <Link to="/signUp">
          <button className="sign">Sign Up</button>
          </Link>

       </nav>
     
    );
}

export default Product;

