import React from 'react';
import PhotoEd from '../assets/images/home-edouard.png';
import ItemGreen from '../assets/images/item-green.svg';
import ItemMustard from '../assets/images/item-mustard.svg';
import ItemSage from '../assets/images/item-sage.svg';
import { decode } from 'html-entities';
import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
const IconsServices = [ItemGreen, ItemMustard, ItemSage];
export default function Intro(props) {
  const servicesElements = props.dataIntro.services.map((item, index) => {
    return (
      <React.Fragment key={index}>
        <img src={IconsServices[index]} alt="" />
        <h3 className="title is-5">{item.title[props.lang]}</h3>
        <p>{item.text[props.lang]}</p>
      </React.Fragment>
    );
  });
  return (
    <motion.div animate="visible" initial="hidden" variants={props.anim}>
      <section className="section columns section-presentation">
        <div className="column is-two-thirds">
          <h2 className="subtitle is-5 sup-title is-spaced">
            {props.dataIntro.introSubtitle[props.lang]}
          </h2>

          <h1 className="title is-1 pre-line ">
            {decode(props.dataIntro.introTitle[props.lang])}
          </h1>
          <p>{props.dataIntro.introTxt[props.lang]}</p>
        </div>
        <div className="column is-one-thirds col-photo">
          <img className="mb-4" src={PhotoEd} alt={props.dataCommon.myName} />
          <div className="block has-text-centered">
            <NavLink exact="true" to="/work" className="button is-primary">
              {props.dataCommon.labelSeeWork[props.lang]}
            </NavLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="services-list">{servicesElements}</div>
      </section>
    </motion.div>
  );
}
