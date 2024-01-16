import './Header.css'
import React from 'react'
import {Link} from 'react-router-dom'

function Header(props) {
    return (
      <div>
        <div className="headContainer p-3 max-h-full">
          <div className="left flex justify-center items-center">
            <img
              src="https://images.unsplash.com/photo-1612927601601-6638404737ce?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZvb2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww"
              className="h-11 w-11 rounded-full"
              alt="_blank"
            />
            <h2 className="text-rose-950 font-bold text-3xl text-shadow-lg">
              Rishiyam
            </h2>
          </div>
          <div className="mid flex flex-wrap">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/Contect">Contect</Link>
              </li>
              <li>
                <Link to="/Food">Food</Link>
              </li>
              <li>
                <Link to="/Resturent">Resturent</Link>
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
