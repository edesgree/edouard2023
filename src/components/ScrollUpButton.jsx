import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
const scrollVariants = {
  initial: { y: '.5rem', opacity: 0 },
  animate: {
    y: '0rem',
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};
export default function ScrollButton(props) {
  const [visible, setVisible] = React.useState(false);
  // Show button when page is scrolled upto given distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 800) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  // Set the top coordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
             in place of 'smooth' */
    });
  };

  // the scroll event fires when the document view has been scrolled
  React.useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          className="scrollup is-small button is-info"
          onClick={scrollToTop}
          variants={scrollVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          {props.dataText.labelUp[props.lang]}
        </motion.button>
      )}
    </AnimatePresence>
  );
}
