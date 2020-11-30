import React from "react";

import Hero from "../components/Hero.js";
import Carousel from "../components/Carousel.js";

function HomePage(props) {
  return (
    <div>
      <Hero title={props.title} subtitle={props.subtitle} text={props.text} />
      <Carousel />
    </div>
  );
}

export default HomePage;
