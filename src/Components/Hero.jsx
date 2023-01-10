import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import hero_image_back from "../Assets/hero_image_back.png";
import Heart from "../Assets/heart.png";
import hero_image from "../Assets/hero_image.png";
import Calories from "../Assets/calories.png";
// import { Button } from "react-scroll";
const Hero = () => {
  return (
    <div className="hero">
      <div className="blur blur-hero"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-add">
          <div></div>
          <span>Best Fitness Club in the Town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Yourself</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we help you to Shape and build your body and live up your
              life to fullest{" "}
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>+20</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>+100</span>
            <span>Members Joined</span>
          </div>
          <div>
            <span>+20</span>
            <span>Fitness Programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      <div className="right-h">
        <button className="btn">Join Now</button>
        {/* <Button
          activeClass="active"
          className="btn"
          type="submit"
          value="Join"
          to="Join"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Test 2
        </Button> */}
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm</span>
        </div>
        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} className="hero-image-back" alt="" />
        <div className="calories">
          <img src={Calories} alt="" />

          <div>
            <span>Calories Burn</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
