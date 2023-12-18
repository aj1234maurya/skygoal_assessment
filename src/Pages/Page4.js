import React from "react";
import Ellipse6 from "../assets/images/Ellipse6.png";
import Subtract5 from "../assets/images/Subtract5.png";
import Ellipse7 from "../assets/images/Ellipse7.png";
import Ellipse8 from "../assets/images/Ellipse8.png";
import girl1 from "../assets/images/girl1.png";
import Subtract4 from "../assets/images/Subtract4.png";

function Page4() {
  return (
    <div className="page4">
      <div className="pag4left">
        <img className="ellipse6" src={Ellipse6} alt="ellipse" />
        <img className="subtract5" src={Subtract5} alt="circle" />
        <h3>Get 20% off for student</h3>
        <h1>
          Student discounts available.
          <img className="ellipse7" src={Ellipse7} alt="ellipse" />
          <br />
          <span>Get ready for some fun in the sun!</span>
        </h1>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Massa quis natoque sit quam</li>
          <li>Eros non pellentesque elit</li>
          <li>tortor id euismod habitant</li>
          <li>Sed suspendisse id in ultrices</li>
        </ul>
        <button>Explore More</button>
        <img className="ellipse8" src={Ellipse8} alt="ellipse" />
      </div>
      <div className="girlPic">
        <img className="girl" src={girl1} alt="girl" />
        <img className="subtract4" src={Subtract4} alt="circle" />
      </div>
    </div>
  );
}

export default Page4;
