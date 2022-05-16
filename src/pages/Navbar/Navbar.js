import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div class="drawer">
      <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content text-left fixed top-0">
        <label for="my-drawer-4" class=" drawer-button btn btn-primary">
          <p>
            <FontAwesomeIcon className="text-4xl" icon={faCircleArrowRight}></FontAwesomeIcon>
          </p>
        </label>
      </div>
      <div class="drawer-side mt-16 rounded-lg ">
        <label for="my-drawer-4" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-gray-900 text-white ">
          <li>
           <a href="#home">Home</a>
           <a href="#about">About me</a>
           <a href="#hire">Why hire me</a>
           <a href="#contuct">Contuct me</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
