import React from 'react';

import './Navbar.scss';

const Navbar = () => (
  <nav class="navbar" >
    <div class="navbar-container container">
      <input type="checkbox" name="" id=""/>
      <div class="hamburger-lines">
        <span class="line line1"></span>
        <span class="line line2"></span>
        <span class="line line3"></span>
      </div>
      <ul class="menu-items">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#food">News</a></li>
        <li><a href="#food-menu">Gallery</a></li>
        <li><a href="#testimonials">Club Info</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <h1 class="logo">TSC</h1>
    </div>
  </nav>
);

export default Navbar;
