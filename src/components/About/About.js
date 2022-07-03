import React from 'react';

import './About.scss';

const About = () => (
  <section id="about">
    <div class="about-wrapper container">
      <div class="about-text">
        <p class="small">About Us</p>
        <h2>We've beem making healthy food last for 10 years</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab
            eos omnis, nobis dignissimos perferendis et officia architecto,
            fugiat possimus eaque qui ullam excepturi suscipit aliquid optio,
            maiores praesentium soluta alias asperiores saepe commodi
            consequatur? Perferendis est placeat facere aspernatur!
        </p>
      </div>
      <div class="about-img">
        <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food" />
      </div>
    </div>
  </section>
);

export default About;
