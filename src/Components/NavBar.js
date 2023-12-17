import React from "react";
import { IoMenuSharp } from "react-icons/io5";

function NavBar() {
  function toggleMenu() {
    var navList = document.querySelector(".nav-list");
    navList.classList.toggle("show");
  }

  return (
    <>
      <nav>
        <div className="drop">
          <div class="menu-icon" onClick={toggleMenu}>
            <IoMenuSharp />
          </div>
          <div>
            <ul class="nav-list">
              <li>
                <a href=" ">Home</a>
              </li>
              <li>
                <a href=" ">About</a>
              </li>
              <li>
                <a href=" ">Schedules</a>
              </li>
              <li>
                <a href=" ">Membership</a>
              </li>
              <li>
                <a href=" ">Pricing</a>
              </li>
            </ul>
          </div>
        </div>

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
