import React from 'react';
import { useState, useEffect } from "react";
import { AiFillFacebook, AiFillInstagram, AiFillWechat } from "react-icons/ai";

import { queryURL, apiKey } from '../../constants';
import '../../index.scss';
import './Social.scss';

const query =
`{
  socialCollection {
    items {
      socialFacebookLink
      socialInstagramLink
      socialWeChatLink
    }
  }
}`

const Social = () => {
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
      !errors ? setPage(data.socialCollection.items[0]) : console.error(errors);
    });
  }, []);

  if (!page) {
    return "Loading...";
  }

  return (
    <div className="socialIcons">
      <a href={page.socialFacebookLink} target="_blank" rel="noreferrer"><AiFillFacebook className="socialIcon gold"/></a>
      <a href={page.socialInstagramLink} target="_blank" rel="noreferrer"><AiFillInstagram className="socialIcon gold"/></a>
      <a href={page.socialWeChatLink} target="_blank" rel="noreferrer"><AiFillWechat className="socialIcon gold"/></a>
    </div>
  );
};

export default Social;
