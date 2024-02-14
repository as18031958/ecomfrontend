import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Component.css'; // Import your CSS file for styling
import { FaCartArrowDown } from "react-icons/fa";
import { GiShop } from "react-icons/gi";





const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);

  

  const toggleHamburgerMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <GiShop /> zShop
      </NavLink>
      <ul className="nav-links">
        <li><NavLink to="/">Home</NavLink></li>
        <li>
          <NavLink to="/products" onClick={toggleProductsDropdown}>
            Products
          
          {isProductsDropdownOpen && (
            <ul className="dropdown-content">
                <li><NavLink to="/smartphones">Smartphones</NavLink></li>
                <li><NavLink to="/laptop">Laptops</NavLink></li>
                <li><NavLink to="/homedecoration">Homedecoration</NavLink></li>
                <li><NavLink to="/menswatches">Menswatches</NavLink></li>
                <li><NavLink to="/sunglasses">Sunglasses</NavLink></li>
              
            </ul>
         )}
         </NavLink>
        </li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/addtocart"><FaCartArrowDown style={{ fontSize: 24 }} /></NavLink></li>
      </ul>
      <button className="hamburger-menu" onClick={toggleHamburgerMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      {isOpen && (
        <div className="nav-links-mobile">
          <li><NavLink to="/">Home</NavLink></li>
          <li>
          {/* Products dropdown */}
          <NavLink to="/products" onClick={toggleProductsDropdown}>
            Products
          </NavLink>
          {isProductsDropdownOpen && (
            <ul className="dropdown-content">
                <li><NavLink to="/smartphones">smartphones</NavLink></li>
                <li><NavLink to="/laptop"></NavLink></li>
                <li><NavLink to="/homedecoration"></NavLink></li>
                <li><NavLink to="/menswatches"></NavLink></li>
                <li><NavLink to="/sunglasses"></NavLink></li>
              
            </ul>
         )}
        </li>
          <li><NavLink to="/register">Register</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/addtocart">Cart</NavLink></li>
        </div>
      )}
    </nav>
  );
};


export default Headers;