import React from 'react';
import PhotoEd from '../assets/images/about-edouard.webp';
import DownloadResume from './Ui/DownloadResume';
import { NavLink } from 'react-router-dom';

export default function About(props) {
  const socialLinkElements = props.dataSocial.map((social) => {
    return (
      <>
        <a
          href={social.url}
          target="_blank"
          className="button is-light is-small"
          data-tooltip={social.name}
        >
          <span className="icon is-small">
            <img src={social.icon} alt={social.name} />
          </span>
        </a>
      </>
    );
  });
  return (
    <section className="section section-about">
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
            <p>
              <NavLink to="/contact">
                {props.dataAbout.contactMe[props.lang]}
              </NavLink>
            </p>
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
    </section>
  );
}
