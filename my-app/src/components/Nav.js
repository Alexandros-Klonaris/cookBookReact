import React from "react";
import { Link, Outlet, Navigate } from "react-router-dom";


export default function Nav() {
    return (
        
        <nav className="navbar-light navbar navbar-expand-sm">
          <Link className="navbar-brand" to="./index.html">
            <img src="./sources/brand-logo.jpeg" alt="Smoothie Logo" height="70"/>
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link dropdown-toggle" to="#" data-bs-toggle="dropdown" aria-expanded="false"><span
                    className="sr-only">(current)</span>Smoothies</Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="./receipe_1.html">Green Smoothie</Link></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><Link className="dropdown-item" to="./receipe_2.html">Strawberry Smoothie</Link></li>
                  <li>
                    <hr className="dropdown-divider"/>
                  </li>
                  <li><Link className="dropdown-item" to="./receipe_3.html">Banana Smoothie</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#" id="aboutUs">About us</Link>
              </li>
            </ul>
          </div>
        </nav>
       
    )
}