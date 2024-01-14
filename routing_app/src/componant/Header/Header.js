import './Header.css'
import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
      <div>
        <div className="headContainer p-3">
          <div className="left flex justify-center items-center">
            <img
              src="https://i.ytimg.com/vi/gey73xiS8F4/maxresdefault.jpg"
              className="h-9 w-9 rounded-full" alt='_blank' />
        
            <h2 className="text-rose-950 font-bold text-3xl">Rishiyam</h2>
          </div>
          <div className="mid">
            <ul>
              <Link to="/Home">Home</Link>
              <link to="/Resturent">Resturent</link>
              <link to="/Food">Food</link>
              <link to="/Contect">Contect</link>
              <link to="/About">About</link>
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
