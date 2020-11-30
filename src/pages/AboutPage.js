import React from "react";

import Hero from "../components/Hero.js";
import Content from "../components/Content.js";

function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />
      <Content>
        Hello
        <p>Have to put some content here </p>
      </Content>
    </div>
  );
}

export default AboutPage;
