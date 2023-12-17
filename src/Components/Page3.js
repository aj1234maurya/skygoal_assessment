import React from "react";
import ImgCard from "./ImgCard";
import coll1 from "../assests/images/coll1.png";
import coll2 from "../assests/images/coll2.png";
import coll3 from "../assests/images/coll3.png";
import coll4 from "../assests/images/coll4.png";
import leftarrow from "../assests/images/leftarrow.png";
import rightarrow from "../assests/images/rightarrow.png";

function Page3() {
  return (
    <div className="page3">
      <h1>Our Destinations</h1>
      <div className="page3Flex">
        <ImgCard
          src={coll1}
          university="Harvard University"
          address="Cambridge, Massachusetts, UK"
        />
        <ImgCard
          src={coll2}
          university="Oxford University"
          address="Oxford, England"
        />
        <ImgCard
          src={coll3}
          university="Stanford University"
          address="Stanford, California"
        />
        <ImgCard
          src={coll4}
          university="Nanyang Technological University"
          address="Nanyang Ave, Singapura"
        />
      </div>
      <div className="arrowDiv">
        <img src={leftarrow} alt="left-arrow" />
        <h2>
          2 <span>/ 140</span>
        </h2>
        <img src={rightarrow} alt="right-arrow" />
      </div>
    </div>
  );
}

export default Page3;
