import React from "react";

function Card(props) {
  return (
    <>
      <div className="flexProfile">
        <img className="profilePic" src={props.src} alt="profile pic" />
        <div className="info">
          <h1 className="nameHeading">{props.name}</h1>
          <h2 className="detailHeading">{props.sentence}</h2>
        </div>
      </div>
    </>
  );
}

export default Card;
