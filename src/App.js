import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header/Header";
import HomeBody from "./Components/HomeBody/HomeBody";
import Navbar from "./Components/Navbar/Navbar.js";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <div className="App">
     

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
