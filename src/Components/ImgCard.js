import React from "react";
import Vector from "../assets/images/Vector.png";

function ImgCard(props) {
  return (
    <div className="imgCard">
      <img src={props.src} alt="college pic" />
      <h1>{props.university}</h1>
      <div className="cardBottom">
        <h2>{props.address}</h2>
        <div className="vector">
          <img src={Vector} alt="vector" />
          <img src={Vector} alt="vector" />
          <img src={Vector} alt="vector" />
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
