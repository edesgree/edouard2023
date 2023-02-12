import React from 'react';
import WorkDetail from './WorkDetail';
import WorkHead from './WorkHead';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';

import {
  motion,
  useIsPresent,
  useScroll,
  useSpring,
  AnimatePresence
} from 'framer-motion';

export default function Work(props) {
  {
    /* 
  const [currentProject, setCurrentProject] = React.useState(null);
  const handleChoice = (event) => {
    event.preventDefault();
    setCurrentProject(event.currentTarget.id);
  };
  const handleCloseProject = (event) => {
    event.preventDefault();
    setCurrentProject(null);
  };*/
  }
  const workElements = props.dataWork.map((item) => {
    return (
      <motion.li
        initial={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.5 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        key={item.id}
        id={item.id}
      >
        <NavLink to={item.slug}>
          <div className="media">
            <img src={`${item.images.cover}`} alt={item.name} />
          </div>
          <div className="project-info">
            <h4 className="is-4 title">{item.name}</h4>
            <p className="subtitle is-6">{item.subtitle}</p>
          </div>
        </NavLink>
      </motion.li>
    );
  });
  // use for the transition (big empty colored div#privacy-screen)
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const isPresent = useIsPresent();

  return (
    <motion.section className="section">
      <a id="topWork"></a>
      <WorkHead
        dataText={props.dataText}
        lang={props.lang}
        handleTrad={props.handleTrad}
        navBack={false}
      />

      <>
        <motion.ul
          animate="visible"
          initial="hidden"
          variants={props.anim}
          className="project-list"
        >
          {workElements}
        </motion.ul>
      </>

      {/* 
      <Routes>
        <Route
          path=":workId/*"
          element={
            <>
              <AnimatePresence mode="wait" initial={false}>
                <WorkDetail
                  dataWorkDetail={props.dataWork}
                  dataText={props.dataText}
                  currentProject={currentProject}
                  handleCloseProject={handleCloseProject}
                  lang={props.lang}
                  anim={props.anim}
                />
              </AnimatePresence>
            </>
          }
        />
        </Routes>*/}
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </motion.section>
  );
}
