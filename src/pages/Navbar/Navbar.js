import React from "react";
import logoImg from "../../assets/pallab 5PORT SIZE w.jpg";
import "./Navbar.css";

const Navbar = ({ children }) => {
  return (
    <div className="">
      <div className="drawer drawer-end ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar bg-gray-600">
            <div className="flex-1 px-2 mx-2">
              <div>
                <img className="nav-img" src={logoImg} alt="" />
              </div>
              <h1 className="text-2xl ml-3 tracking-wider">Pallob's info.</h1>
            </div>
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            <div className="flex-none hidden lg:block">
              <ul className="nav-menu">
                <li className="nav-iteam">
                  <a className="nav-link" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-iteam">
                  <a className="nav-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-iteam">
                  <a className="nav-link" href="#contuct">
                    Contuct
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {children}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-gray-600 ">
            <li className="nav-iteam">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-iteam">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-iteam">
              <a className="nav-link" href="#contuct">
                Contuct
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
