import React from 'react';
import {useState, useEffect} from "react";

import { queryURL, apiKey } from '../../constants';
import '../../index.scss';
import './Blurb.scss';

const query =
`{
  blurbCollection {
    items {
      blurbTitle
      blurbDescription
      blurbImage {
        url
      }
    }
  }
}`

const Blurb = () => {
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
      !errors ? setPage(data.blurbCollection.items[0]) : console.error(errors);
    });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <div className="blurbSection margin-dynamic">
      <div className="blurbText">
        <h1>{page.blurbTitle}</h1>
        <p>{page.blurbDescription}</p>
      </div>
    </div>
  );
};

export default Blurb;
