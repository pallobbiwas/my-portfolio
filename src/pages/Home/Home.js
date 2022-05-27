import React from "react";
import img from "../../assets/pallob .png";
import pdf from "../../assets/partho cv.pdf";
import "./Home.css";

const Home = () => {
  return (
    <div id="home" className="mt-32">
      <div className="bg-gray-700 mt-32 mb-20">
        <div class="hero container mx-auto md:h-96">
          <div class="hero-content flex-col lg:flex-row">
            <div className="md:w-2/5">
              <img
                className=" banner-img bottom-28 relative"
                src={img}
                alt="img"
              />
            </div>
            <div className="md:w-3/5 md:text-left bottom-20 relative">
              <h1 className="title" data-text="Pallob Biswas...">
                Pallob Biswas
              </h1>
              <h2 className="text-2xl">Fornt End Web Developer</h2>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <a className="btn btn-primary" download={pdf} href={pdf}>
                Dowonload CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
