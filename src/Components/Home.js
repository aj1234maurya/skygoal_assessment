import React from "react";

function Home() {
  return (
    <div className="homeDiv">
      <div className="heading">
        <img className="ellipse1" src="/images/Ellipse1.png" alt="ellipse" />

        <p>Discover the beauty of the tropics</p>

        <h1>Tropical</h1>
        <img className="ellipse2" src="./images/Ellipse2.png" alt="ellipse" />
        <h1>Destinations</h1>

        <h1 className="headingWeight">For Student</h1>

        <p className="headingBottom">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae
        </p>
        <img className="subtract" src="./images/Subtract.png" alt="circle" />
        <button>sign up</button>
        <img className="ellipse4" src="./images/Ellipse4.png" alt="ellipse" />
      </div>
      <div className="imgDiv">
        <img src="./images/Group171.png" alt="boy-pic" />
        <img className="ellipse3" src="./images/Ellipse3.png" alt="ellipse" />
        <img className="subtract" src="./images/Subtract2.png" alt="circle" />
      </div>
    </div>
  );
}

export default Home;
