import React from "react";
import Hero from "../components/Hero.js";
import FormInput from "../components/FormInput.js";

function ContactPage(props) {
  return (
    <>
      <Hero title={props.title} />
      <FormInput />
    </>
  );
}

export default ContactPage;
