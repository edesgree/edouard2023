import React from 'react';
import IconExternalLink from '../assets/icons/icon-external.svg';
import { motion, useAnimation } from 'framer-motion';
export default function WorkDetail(props) {
  // get corresponding data for this project
  const workElement = props.dataWorkDetail.find(
    (project) => project.id === props.currentProject
  );

  // get company name
  const workElementCompany = props.dataText.companies.find((company) => {
    return company.id === workElement.companyId;
  });

  // get tech used for this project
  const techElements = workElement.tech.map((techItem, index) => {
    return (
      <span key={index} className="tag is-info">
        {techItem}
      </span>
    );
  });
  // get screenshots images
  const screensElements = workElement.images.screens.map((screen, index) => {
    return (
      <div key={index}>
        <img
          src={`src/assets/images/work/${workElement.slug}/${screen}`}
          alt={`${workElement.name} ${workElement.subtitle}`}
          className="img-responsive"
        />
      </div>
    );
  });
  // custom css for header
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
            dangerouslySetInnerHTML={{
              __html: workElement.description[props.lang]
            }}
          />
        </div>
        <div className=" column is-8">{screensElements.slice(0, 2)}</div>
      </div>
      <div className="columns">
        <div className="columnsticky column is-4">
          {workElement.mywork[props.lang] && (
            <div className="block">
              <h4 className="title  is-4">
                {props.dataText.workMyworkTitle[props.lang]}
              </h4>
              <p
                dangerouslySetInnerHTML={{
                  __html: workElement.mywork[props.lang]
                }}
              />
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

          {workElement.date && (
            <div className="block">
              <div className="tags has-addons">
                <span className="tag is-dark">Made in {workElement.date}</span>
                {workElementCompany && (
                  <span className="tag is-light">
                    <a href={workElementCompany.url} target="_blank">
                      @{workElementCompany.name}
                    </a>
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className=" column is-8">{screensElements.slice(2)}</div>
      </div>
    </motion.article>
  );
}
