import React from 'react';
import LabDetail from './LabDetail';
import LabHead from './LabHead';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom';

import { ReactComponent as IconGrid } from '../assets/icons/icon-grid.svg';
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
      <LabHead
        dataText={props.dataText}
        lang={props.lang}
        handleTrad={props.handleTrad}
        navBack={false}
      />

      <ul className="project-list">{labElements}</ul>

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
