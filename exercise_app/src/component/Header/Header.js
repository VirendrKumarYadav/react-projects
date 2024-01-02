import './Header.css'
import React from 'react'

function Header(props) {
    return (
      <div>
        <div className="headContainer p-3">
          <div className="left flex justify-center items-center">
            <img
              src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
              className="h-9 w-9 rounded-full"
            ></img>
            <h2 className="text-rose-950 font-bold text-3xl">Rishiyam</h2>
          </div>
          <div className="mid">
            <ul>
              <li>
                <a href="#back">Back</a>
              </li>
              <li>
                <a href="#cardio">Cardio</a>
              </li>
              <li>
                <a href="#chest">Chest</a>
              </li>
              <li>
                <a href="#lowerarm">Lower Arms</a>
              </li>
              <li>
                <a href="#neck">Neck</a>
              </li>
              <li>
                <a href="#shoulders">Shoulders</a>
              </li>
              <li>
                <a href="#upperlegs">Upper Legs</a>
              </li>
              <li>
                <a href="#waist">Waist</a>
              </li>
            </ul>
          </div>
          <div className="right">
            <button id="getStarted" className="p-10 text-rose-950 font-bold">
              Sign in
            </button>
          </div>
        </div>
      </div>
    );
}

export default Header;
