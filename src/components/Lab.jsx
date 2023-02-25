import React from 'react';
import LabHead from './LabHead';
import { NavLink } from 'react-router-dom';
import Layout from './Ui/Layout';
import { motion } from 'framer-motion';
import PlaceholderListImage from '../assets/images/placeholder-project-list.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Lab(props) {
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
            <LazyLoadImage
              src={`${item.images.cover}`}
              placeholderSrc={PlaceholderListImage}
              alt={item.name}
            />
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
    <Layout key="lab">
      <section className="section">
        <a id="topLab"></a>
        <LabHead
          dataText={props.dataText}
          lang={props.lang}
          handleTrad={props.handleTrad}
          navBack={false}
        />

        <ul className="project-list">{labElements}</ul>
      </section>
    </Layout>
  );
}
