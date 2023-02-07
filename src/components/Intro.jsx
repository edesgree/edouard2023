import React from 'react';
export default function Intro() {
  return (
    <div>
      <section className="columns">
        <div className="column">
          <span className="sup-title">Front-end developer | web designer</span>
          <h1>Hi 👋, I'm Edouard.</h1>
          <p>
            I am a frontend developer with a strong background in UX/UI. I try
            to make things simple and modern using best practices and newest
            industry trends. I am always looking for new things to learn whether
            it be in web development or my personal interests.
          </p>
        </div>
        <div className="column">
          <img src={`../assets/home-edouard.png`} alt="Edouard Desgrée" />
        </div>
      </section>

      <section className="level">
        <div class="level-item has-text-centered">
          <div>
            <img src={`../assets/item-green.png`} alt="" />
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <img src={`../assets/item-green.png`} alt="" />
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
        <div class="level-item has-text-centered">
          <div>
            <img src={`../assets/item-green.png`} alt="" />
            <p class="heading">Tweets</p>
            <p class="title">3,456</p>
          </div>
        </div>
      </section>
    </div>
  );
}
