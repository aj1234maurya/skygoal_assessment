import React from "react";
import Card from "../Components/Card";
import Ellipse5 from "../assets/images/Ellipse5.png";
import jenny2 from "../assets/images/jenny2.png";
import jenny3 from "../assets/images/jenny3.png";
import jenny4 from "../assets/images/jenny4.png";
import Subtract3 from "../assets/images/Subtract3.png";

function Page2() {
  return (
    <div className="page2">
      <div className="cardDiv">
        <img className="ellipse5" src={Ellipse5} alt="ellipse" />
        <Card
          src={jenny2}
          name="Jenny Wilson"
          sentence="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        />
        <Card
          src={jenny3}
          name="Jenny Wilson"
          sentence="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        />
        <Card
          src={jenny4}
          name="Jenny Wilson"
          sentence="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        />
      </div>
      <div className="page2Right">
        <img className="subtract3" src={Subtract3} alt="circle" />

        <h1>
          Tropical Adventure <br />
          <span>for Students.</span>
        </h1>
        <h4>Student Tropical Vacation: Relax and Recharge</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Massa quis natoque sit quam</li>
          <li>Eros non pellentesque elit</li>
          <li>tortor id euismod habitant</li>
          <li>Sed suspendisse id in ultrices</li>
        </ul>
        <button>Explore More</button>
      </div>
    </div>
  );
}

export default Page2;
