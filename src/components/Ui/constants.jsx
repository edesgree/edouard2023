// animation parameters to use with Framer Motion module
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
const squareVariants = {
  visible: { opacity: 1, scale: 4, transition: { duration: 1 } },
  hidden: { opacity: 0, scale: 0 }
};
export { animPop, transitionSpring, animShowContentVariant };
