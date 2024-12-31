import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div
      id="footer"
      className="footer bg-[#323232] text-[#d9d9d9] flex flex-col items-center py-5 px-[8vw] pt-20 gap-5"
    >
      <div className="w-100 grid lg:grid-cols-3 grid-cols-1 justify-between gap-12">
        <div>
          <img src={assets.logo} alt="foot-logo" />
          <p className="mt-5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque, accusantium amet quas
            eveniet quod dignissimos neque adipisci perferendis ex laboriosam?
          </p>
          <div className="flex gap-5 mt-4">
            <img src={assets.facebook_icon} alt="icon" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>
        <div>
          <h2 className="text-xl font-medium">COMPANY</h2>
          <ul className="mt-5">
            <li className="mt-2">Home</li>
            <li className="mt-2">About us</li>
            <li className="mt-2">Delivery</li>
            <li className="mt-2">Privacy policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-medium">GET IN TOUCH</h2>
          <ul className="mt-5">
            <li className="mt-2">+1-231-483-2728</li>
            <li className="mt-2">contact@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p>Copyright 2024 &#169; All Right Reserved.</p>
    </div>
  );
};

export default Footer;
