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
    <section className="section">
      <a id="topWork"></a>
      <WorkHead
        dataText={props.dataText}
        lang={props.lang}
        handleTrad={props.handleTrad}
        navBack={false}
      />

      <>
        <ul className="project-list">{workElements}</ul>
      </>

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
