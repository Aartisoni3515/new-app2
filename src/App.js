import React from "react";
import "./App.css";

import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";
import Cart from "./components/Cart";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="nav-bar">
        <Router>
          {/* <NavBar /> */}
          
          <Routes>
            <Route path="/"   element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Cart" element={<Cart />} />


          </Routes>
    
        </Router>
      </div>
    </>
  );
}

export default App;
