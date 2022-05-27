import React from "react";

const AboutMe = () => {
  return (
    <div id="about">
      <div className="mx-20">
        <h1 className="text-4xl tracking-widest mb-5">About me</h1>
        <hr />
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="mt-10">
            <p>
              Hello. I am pallob biswas. My home town is Barishal, pirojpur. Now
              i livs in dhaka, panthopath. I am MERN stack web developer. I
              complete my graduation at{" "}
              <span>computer science and engineering</span> from Dhaka
              international university.
            </p>
          </div>
          <div>
            <ul className="steps steps-vertical">
              <li className="step step-primary">
                SSC in Science (A.K institution,Daihary)
              </li>
              <li className="step step-primary">
                Dimlopa in computer (Bhola Politechnic Institute)
              </li>
              <li className="step step-primary">BSC in CSE (DIU)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
