import React from 'react'
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const contect = () => {
  return (
    <div>
      <Header />
      <div className='contect_bg'>
      </div>
      <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold mb-4">Connect with Us</h2>

        <p className="mb-4">
          We'd love to hear from you! If you have any questions, suggestions, or
          just want to say hello, feel free to reach out to us at{" "}
          <span className="text-green-500 font-bold">
            softech.vire@gmail.com
          </span>{" "}
          or through our social media channels.
        </p>

        <div className="flex items-center space-x-4 justify-center">
          <a
            href="https://twitter.com/Im_viroff?t=F5EvBMtZuUbBDGZptg1Qdg&s=09"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://github.com/VirendrKumarYadav"
            className="text-purple-500 hover:underline"
          >
            Github
          </a>
          <a
            href="https://www.instagram.com/im_vireoff/"
            className="text-red-500 hover:underline"
          >
            Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/virendra-yadav-446894227/"
            className="text-blue-800 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default contect
