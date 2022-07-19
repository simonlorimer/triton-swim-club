import React from 'react';

import './Menu.scss';
import '../../index.scss';

const Menu = () => {
  return (
    <div className="burgerMenu">
      <input id="menu-toggle" type="checkbox"/>
      <label className='menu-button-container' for="menu-toggle">
        <div className='menu-button'></div>
      </label>
      <ul className="menu">
        <li><a href="#About" className="gold">About</a></li>
        <li><a href="#News" className="gold">News</a></li>
        <li><a href="#Gallery" className="gold">Gallery</a></li>
        <li><a href="#Info" className="gold">Info</a></li>
        <li><a href="#Contact" className="gold">Contact</a></li>
      </ul>
    </div>
  );
};

export default Menu;
