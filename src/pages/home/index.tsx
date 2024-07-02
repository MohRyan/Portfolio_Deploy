// import React from "react";
import Slider from "./slider/Index";
import MyProject from "./MyProject";
import Hero from "./Hero";
import MyForm from "./MyForm";

const Home = () => {
  return (
    <>
      <div className="">
        <section id="hero" className="">
          <Hero />
          <Slider />
        </section>
        <section id="myProject">
          <MyProject />
        </section>
        <section id="contact">
          <MyForm />
        </section>
      </div>
    </>
  );
};

export default Home;
