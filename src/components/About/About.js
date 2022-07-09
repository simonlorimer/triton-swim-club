import React from 'react';
import {useState, useEffect} from "react";

import { queryURL, apiKey } from '../../constants';
import '../../index.scss';
import './About.scss';

const query =
`{
  aboutCollection {
    items {
      aboutTitle
      aboutDescription
      aboutImage {
        url
      }
    }
  }
}`

const About = () => {
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
    return "Loading...";
  }

  return (
    <div className="aboutSection margin-dynamic">
      <div className="aboutText">
        <h1>{page.aboutTitle}</h1>
        <p>{page.aboutDescription}</p>
      </div>
    </div>
  );
};

export default About;
