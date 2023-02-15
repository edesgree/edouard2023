// constants.jsx
const transitionSpring = {
  type: 'spring',
  stiffness: 700,
  damping: 30
};
const animShowContentVariant = {
  visible: { opacity: 1, transition: { duration: 0.8 } },
  hidden: { opacity: 0 }
};
const animPop = {
  visible: { opacity: 1, scale: 4, transitionSpring },
  hidden: { opacity: 0, scale: 0 }
};
const animDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};
export { animPop, transitionSpring, animShowContentVariant, animDraw };
