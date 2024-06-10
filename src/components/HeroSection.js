
import React from "react";
import "./HeroSection.css";
import img from "./img.svg";

const HeroSection = () => {
  return (
    <div className="hero-main">
      <div className="hero-left">
        <div className="hero">
          <section className="hero">
            <h1>
              Transform Inventory <br/>with, <span className="clvr">CleverBooks.</span>
            </h1>
            <p>
              "Unlock the Future of Inventory Management: Where Innovation Meets
              Efficiency with CleverBooks."
            </p>
            <div className=" button">
            <button>
              <span className="tst"> 
              Get started with CleverBooks </span>
            </button>
          </div>
          </section>
          
        </div>
        <div className="hero-image">
          <img src={img} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
