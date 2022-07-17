import React from 'react';
import { useState, useEffect } from "react";

import { queryURL, apiKey } from '../../constants';
import Social from '../Social/Social';
import Menu from '../Menu/Menu';
import './Navbar.scss';
import '../../index.scss';

const query =
`{
  headerCollection {
    items {
      headerLogo {
        url
      }
      headerAboutText
      headerNewsText
      headerGalleryText
      headerInfoText
      headerContactText
    }
  }
}`

const Navbar = () => {
  const [page, setPage] = useState(null);

  useEffect(() => {
    window.fetch(queryURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: apiKey,
      },
      body: JSON.stringify({ query }),
    })
    .then((response) => response.json())
    .then(({ data, errors }) => {
      !errors ? setPage(data.headerCollection.items[0]) : console.error(errors);
    });
  }, []);

  if (!page) {
    return "";
  }

  return (
    <div className="navbar margin-dynamic">
      <div className="headerLogo">
        <a href="http://www.tritonswimclub.co.nz/"><img className="logo"  src={page.headerLogo.url} alt="Triton Swim Club Logo"/></a>
      </div>
      <div className="headerLinks show-desktop gold">
        <a href="#About" className="gold">{page.headerAboutText}</a>
        <a href="#News" className="gold">{page.headerNewsText}</a>
        <a href="#Gallery" className="gold">{page.headerGalleryText}</a>
        <a href="#Info" className="gold">{page.headerInfoText}</a>
        <a href="#Contact" className="gold">{page.headerContactText}</a>
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
