import React from 'react';
import { motion, useAnimation } from 'framer-motion';
export default function About(props) {
  return (
    <motion.section animate="visible" initial="hidden" variants={props.anim}>
      <h2 className="is-2 title">About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iusto
        dignissimos ea sequi ut, eum sunt quas doloremque quisquam quos
        voluptate, fugiat molestias necessitatibus, reiciendis animi quibusdam
        temporibus voluptatum hic!
      </p>
    </motion.section>
  );
}
