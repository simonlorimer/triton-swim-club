import React from 'react';

import background from '../../assets/blackswim.jpg';
import Navbar from '../Navbar/Navbar';
import Blurb from '../Blurb/Blurb';

import '../../index.scss';
import './Header.scss';

const Header = () => {
  return (
    <div className="headerImage" style={{
      backgroundImage: `url(${background})`
      }}>
      <Navbar/>
      <Blurb/>
    </div>
  );
};

export default Header;
