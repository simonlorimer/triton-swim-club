import React from 'react';
import {useState, useEffect} from "react";

import { queryURL, apiKey } from '../../constants';
import '../../index.scss';
import './News.scss';


const query =
`{
  newsCollection  {
    items {
      newsTitle
      newsDate
      newsAuthor
      newsDescription
      newsImage {
        url
      }
    }
  }
}`

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

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
    <div id="News" className="newsSection margin-dynamic">
      <h1>News</h1>
      <div className="newsEntries">
        {page.map((item, index) => {
          return (
            <div key={"newsEntry" + index} className="newsEntry">
              <h2>{item.newsTitle}</h2>
              <p>{(new Date(item.newsDate)).toLocaleDateString("en-US", options)} • {item.newsAuthor}</p>
              <p>{item.newsDescription}</p> 
              <img className="newsImage" src={item.newsImage.url} alt={item.newsTitle}/>
            </div>
          ); 
        })}
      </div>
    </div>
  );
};

export default News;
