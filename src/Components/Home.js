import React from "react";
import Ellipse1 from "../assests/images/Ellipse1.png";
import Ellipse2 from "../assests/images/Ellipse2.png";
import Ellipse3 from "../assests/images/Ellipse3.png";
import Subtract from "../assests/images/Subtract.png";
import Subtract2 from "../assests/images/Subtract2.png";
import Ellipse4 from "../assests/images/Ellipse4.png";
import Group171 from "../assests/images/Group171.png";

function Home() {
  return (
    <div className="homeDiv">
      <div className="heading">
        <img className="ellipse1" src={Ellipse1} alt="ellipse" />

        <p className="firstPar">Discover the beauty of the tropics</p>

        <h1>Tropical</h1>
        <img className="ellipse2" src={Ellipse2} alt="ellipse" />
        <h1>Destinations</h1>

        <h1 className="headingWeight">For Student</h1>

        <p className="headingBottom">
          Lorem ipsum dolor sit amet consectetur. Sit mattis donec mi bibendum
          integer rutrum nisi. A nec nisl vitae
        </p>
        <img className="subtract" src={Subtract} alt="circle" />
        <button>sign up</button>
        <img className="ellipse4" src={Ellipse4} alt="ellipse" />
      </div>
      <div className="imgDiv">
        <img src={Group171} alt="boy-pic" />
        <img className="ellipse3" src={Ellipse3} alt="ellipse" />
        <img className="subtract" src={Subtract2} alt="circle" />
      </div>
    </div>
  );
}

export default Home;
