import React from "react";

function Testimonials(props) {
  return (
    <div className="testCard">
      <img className="profilePic" src={props.src} alt="profile pic" />
      <h2>{props.name}</h2>
      <hr />
      <h3>{props.intro}</h3>
    </div>
  );
}

export default Testimonials;
