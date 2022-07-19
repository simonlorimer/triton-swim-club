import React from 'react';
import {useState, useEffect} from "react";

import { queryURL, apiKey } from '../../constants';
import '../../index.scss';
import './News.scss';


const query =
`{
  newsCollection(order: newsDate_DESC, limit: 6)  {
    items {
      newsTitle
      newsDate
      newsAuthor
      newsDescription
      newsLinkText
      newsLink
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
    return "";
  }

  return (
    <div id="News" className="newsSection margin-dynamic">
      <h1>News</h1>
      <div className="newsEntries">
        {page.map((item, index) => {
          return (
            <div className="newsChild">
              <div key={"newsEntry" + index} className="newsEntry">
                <h2><a href={"#news" + index}>{item.newsTitle}</a></h2>
                <p>{(new Date(item.newsDate)).toLocaleDateString("en-US", options)} • {item.newsAuthor}</p>
              </div>
              <div className="modal" id={"news" + index} aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-header">
                  <h2>{item.newsTitle}</h2>
                  <p>{(new Date(item.newsDate)).toLocaleDateString("en-US", options)} • {item.newsAuthor}</p>
                    <a href="#close" className="btn-close" aria-hidden="true">×</a>
                  </div>
                  <div className="modal-body">
                    <p>{item.newsDescription}</p>
                    <p><a href={item.newsLink} target="_blank" rel="noreferrer">{item.newsLinkText}</a></p>
                    <img className="newsImage" src={item.newsImage.url} alt={item.newsTitle}/>
                  </div>
                  
                </div>
              </div>
            </div>
          ); 
        })}
      </div>
    </div>
  );
};

export default News;
