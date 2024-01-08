import React from "react";

const header = () => {
  return (
    <div className="">
      <div className="flex bg-cyan-600 opacity-90 py-5 px-7 rounded-l-xl">
        <ul className="flex gap-5 font-mono font-bold text-black cursor-pointer">
          <li>
            <a className="hover:text-yellow-200">About</a>
          </li>
          <li>
            <a className="hover:text-yellow-200">Certificates</a>
          </li>
          <li>
            <a className="hover:text-yellow-200">Projects</a>
          </li>
          <li>
            <a className="hover:text-yellow-200">More</a>
          </li>
          <li>
            <a className="hover:text-yellow-200">Contect</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default header;
