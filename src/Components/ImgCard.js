import React from "react";

function ImgCard(props) {
  return (
    <div className="imgCard">
      <img src={props.src} alt="college pic" />
      <h1>{props.university}</h1>
      <div className="cardBottom">
        <h2>{props.address}</h2>
        <div className="vector">
          <img src="./images/Vector.png" alt="vector" />
          <img src="./images/Vector.png" alt="vector" />
          <img src="./images/Vector.png" alt="vector" />
        </div>
      </div>
    </div>
  );
}

export default ImgCard;
