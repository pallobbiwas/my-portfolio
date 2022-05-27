import "./App.css";
import AboutMe from "./pages/About/AboutMe";
import ContuctMe from "./pages/Contuct/ContuctMe";
import Footer from "./pages/Footer/Footer";
import Home from "./pages/Home/Home";
import Navbar from "./pages/Navbar/Navbar";
import WhyHire from "./pages/WhyHire/WhyHire";

function App() {
  return (
    <div className=" app">
      <div className="text-yellow-100">
        <Navbar>
          <Home />
          <AboutMe />
          <WhyHire />
          <ContuctMe />
          <Footer />
        </Navbar>
      </div>
    </div>
  );
}

export default App;
