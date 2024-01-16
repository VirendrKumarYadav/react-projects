import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const naviagate = useNavigate();

  const handleClick = () => {
    console.log("hi click");
    naviagate("/home");
  };
  return (
    <div>
      <h1>About</h1>
      <button onClick={handleClick}>Go to Home</button>
    </div>
  );
};

export default About;
