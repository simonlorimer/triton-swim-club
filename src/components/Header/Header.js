import React from 'react';
import {useState, useEffect} from "react";

import { queryURL, apiKey } from '../../constants';
import './Header.scss';

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

const Header = () => {
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
    return "Loading...";
  }

  return (
    <div>
      <div className="navbar">
        <div className="headerLogo">
          <img src={page.headerLogo.url} alt="Triton Swim Club Logo"></img>
        </div>
        <div className="headerLinks">
          <a href="#About">{page.headerAboutText}</a>
          <a href="#News">{page.headerNewsText}</a>
          <a href="#Gallery">{page.headerGalleryText}</a>
          <a href="#Info">{page.headerInfoText}</a>
          <a href="#Contact">{page.headerContactText}</a>
        </div>
        <div className="headerBurgerMenu">
          <p>tbc</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
