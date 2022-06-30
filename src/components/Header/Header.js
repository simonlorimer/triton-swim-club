import React from 'react';
import {useState, useEffect} from "react";

import { queryURL, apiKey } from '../../constants';
import './Header.scss';

const query =
`{
  headerCollection {
    items {
      headerTitle
      headerDescription
      headerLogo {
        url
      }
      headerBackgroundCollection {
        items {
          url
        }
      }
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
      <div class="navbar">
        <div>
          <img src={page.headerLogo.url} alt="Triton Swim Club Logo"></img>
        </div>
        <div>
          <a href="#About">About Us</a>
          <a href="#News">News</a>
          <a href="#Gallery">Gallery</a>
          <a href="#Club">Club Info</a>
          <a href="#Contact">Contact Us</a>
        </div>
      </div>
      <p>{page.headerTitle}</p>
      <p>{page.headerDescription}</p>
    </div>
  );
};

export default Header;
