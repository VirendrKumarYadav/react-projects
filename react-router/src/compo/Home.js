import React from "react";
import { useNavigate,Link } from "react-router-dom";

const Home = () => {
  const naviagate = useNavigate();

  const handleClick = () => {
    console.log("hi click");
    naviagate("./about");
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick}>Go to About</button>
      <hr></hr>
      <Link to="/about">About</Link>
      
    </div>
  );
};

export default Home;
