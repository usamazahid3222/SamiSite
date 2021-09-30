import React from "react";
import web from "../src/images/10.png";
import Common from "./Common";

function About() {
  return (
    <>
    <Common 
    name='Welcome to About Page'
    imgsrc={web}
    visit='/contact'
    btname="Contact Now"
     />
  
    </>
  );
}

export default About;
