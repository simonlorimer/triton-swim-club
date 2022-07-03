import React from 'react';

import './News.scss';

const News = () => (
  <section id="food">
    <h2>Types of food</h2>
    <div class="food-container container">
      <div class="food-type fruite">
        <div class="img-container">
          <img src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="error" />
          <div class="img-content">
            <h3>fruite</h3>
            <a
              href="https://en.wikipedia.org/wiki/Fruit"
              class="btn btn-primary"
              target="blank"
              >
                learn more
              </a>
          </div>
        </div>
      </div>
      <div class="food-type vegetable">
        <div class="img-container">
          <img src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="error" />
          <div class="img-content">
            <h3>vegetable</h3>
            <a
              href="https://en.wikipedia.org/wiki/Vegetable"
              class="btn btn-primary"
              target="blank"
              >
                learn more
            </a>
          </div>
        </div>
      </div>
      <div class="food-type grin">
        <div class="img-container">
          <img src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="error" />
          <div class="img-content">
            <h3>grin</h3>
            <a
              href="https://en.wikipedia.org/wiki/Grain"
              class="btn btn-primary"
              target="blank"
              >
                learn more
              </a>
          </div>
        </div>
      </div>
    </div>
  </section >
);

export default News;
