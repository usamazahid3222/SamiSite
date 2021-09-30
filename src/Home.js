import React from "react";
import { NavLink } from "react-router-dom";
import web from "../src/images/9.png";
import Common from "./Common";

function Home() {
  return (
    <>
   <Common
    name='Homepage Welcome to '
    imgsrc={web}
    visit='/service'
    btname="Get Started"
    />
    </>
  );
}

export default Home;
