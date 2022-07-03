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
      headerBackground {
        url
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
    <section style={{backgroundImage: `url(${page.headerBackground.url})`
  }} class="showcase-area" id="showcase">
      <div class="showcase-container" id="home">
        <h1 class="main-title" >{page.headerTitle}</h1>
        <p>{page.headerDescription}</p>
      </div>
    </section>
  );
};

export default Header;
