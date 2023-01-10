import React from "react";
import "./reasons.css";

import image2 from "../../Assets/image2.png";

import adidas from "../../Assets/adidas.png";
import nb from "../../Assets/nb.png";
import nike from "../../Assets/nike.png";
import tick from "../../Assets/tick.png";
const Reasons = () => {
  return (
    <div className="Reasons">
      <div className="left-r">
        <img src={image2} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> choose us</span>
        </div>
        <div className="detail-r">
          <div>
            <img src={tick} alt=""></img>
            <span>OVER 140+ COACHES </span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>1 FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={tick} alt="" />
            <span>RELIABLE PARTNER</span>
          </div>
        </div>
        <span style={{ color: "gray", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={nb} alt="" />
          <img src={adidas} alt="" />
          <img src={nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
