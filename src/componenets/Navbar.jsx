import React from "react";
import "../stylesheets/navbar.css";
import { FaDragon } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
const Navbar = () => {
  let handleClick = (e) => {
    let form = document.getElementById("createForm");
    let bg = document.getElementById("bg");
    bg.classList.toggle("blur");
    form.classList.toggle("hide2");
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="sec1">
          <div className="icon">
            <CiLogin />
            <a onClick={handleClick} className="contribute">
              contribute
            </a>
            <FaDragon className="dragon" />
          </div>

          <div className="search">
            <input
              type="text"
              className="
          input"
              placeholder="...enter a nearby location"
            ></input>
            <button className="search_btn">
              <p className="search">search</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
