import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
         <img src={assets.logo} alt="logo" />
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit distinctio dolorem optio sit, eligendi repellat reprehenderit, nostrum aperiam deleniti aliquid fugiat ad totam?</p>
         <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
        </div>
        <div className="footer-content-center">
           <h2>Company</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
         <h2>Get in touch</h2>
         <ul>
            <li>
            +91 7318472921
            </li>
            <li>vermapradhumn3@gmail.com</li>
         </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">CopyRight 2024 &#169; Tomato.com - All right reserved</p>
    </div>
  );
};

export default Footer;
