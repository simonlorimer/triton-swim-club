import React from 'react';
import {useState, useEffect} from "react";

import { queryURL, apiKey } from '../../constants';


const query =
`{
  newsCollection {
    items {
      newsDate
      newsTitle
      newsDescription
      newsImage {
        url
      }
    }
  }
}`

const News = () => {
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
      !errors ? setPage(data.newsCollection.items) : console.error(errors);
    });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <div>
      {page.map((item, index) => {
        return (
          <div key={"newsEntry" + index} className="newsEntry">
            <p>{item.newsDate}</p>
            <h3>{item.newsTitle}</h3>
            <p>{item.newsDescription}</p>
            <img src={item.newsImage.url} alt={item.newsTitle}/>
          </div>
        ); 
      })}
    </div>
  );
};

export default News;
