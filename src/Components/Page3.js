import React from "react";
import ImgCard from "./ImgCard";

function Page3() {
  return (
    <div className="page3">
      <h1>Our Destinations</h1>
      <div className="page3Flex">
        <ImgCard
          src="./images/coll1.png"
          university="Harvard University"
          address="Cambridge, Massachusetts, UK"
        />
        <ImgCard
          src="./images/coll2.png"
          university="Oxford University"
          address="Oxford, England"
        />
        <ImgCard
          src="./images/coll3.png"
          university="Stanford University"
          address="Stanford, California"
        />
        <ImgCard
          src="./images/coll4.png"
          university="Nanyang Technological University"
          address="Nanyang Ave, Singapura"
        />
      </div>
      <div className="arrowDiv">
        <img src="./images/leftarrow.png" alt="left-arrow" />
        <h2>
          2 <span>/ 140</span>
        </h2>
        <img src="./images/rightarrow.png" alt="right-arrow" />
      </div>
    </div>
  );
}

export default Page3;
