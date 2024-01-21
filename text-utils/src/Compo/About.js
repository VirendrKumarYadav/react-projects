import React from "react";


const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <img src="" alt="Logo" className="mb-4" />

        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <img
          src="https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D"
          alt="About Us"
          className="rounded-md mb-4"
        />

        <p className="text-gray-700">
          Welcome to our about page! Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam eget justo vel purus gravida sagittis. Sed
          consequat justo id elit venenatis, ac fermentum ligula malesuada.
        </p>
      </div>
    </div>
  );
};

export default About;
