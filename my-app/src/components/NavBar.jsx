import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/NavBar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-brand">Logo</NavLink>

      <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/resource">Resource</NavLink>
        </li>
        <li>
          <NavLink to="/tool">Tool</NavLink>
        </li>
        <li>
          <div className="w-44 justify-start items-start inline-flex ml-24">
            <div className="p-2 rounded-[10px] border border-white justify-center items-center gap-2.5 flex">
              <div className="text-white text-xl font-medium font-['Inter']">Sign In</div>
            </div>
          </div>
        </li>
        <li>
          <div className="w-44 p-2 bg-white rounded-lg justify-center items-center gap-2.5 inline-flex">
            <div className="text-black text-xl font-medium font-['Inter']">Contact Sales</div>
          </div>
        </li>
      </ul>

      <button className="navbar-toggle" onClick={toggleNavbar}>
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  );
};

export default Navbar;
