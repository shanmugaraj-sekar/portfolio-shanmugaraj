import "./App.css";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home";

import NavBar from "./Components/Navbar";
import Skill from "./Components/Skill";
import Work from "./Components/Work";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Work />
      <Footer />
    </>
  );
}

export default App;
