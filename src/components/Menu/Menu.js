import React from 'react';
import { useState, useEffect } from "react";

import { queryURL, apiKey } from '../../constants';
import './Menu.scss';
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

const Menu = () => {
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
    <div className="burgerMenu">
      <input id="menu-toggle" type="checkbox"/>
      <label className='menu-button-container' for="menu-toggle">
      <div className='menu-button'></div>
      </label>
      <ul className="menu">
        <li><a href="#About" className="gold">{page.headerAboutText}</a></li>
        <li><a href="#News" className="gold">{page.headerNewsText}</a></li>
        <li><a href="#Gallery" className="gold">{page.headerGalleryText}</a></li>
        <li><a href="#Info" className="gold">{page.headerInfoText}</a></li>
        <li><a href="#Contact" className="gold">{page.headerContactText}</a></li>
      </ul>
    </div>
  );
};

export default Menu;
