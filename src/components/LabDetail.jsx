import React from 'react';
import IconExternalLink from '../assets/icons/icon-external.svg';
import IconGithub from '../assets/icons/icon-github.svg';
import { motion, useAnimation } from 'framer-motion';
import { useParams } from 'react-router-dom';
import LabHead from './LabHead';
import Layout from './Ui/Layout';
export default function LabDetail(props) {
  // get params from Route in App ('/lab/:projectName')
  const { projectName } = useParams();

  // get corresponding data for this project
  const currentProject = props.dataLabDetail.find((project) => {
    return project.slug === projectName;
  });

  // get tech used for this project
  const techElements = currentProject.tech.map((techItem, index) => {
    return (
      <span key={index} className="tag is-info">
        {techItem}
      </span>
    );
  });

  // get screenshots images
  const screensElements = currentProject.images.screens.map(
    (screenItem, index) => {
      return (
        <div key={index}>
          <img
            src={`${screenItem}`}
            alt={`${currentProject.name} ${currentProject.subtitle}`}
            className="img-responsive"
          />
        </div>
      );
    }
  );
  React.useEffect(() => {
    // scroll to top when rendering (because page might be scroll down at the time of the rendering of this component)
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout key={`lab-${projectName}`}>
      <section className="section">
        <motion.article
          animate="visible"
          initial="hidden"
          variants={props.anim}
        >
          <LabHead
            dataText={props.dataText}
            lang={props.lang}
            handleTrad={props.handleTrad}
            navBack={true}
          />
          {currentProject ? (
            <>
              <div className="content hero is-small is-primary head-project">
                <div className="hero-body">
                  <div>
                    <p className="title">{currentProject.name}</p>
                    <p className="subtitle">{currentProject.subtitle}</p>
                  </div>
                  {currentProject.preview && (
                    <div className="buttons has-addons project-buttons-links">
                      <a
                        href={currentProject.github}
                        target="_blank"
                        className="button is-light is-small"
                      >
                        <span>Github</span>
                        <span className="icon is-small">
                          <img src={IconGithub} alt="github" />
                        </span>
                      </a>
                      <a
                        href={currentProject.preview}
                        target="_blank"
                        className="button is-info is-small"
                      >
                        <span>Preview</span>
                        <span className="icon is-small">
                          <img src={IconExternalLink} alt="link" />
                        </span>
                      </a>
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
                        __html: currentProject.description[props.lang]
                      }}
                    />
                    {currentProject.mywork && (
                      <div className="block">
                        <h4 className="title  is-4">
                          {props.dataText.workMyworkTitle[props.lang]}
                        </h4>
                        <p>{currentProject.mywork}</p>
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
            </>
          ) : (
            'loading...'
          )}
        </motion.article>
      </section>
    </Layout>
  );
}
