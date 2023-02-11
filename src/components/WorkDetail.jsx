import React from 'react';
import IconExternalLink from '../assets/icons/icon-external.svg';
import { motion, useAnimation } from 'framer-motion';
export default function WorkDetail(props) {
  const workElement = props.dataWorkDetail.filter(
    (item) => item.id === props.currentProject
  )[0];
  console.log('workElement', workElement);
  const techElements = workElement.tech.map((item, index) => {
    return (
      <span key={index} className="tag is-info">
        {item}
      </span>
    );
  });
  const screensElements = workElement.images.screens.map((item, index) => {
    return (
      <div key={index}>
        <img
          src={`src/assets/images/work/${workElement.slug}/${item}`}
          alt={`${workElement.name} ${workElement.subtitle}`}
          className="img-responsive"
        />
      </div>
    );
  });
  const coverCSS = {
    backgroundImage: `url(src/assets/images/work/${workElement.slug}/${workElement.images.cover})`,
    backgroundSize: 'cover'
  };
  React.useEffect(() => {
    // scroll to top when rendering (because page might be scroll down at the time of the rendering of this component)
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.article animate="visible" initial="hidden" variants={props.anim}>
      <div
        className="content hero is-small is-primary head-project"
        style={coverCSS}
      >
        <div className="hero-body">
          <div>
            <p className="title">{workElement.name}</p>
            <p className="subtitle">{workElement.subtitle}</p>
          </div>
          {workElement.url && (
            <button className="button is-info is-small">
              <span>Visit</span>
              <span className="icon is-small">
                <img src={IconExternalLink} />
              </span>
            </button>
          )}
        </div>
      </div>
      <div className="columns">
        <div className="columnsticky column is-4 content">
          <h4 className="title  is-4">Resume</h4>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: workElement.description }}
          />
        </div>
        <div className=" column is-8">{screensElements.slice(0, 2)}</div>
      </div>
      <div className="columns">
        <div className="columnsticky column is-4">
          <div className="block">
            <h4 className="title  is-4">
              {props.dataText.workMyworkTitle[props.lang]}
            </h4>
            <p>{workElement.mywork}</p>
          </div>
          {workElement.date && (
            <div className="block">
              <h4 className="title  is-4">
                {props.dataText.workTechUsedTitle[props.lang]}
              </h4>
              <div className="tags">{techElements}</div>
            </div>
          )}

          {workElement.date && (
            <div className="block">
              <div className="tags has-addons">
                <span className="tag is-dark">Date</span>
                <span className="tag is-light">{workElement.date}</span>
              </div>
            </div>
          )}
        </div>
        <div className=" column is-8">{screensElements.slice(2)}</div>
      </div>
    </motion.article>
  );
}
