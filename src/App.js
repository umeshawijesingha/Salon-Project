import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Header from "./Components/Header/Header";
import HomeBody from "./Components/HomeBody/HomeBody";
import Navbar from "./Components/Navbar/Navbar.js";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact";
import Hair from "./Pages/Hair";
import Offers from "./Pages/Offers";
import Events from "./Pages/Events";
import Booking from "./Pages/Booking";
function App() {
  return (
    <div className="App">
     

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/services/hair" element={<Hair/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
