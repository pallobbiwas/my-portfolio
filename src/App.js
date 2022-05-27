import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "./App.css";
import AboutMe from "./pages/About/AboutMe";
import ContuctMe from "./pages/Contuct/ContuctMe";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import WhyHire from "./pages/WhyHire/WhyHire";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" app">
      <div className="text-yellow-100">
        <Navbar>
          <Home />
          <AboutMe />
          <WhyHire />
          <ContuctMe />
        </Navbar>
      </div>
    </div>
  );
}

export default App;
