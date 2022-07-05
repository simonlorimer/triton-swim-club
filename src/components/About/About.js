import React from 'react';
import {useState, useEffect} from "react";

import { queryURL, apiKey } from '../../constants';

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
    <div>
      <div className="aboutText">
        <h1>{page.aboutTitle}</h1>
        <p>{page.aboutDescription}</p>
      </div>
      <div className="aboutImage">
        <img src={page.aboutImage.url} alt={page.aboutTitle}/>
      </div>
    </div>
  );
};

export default About;
