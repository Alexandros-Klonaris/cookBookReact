import React from "react";

export default function Nav() {
    return (
        
        <nav className="navbar-light navbar navbar-expand-sm">
          <a className="navbar-brand" href="./index.html">
            <img src="./sources/brand-logo.jpeg" alt="Smoothie Logo" height="70"/>
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false"><span
                    className="sr-only">(current)</span>Smoothies</a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="./receipe_1.html">Green Smoothie</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="./receipe_2.html">Strawberry Smoothie</a></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><a className="dropdown-item" href="./receipe_3.html">Banana Smoothie</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" id="aboutUs">About us</a>
              </li>
            </ul>
          </div>
        </nav>
       
    )
}