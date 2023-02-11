import React from 'react';
import PhotoEd from '../assets/images/home-edouard.png';
import ItemGreen from '../assets/images/item-green.svg';
import ItemMustard from '../assets/images/item-mustard.svg';
import ItemSage from '../assets/images/item-sage.svg';
import { decode } from 'html-entities';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
export default function Intro(props) {
  return (
    <motion.div animate="visible" initial="hidden" variants={props.anim}>
      <section className="section columns">
        <div className="column is-two-thirds">
          <h2 className="subtitle is-5 sup-title is-spaced">
            {props.dataIntro.introSubtitle[props.lang]}
          </h2>

          <h1 className="title is-1 pre-line ">
            {decode(props.dataIntro.introTitle[props.lang])}
          </h1>
          <p>{props.dataIntro.introTxt[props.lang]}</p>
        </div>
        <div className="column is-one-thirds">
          <img className="mb-4" src={PhotoEd} alt={props.dataIntro.myName} />
          <div className="block has-text-centered">
            <NavLink exact="true" to="/work" className="button is-primary">
              {props.dataIntro.labelSeeWork[props.lang]}
            </NavLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="level">
          <div className="level-item has-text-centered">
            <img src={ItemGreen} alt="" />
            <h3 className="title is-5">Frontend development</h3>
            <p className="">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
          </div>

          <div className="level-item has-text-centered">
            <img src={ItemSage} alt="" />
            <h3 className="title is-5">UI/UX design</h3>
            <p className="">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
          </div>
          <div className="level-item has-text-centered">
            <img src={ItemMustard} alt="" />
            <h3 className="title is-5">Team player</h3>
            <p className="">
              This is a template Figma file, turned into code using Anima. Learn
              more at AnimaApp.com
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
