// import React from "react";
import Hero from "./components/Hero";
import MyForm from "./components/MyForm";
import Blog from "./components/Blog";
import Project from "./components/Project";
import Slider from "./slider/Index";
import MyProject from "./MyProject";

const Home = () => {
  return (
    <>
      <div className="px-5">
        <div className="w-full max-w-[1000px]">
          <section id="hero">
            <Hero />
            <Slider />
          </section>
          <section id="myProject">
            <MyProject />
          </section>
          <section id="myPlant">
            <b>Price Plans</b>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est qui
              debitis autem sint et blanditiis neque assumenda ipsum aliquid
              exercitationem, quas consequatur nobis commodi nemo illum odio
              doloremque accusantium. Id!
            </p>
            <Hero />
          </section>
          <section id="case">
            <Project />
          </section>
          <section>
            <Blog />
          </section>
          <section>
            <MyForm />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
