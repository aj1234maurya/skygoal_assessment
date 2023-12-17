import React from "react";

function NavBar() {
  return (
    <>
      <nav>
        <div className="navLeft">
          <a href=" ">Home</a>
          <a href=" ">About</a>
          <a href=" ">Schedules</a>
          <a href=" ">Membership</a>
          <a href=" ">Pricing</a>
        </div>
        <div className="navRight">
          <a href=" ">Offers</a>
          <button>Courses</button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
