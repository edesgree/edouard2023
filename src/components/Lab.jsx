import React from 'react';
import LabDetail from './LabDetail';
import IconGrid from '../assets/icons/icon-grid.svg';
import { motion, useIsPresent, useScroll, useSpring } from 'framer-motion';
export default function Lab(props) {
  const [currentProject, setCurrentProject] = React.useState(null);
  const handleChoice = (event) => {
    event.preventDefault();
    setCurrentProject(event.currentTarget.id);
  };
  const handleCloseProject = (event) => {
    event.preventDefault();
    setCurrentProject(null);
  };
  const labElements = props.dataLab.map((item) => {
    return (
      <li key={item.id} id={item.id} onClick={handleChoice} href="#topLab">
        <div className="media">
          <img src={`${item.images.cover}`} alt={item.name} />
        </div>
        <div className="project-info">
          <h4 className="is-4 title">{item.name}</h4>
          <p className="subtitle is-6">{item.subtitle}</p>
        </div>
      </li>
    );
  });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const isPresent = useIsPresent();
  return (
    <section className="section">
      <a id="topLab"></a>
      <header className="header-section">
        <div>
          <h2 className="is-2 title">{props.dataText.labTitle[props.lang]}</h2>
          <p className="block">{props.dataText.labSubTitle[props.lang]}</p>
        </div>

        {currentProject && (
          <>
            <a
              className="button is-light is-info"
              href="#topLab"
              onClick={handleCloseProject}
            >
              <span className="icon-text">
                <span>{props.dataText.labelBack[props.lang]}</span>
                <span className="icon">
                  <img src={IconGrid} />
                </span>
              </span>
            </a>
          </>
        )}
      </header>

      {!currentProject && (
        <motion.ul
          animate="visible"
          initial="hidden"
          variants={props.anim}
          className="project-list"
        >
          {labElements}
        </motion.ul>
      )}
      {currentProject && (
        <LabDetail
          dataLabDetail={props.dataLab}
          dataText={props.dataText}
          currentProject={currentProject}
          handleCloseProject={handleCloseProject}
          lang={props.lang}
          anim={props.anim}
        />
      )}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </section>
  );
}
