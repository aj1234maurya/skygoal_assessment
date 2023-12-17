import React from "react";
import Testimonials from "./Testimonials";
import profile1 from "../assests/images/profile1.png";
import profile2 from "../assests/images/profile2.png";
import profile3 from "../assests/images/profile3.png";

function Page6() {
  return (
    <div className="page6">
      <h1>Testimonials</h1>
      <div className="testimonialFlex">
        <Testimonials
          src={profile1}
          name="Corey Korsgaard"
          intro="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <Testimonials
          src={profile2}
          name="Jakob Aminoff"
          intro="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <Testimonials
          src={profile3}
          name="Carla Press"
          intro="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
      </div>
      <div className="bottom">
        <h1 className="bottomH1">
          Student Special: Discounted rates on tropical getaways!
        </h1>
      </div>
      <h4>
        Let’s embody your beautiful ideas together, simplify the
        <br /> way you visualize your next big things.
      </h4>
      <div className="anchorDiv">
        <a href=" ">Privacy Policy</a>
        <a href=" ">Terms of Use</a>
        <a href=" ">Sales and Refunds</a>
        <a href=" ">Legal</a>
        <a className="boldChange" href=" ">
          About
        </a>
        <a className="boldChange" href=" ">
          Schedules
        </a>
        <a className="boldChange" href=" ">
          Pricing
        </a>
        <a className="boldChange" href=" ">
          Membership
        </a>
        <a className="boldChange" href=" ">
          Joins
        </a>
      </div>
    </div>
  );
}

export default Page6;
