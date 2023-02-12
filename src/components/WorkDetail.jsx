import React from 'react';
import IconExternalLink from '../assets/icons/icon-external.svg';
import { motion, useAnimation } from 'framer-motion';
import { useParams } from 'react-router-dom';
import WorkHead from './WorkHead';
export default function WorkDetail(props) {
  // get params from Route in App ('/work/:projectName')
  const { projectName } = useParams();

  //const [currentProject, setCurrentProject] = React.useState([]);

  // get corresponding data for this project
  const currentProject = props.dataWorkDetail.find((project) => {
    return project.slug === projectName;
  });

  // get company name
  const currentProjectCompany = props.dataText.companies.find((company) => {
    return company.id === currentProject.companyId || null;
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
  const screensElements = currentProject.images.screens.map((screen, index) => {
    return (
      <div key={index}>
        {screen.title && (
          <h5 className="separator-title has-text-centered">{screen.title}</h5>
        )}

        <img
          src={`${screen.image}`}
          alt={`${currentProject.name} ${currentProject.subtitle}`}
          className="img-responsive"
        />
      </div>
    );
  });
  // custom css for header
  const coverCSS = {
    backgroundImage: `url(${currentProject.images.cover})`,
    backgroundSize: 'cover'
  };
  React.useEffect(() => {
    // scroll to top when rendering (because page might be scroll down at the time of the rendering of this component)
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="section">
      <motion.article animate="visible" initial="hidden" variants={props.anim}>
        <WorkHead
          dataText={props.dataText}
          lang={props.lang}
          handleTrad={props.handleTrad}
          navBack={true}
        />
        {currentProject ? (
          <>
            <div
              className="content hero is-small is-primary head-project"
              style={coverCSS}
            >
              <div className="hero-body">
                <div>
                  <p className="title">{currentProject.name}</p>
                  <p className="subtitle">{currentProject.subtitle}</p>
                </div>
                {currentProject.url && (
                  <a
                    href={currentProject.url}
                    target="_blank"
                    className="button is-info is-small"
                  >
                    <span>Visit</span>
                    <span className="icon is-small">
                      <img src={IconExternalLink} />
                    </span>
                  </a>
                )}
              </div>
            </div>
            <div className="columns">
              <div className="columnsticky column is-4 content">
                <h4 className="title  is-4"></h4>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: currentProject.description[props.lang]
                  }}
                />
              </div>
              <div className="column is-8">{screensElements.slice(0, 1)}</div>
            </div>
            <div className="columns">
              <div className="columnsticky column is-4">
                {currentProject.mywork[props.lang] && (
                  <div className="block">
                    <h4 className="title  is-4">
                      {props.dataText.workMyworkTitle[props.lang]}
                    </h4>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: currentProject.mywork[props.lang]
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

                {currentProject.date && (
                  <div className="block">
                    <div className="tags has-addons">
                      <span className="tag is-dark">
                        Made in {currentProject.date}
                      </span>
                      {currentProjectCompany && (
                        <span className="tag is-light">
                          <a href={currentProjectCompany.url} target="_blank">
                            @{currentProjectCompany.name}
                          </a>
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className=" column is-8">{screensElements.slice(1)}</div>
            </div>
          </>
        ) : (
          'loading...'
        )}
      </motion.article>
    </section>
  );
}
