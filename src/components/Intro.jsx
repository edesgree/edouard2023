import React from 'react';
import PhotoEd from '../assets/images/home-edouard.png';
import ItemGreen from '../assets/images/item-green.svg';
import ItemMustard from '../assets/images/item-mustard.svg';
import ItemSage from '../assets/images/item-sage.svg';
export default function Intro() {
  return (
    <div>
      <section className="columns">
        <div className="column is-two-thirds">
          <h5 className="subtitle is-5 sup-title">
            Front-end developer | web designer
          </h5>

          <h1 className="title is-1 ">
            Hi 👋,
            <br /> I'm Edouard.
          </h1>
          <p>
            I am a frontend developer with a strong background in UX/UI. I try
            to make things simple and modern using best practices and newest
            industry trends. I am always looking for new things to learn whether
            it be in web development or my personal interests.
          </p>
        </div>
        <div className="column is-one-thirds">
          <img src={PhotoEd} width="205" alt="Edouard Desgrée" />
        </div>
      </section>

      <section className="level">
        <div className="level-item has-text-centered">
          <div>
            <img src={ItemGreen} alt="" />
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img src={ItemSage} alt="" />
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img src={ItemMustard} alt="" />
            <p className="heading">Tweets</p>
            <p className="title">3,456</p>
          </div>
        </div>
      </section>
    </div>
  );
}
