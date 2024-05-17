import React from "react";
import './header.css'

const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
        <a
          href="/"
          className="logo d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        ><span>Tasty</span></a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
                Menu
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Specialties
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Reservation
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
