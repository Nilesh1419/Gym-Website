import React from "react";
import "../Programs/programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../Assets/rightArrow.png";

const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">Explore</span>
        <span>our programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((program) => (
          <div className="categories">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
