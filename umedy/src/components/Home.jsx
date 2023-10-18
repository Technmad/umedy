import React from "react";
import Button from "../layout/Button";
import { Link } from "react-scroll";
import img from "../assets/hero.svg";

const Home = () => {
  return (
    <div className=" min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10 ">
      <div className=" md:w-2/4 text-center ">
        <h2 className=" text-5xl font-semibold leading-tight">
          <span className="text-brightGreen"> Umedy</span>: Learn Anything,
          Anywhere
        </h2>
        <p>
          Umedy is your gateway to limitless learning possibilities. With our
          cutting-edge eLearning platform, you can explore a vast library of
          courses on a variety of topics, from academic subjects to practical
          skills. Learn at your own pace, on your own schedule, and achieve your
          goals with Umedy
        </p>

        <Link to="contact" spy={true} smooth={true} duration={500}>
          <Button title="Contact Us" />
        </Link>
      </div>

      <div className=" w-full md:w-2/4">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default Home;
