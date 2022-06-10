import React from "react";
import { useNavigate } from "react-router";
import project1 from "../../assets/project1.png";
import project2 from "../../assets/project2.png";
import project3 from "../../assets/project3.png";

const WhyHire = () => {
  const navigated = useNavigate();
  const goDetails = () => {
    navigated('/details1')
  }
  return (
    <div id="hire">
      <div className="container mx-auto my-20">
        <div className="mb-10">
          <h1 className="text-4xl text-primary font-bold">My work summery</h1>
        </div>
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 mx-auto gap-4">
            <div className="bg-slate-700 mr-10 rounded-2xl text-white  py-5 px-3 ">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/4 mx-auto"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
              </div>
              <h1 className=" my-2 text-5xl font-bold ">20+</h1>
              <p className="text-2xl">Group work</p>
            </div>
            <div className="bg-slate-800 mr-10 rounded-2xl text-white py-5 px-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/4 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
                  />
                </svg>
              </div>
              <h1 className=" my-2 text-5xl font-bold ">10+</h1>
              <p className="text-2xl">Group projects work</p>
            </div>
            <div className="bg-slate-500 rounded-2xl text-white mr-10 py-5 px-3">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1/4 mx-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h1 className=" my-2 text-5xl font-bold ">36+</h1>
              <p className="text-2xl">Projects</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 my-20">
        <h1 className="text-4xl text-primary font-bold mb-8">My skill</h1>
        <div>
          <ul class="steps steps-vertical lg:steps-horizontal">
            <li data-content="✓" class="step step-primary px-10">
              Html5
            </li>
            <li data-content="✓" class="step step-primary">
              Css3
            </li>
            <li data-content="✓" class="step step-primary">
              Java script
            </li>
            <li data-content="✓" class="step step-primary">
              React.js
            </li>
            <li data-content="✓" class="step step-primary">
              Node.js
            </li>
            <li data-content="✓" class="step step-primary">
              Express.js
            </li>
            <li data-content="✓" class="step step-primary">
              Mongodb
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className=" container mx-auto my-20">
          <div className="my-4 mb-10 mx-20">
            <h1 className="text-4xl text-primary font-bold mb-8">My Project</h1>
            <hr />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-600 p-2 rounded-lg">
              <div className="overflow-y-auto h-96 rounded-md">
                <img src={project1} alt="" />
              </div>
              <div className="text-left mt-4">
                <button className="btn btn-primary btn-sm px-4">
                  <a href="https://assignment-12-14077.web.app/" target="blank">
                    Live link
                  </a>
                </button>
                <button className="btn btn-primary btn-sm mx-4 px-4">
                  <a
                    href="https://github.com/pallobbiwas/car-parts-menufacturing"
                    target="blank"
                  >
                    Client site
                  </a>
                </button>
                <button className="btn btn-primary btn-sm px-4">
                  <a
                    href="https://github.com/pallobbiwas/car-parts-menufacturing-server"
                    target="blank"
                  >
                    Server site
                  </a>
                </button>
              </div>
            </div>
            <div className="bg-gray-600 p-2 rounded-lg">
              <div className="overflow-y-auto h-96 rounded-md">
                <img src={project2} alt="" />
              </div>
              <div className="text-left mt-4">
                <button className="btn btn-primary btn-sm px-4">
                  <a
                    href="https://assignment-11-49b4b.web.app/home"
                    target="blank"
                  >
                    Live link
                  </a>
                </button>
                <button className="btn btn-primary btn-sm mx-4 px-4">
                  <a
                    href="https://github.com/pallobbiwas/warehous-management"
                    target="blank"
                  >
                    Client site
                  </a>
                </button>
                <button className="btn btn-primary btn-sm px-4">
                  <a
                    href="https://github.com/pallobbiwas/warehouse-management-server"
                    target="blank"
                  >
                    Server site
                  </a>
                </button>
              </div>
            </div>
            <div className="bg-gray-600 p-2 rounded-lg">
              <div className="overflow-y-auto h-96 rounded-md">
                <img src={project3} alt="" />
              </div>
              <div className="text-left mt-4">
                <button className="btn btn-primary btn-sm px-4">
                  <a href="https://assignment-10-2883c.web.app/" target="blank">
                    Live link
                  </a>
                </button>
                <button className="btn btn-primary btn-sm mx-4 px-4">
                  <a
                    href="https://github.com/pallobbiwas/Rathika-Ramasamy-portfolio"
                    target="blank"
                  >
                    Client site
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyHire;
