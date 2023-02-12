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
export { transitionSpring, animShowContentVariant };
