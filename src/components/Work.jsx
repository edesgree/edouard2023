import React from 'react';
import WorkDetail from './WorkDetail';
import WorkHead from './WorkHead';
import { NavLink } from 'react-router-dom';

import { motion } from 'framer-motion';

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
    </section>
  );
}
