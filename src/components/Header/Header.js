import React from 'react';
import {useState, useEffect} from "react";


import { queryURL, apiKey } from '../../constants';
import Navbar from '../Navbar/Navbar';
import About from '../About/About';

import '../../index.scss';
import './Header.scss';

const query =
`{
  aboutCollection {
    items {
      aboutImage {
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
      !errors ? setPage(data.aboutCollection.items[0]) : console.error(errors);
    });
  }, []);

  if (!page) {
    return "";
  }

  return (
    <div className="headerImage" style={{
      backgroundImage: `url(${page.aboutImage.url})`
      }}>
      <Navbar/>
      <About/>
    </div>
  );
};

export default Header;
