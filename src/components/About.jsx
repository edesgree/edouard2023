import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import PhotoEd from '../assets/images/about-edouard.webp';
import DownloadResume from './Ui/DownloadResume';

export default function About(props) {
  const socialLinkElements = props.dataSocial.map((social) => {
    return (
      <>
        <a
          href={social.url}
          target="_blank"
          className="button is-light is-small"
        >
          <span className="icon is-small">
            <img src={social.icon} alt={social.name} />
          </span>
          <span>{social.name}</span>
        </a>
      </>
    );
  });
  return (
    <motion.section
      className="section section-about"
      animate="visible"
      initial="hidden"
      variants={props.anim}
    >
      <div className="columns">
        <div className="column is-8">
          <h2 className="is-2 title">
            {props.dataText.aboutTitle[props.lang]}
          </h2>
          <div className="content">
            <div
              className="block"
              dangerouslySetInnerHTML={{
                __html: props.dataAbout.text[props.lang]
              }}
            />
          </div>
        </div>
        <div className="column is-4 col-photo">
          <img className="mb-4" src={PhotoEd} alt={props.dataText.myName} />

          <div className="buttons has-addons project-buttons-links">
            {socialLinkElements}
            <DownloadResume lang={props.lang} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
