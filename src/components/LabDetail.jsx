import React from 'react';
import IconExternalLink from '../assets/icons/icon-external.svg';
import IconGithub from '../assets/icons/icon-github.svg';
import { motion, useAnimation } from 'framer-motion';
export default function LabDetail(props) {
  // get corresponding data for this project
  const labElement = props.dataLabDetail.find(
    (item) => item.id === props.currentProject
  );

  // get tech used for this project
  const techElements = labElement.tech.map((techItem, index) => {
    return (
      <span key={index} className="tag is-info">
        {techItem}
      </span>
    );
  });

  // get screenshots images
  const screensElements = labElement.images.screens.map((screenItem, index) => {
    return (
      <div key={index}>
        <img
          src={`src/assets/images/lab/${labElement.slug}/${screenItem}`}
          alt={`${labElement.name} ${labElement.subtitle}`}
          className="img-responsive"
        />
      </div>
    );
  });
  React.useEffect(() => {
    // scroll to top when rendering (because page might be scroll down at the time of the rendering of this component)
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.article animate="visible" initial="hidden" variants={props.anim}>
      <div className="content hero is-small is-primary head-project">
        <div className="hero-body">
          <div>
            <p className="title">{labElement.name}</p>
            <p className="subtitle">{labElement.subtitle}</p>
          </div>
          {labElement.preview && (
            <div className="buttons has-addons project-buttons-links">
              <button className="button is-info is-small">
                <span className="icon is-small">
                  <a href={labElement.github} target="_blank">
                    <img src={IconGithub} alt="github" />
                  </a>
                </span>
              </button>
              <button className="button is-info is-small">
                <span className="icon is-small">
                  <a href={labElement.preview} target="_blank">
                    <img src={IconExternalLink} alt="link" />
                  </a>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="columns">
        <div className="columnsticky column is-4 ">
          <div className="content">
            <div
              className="content"
              dangerouslySetInnerHTML={{
                __html: labElement.description[props.lang]
              }}
            />
            {labElement.mywork && (
              <div className="block">
                <h4 className="title  is-4">
                  {props.dataText.workMyworkTitle[props.lang]}
                </h4>
                <p>{labElement.mywork}</p>
              </div>
            )}

            {techElements.length > 0 && (
              <div className="block">
                <h4 className="title  is-4">
                  {props.dataText.workTechUsedTitle[props.lang]}
                </h4>
                <div className="tags">{techElements}</div>
              </div>
            )}
          </div>
        </div>
        <div className=" column is-8">{screensElements}</div>
      </div>
    </motion.article>
  );
}
