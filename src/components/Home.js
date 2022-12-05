import React from "react";
import NavBar from "./NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div className="home-container">
        <div className="header">
          <h1> Hello, Welcome to our page</h1>
          <p>Explore more to know about us</p>
          <button>click here</button>
        </div>
      </div>
    </>
  );
}

export default Home;
