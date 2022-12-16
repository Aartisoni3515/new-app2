import React from "react";
import "./App.css";

import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";
// import CartList from "./components/CartList"
import Cart from "./components/Cart";
 

function App() {
  return (
    <>
      <div className="nav-bar">
     
        <Router>
          
          <Routes>
            <Route path="/"   element={<Home />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            {/* <Route path="/Cart" element={<Cart />} /> */}
            <Route path="/Cart" element={<Cart />} />
            <Route path="/services" element={<Cart />} />

            {/* <Route path="/services/:id" element={<Cart />} /> */}
            


          </Routes>
    
        </Router>
      </div>
      
    </>
  );
}

export default App;
