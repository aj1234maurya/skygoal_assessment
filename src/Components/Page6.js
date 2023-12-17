import React from "react";
import Testimonials from "./Testimonials";

function Page6() {
  return (
    <div className="page6">
      <h1>Testimonials</h1>
      <div className="testimonialFlex">
        <Testimonials
          src="/images/profile1.png"
          name="Corey Korsgaard"
          intro="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <Testimonials
          src="/images/profile2.png"
          name="Jakob Aminoff"
          intro="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <Testimonials
          src="/images/profile3.png"
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
