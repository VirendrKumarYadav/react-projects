import React from 'react'
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const About = () => {
  return (
    <div>
      <Header />
      <div className='about_bg'></div>
      <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>

        <p className="mb-4">
          Welcome to <span className="text-green-500 font-bold">RISHIYAM</span>{" "}
          - Your Culinary Companion!
        </p>

        <p className="mb-4">
          At <span className="text-green-500 font-bold">RISHIYAM</span>, we are
          passionate about bringing delightful culinary experiences to your
          fingertips. Whether you're a seasoned chef or a food enthusiast, our
          app is designed to inspire your culinary journey and make every meal a
          memorable one.
        </p>

        <h3 className="text-2xl font-semibold mb-2">Our Story</h3>

        <p className="mb-4">
          Founded in <span className="text-green-500 font-bold">[2024]</span>,{" "}
          <span className="text-green-500 font-bold">RISHIYAM</span> started
          with a simple idea - to make cooking and enjoying food more
          accessible, enjoyable, and interactive. We believe that good food has
          the power to bring people together and create lasting memories.
        </p>

        {/* Add more sections for Mission and Values, Meet the Team, and Contact Us as needed */}
      </div>
      <Footer />
    </div>
  );
}

export default About
