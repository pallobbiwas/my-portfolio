import React from "react";
import img from "../../assets/pallob .png";
import "./Home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="bg-gray-700 mt-32 mb-20">
        <div class="hero container mx-auto md:h-96">
          <div class="hero-content flex-col lg:flex-row">
            <div className="md:w-2/5">
              <img className="banner-img bottom-28 relative" src={img} alt="img" />
            </div>
            <div className="md:w-3/5 md:text-left bottom-20 relative">
              <h1 class="text-5xl font-bold tracking-widest">Pallob Biswas</h1>
              <h1 class="text-3xl font-bold tracking-widest mt-3">Fornt End Wev Developer</h1>
              <p class="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Dowonload CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
