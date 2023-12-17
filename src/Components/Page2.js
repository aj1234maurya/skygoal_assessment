import React from "react";
import Card from "./Card";

function Page2() {
  return (
    <div className="page2">
      <div className="cardDiv">
        <img className="ellipse5" src="./images/ellipse5.png" alt="ellipse" />
        <Card
          src="./images/jenny2.png"
          name="Jenny Wilson"
          sentence="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        />
        <Card
          src="./images/jenny2.png"
          name="Jenny Wilson"
          sentence="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        />
        <Card
          src="./images/jenny2.png"
          name="Jenny Wilson"
          sentence="Lorem ipsum dolor sit amet, consectetur adipiscing..."
        />
      </div>
      <div className="page2Right">
        <img className="subtract3" src="./images/Subtract3.png" alt="circle" />

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
