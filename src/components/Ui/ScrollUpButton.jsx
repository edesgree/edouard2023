import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ReactComponent as IconUp } from '../../assets/icons/icon-arrow-up.svg';

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
    if (window.pageYOffset > 500) {
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
        <motion.span
          className="scrollup "
          onClick={scrollToTop}
          variants={scrollVariants}
          initial="initial"
          animate="animate"
          exit="initial"
        >
          <IconUp
            width="24px"
            height="24px"
            name={props.dataText.labelUp[props.lang]}
          />
        </motion.span>
      )}
    </AnimatePresence>
  );
}
