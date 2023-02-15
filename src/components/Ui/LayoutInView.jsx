import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { animShowContentVariant, animPop } from './constants';

const Layout = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);
  return (
    <>
      wesh
      <motion.div
        ref={ref}
        animate="visible"
        initial="hidden"
        variants={animPop}
      >
        :)
        {children}
      </motion.div>
    </>
  );
};
export default Layout;
