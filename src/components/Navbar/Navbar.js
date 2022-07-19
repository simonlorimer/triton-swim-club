import React from 'react';

import Social from '../Social/Social';
import Menu from '../Menu/Menu';
import logo from '../../assets/tritonlogo.png';
import './Navbar.scss';
import '../../index.scss';

const Navbar = () => {
  return (
    <div className="navbar margin-dynamic">
      <div className="headerLogo">
        <a href="http://www.tritonswimclub.co.nz/"><img className="logo" src={logo} alt="Triton Swim Club Logo"/></a>
      </div>
      <div className="headerLinks show-desktop gold">
        <a href="#About" className="gold">About</a>
        <a href="#News" className="gold">News</a>
        <a href="#Gallery" className="gold">Gallery</a>
        <a href="#Info" className="gold">Info</a>
        <a href="#Contact" className="gold">Contact</a>
      </div>
      <div className="headerSocialIcons show-desktop">
        <Social/>
      </div>
      <div className="headerBurgerMenu show-mobile">
        <Menu/>
      </div>
    </div>
  );
};

export default Navbar;
