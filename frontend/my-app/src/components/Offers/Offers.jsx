
import React from "react";
import "./Offers.css";
import exclusiveImage from "../Assets/exclusive_image.jpg";

const Offers = () => {
  return (
    <section className="offers">
      <div className="offers-content">
        <div className="offers-left">
          <h1>Exclusive</h1>
          <h1>Offers For You</h1>
          <p>Get the best deals on our products. Limited time offer!</p>
          <button className="offers-button">Check Now</button>
        </div>
        <div className="offers-right">
          <img src={exclusiveImage} alt="Exclusive product offers" />
        </div>
      </div>
    </section>
  );
};

export default Offers;
