import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Reviews from "./components/Reviews";

const App = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div id="home">
          <Home />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="courses">
          <Courses />
        </div>
        <div id="reviews">
          <Reviews />
        </div>
      </main>
    </div>
  );
};

export default App;
