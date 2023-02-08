import React from 'react';
import PhotoEd from '../assets/images/home-edouard.png';
import ItemGreen from '../assets/images/item-green.svg';
import ItemMustard from '../assets/images/item-mustard.svg';
import ItemSage from '../assets/images/item-sage.svg';
import { decode } from 'html-entities';
export default function Intro(props) {
  return (
    <div>
      <section className="columns">
        <div className="column is-two-thirds">
          <h5 className="subtitle is-5 sup-title">
            {props.data.introSubtitle[props.lang]}
          </h5>

          <h1 className="title is-1 pre-line ">
            {decode(props.data.introTitle[props.lang])}
          </h1>
          <p>{props.data.introTxt[props.lang]}</p>
        </div>
        <div className="column is-one-thirds">
          <img src={PhotoEd} width="205" alt="Edouard Desgrée" />
        </div>
      </section>

      <section className="level">
        <div className="level-item has-text-centered">
          <div>
            <img src={ItemGreen} alt="" />
            <h3 className="heading  is-3">Frontend development</h3>
            <p className="">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img src={ItemSage} alt="" />
            <h3 className="heading  is-3">UI/UX design</h3>
            <p className="">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
          </div>
        </div>
        <div className="level-item has-text-centered">
          <div>
            <img src={ItemMustard} alt="" />
            <h3 className="heading  is-3">Team player</h3>
            <p className="">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
