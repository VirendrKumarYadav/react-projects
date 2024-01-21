import React from "react";
import { Link} from 'react-router-dom';

const Header = () => {
  const filterImage = (e) => {
    console.log(e.terget.value);
  };

  return (
    <div className="font-serif flex flex-row justify-between max-px-3 py-3 bg-gray-300 items-center">
      <div className="flex gap-3 items-center ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcrqvEDkNYT8EEfwsQ8CgoKLs1vU3SbdXIAg-uXeEU89RddoPE_01rCwQCoGFOPXWTumQ&usqp=CAU"
          className="rounded-full w-10"
        />
        <span className="text-2xl max-lg:text-lg font-bold font-sans text-blue-500 ">
          Rishi TextUtils
        </span>
        <ul className=" px-10 flex gap-5 text-blue-500 font-serif font-bold text-lg ">
          <Link to="/" className="hover:text-blue-800">
            Home
          </Link>

          <Link to="/about" className="hover:text-blue-800">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-800">
            Contact
          </Link>
        </ul>
      </div>

      <div className="flex gap-3 max-lg:flex-col my-2 mx-2">
        <input
          placeholder="Search..."
          className="py-1 px-2 rounded-lg max-w-40"
          onChange={(e) => filterImage(e)}
        ></input>
        <div className="bg-blue-500 text-center p-2 rounded-lg hover:bg-blue-800">
          Search
        </div>
      </div>
    </div>
  );
};

export default Header;
