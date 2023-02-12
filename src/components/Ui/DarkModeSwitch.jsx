import { motion } from 'framer-motion';
import React, { useState } from 'react';
import IconSun from './icons/IconSun';
import IconMoon from './icons/IconMoon';
import { transitionSpring } from './constants';

export default function DarkModeSwitch() {
  const [darkMode, setDarkMode] = React.useState(() => {
    if (localStorage.getItem('theme') === 'light') {
      return true;
    } else {
      return false;
    }
  });

  const toggleSwitch = () => setDarkMode(!darkMode);

  if (darkMode) {
    document.body.classList.remove('darkMode');
    document.body.classList.add('lightMode');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('darkMode');
    document.body.classList.remove('lightMode');
    localStorage.setItem('theme', 'dark');
  }

  if (
    localStorage.theme === 'light' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: light)').matches)
  ) {
    document.body.classList.add('darkMode');
    document.body.classList.remove('lightMode');
  } else {
    document.body.classList.add('lightMode');
    document.body.classList.remove('darkMode');
  }

  return (
    <button onClick={toggleSwitch} className="button is-secondary is-small">
      <span className="icon is-small">
        <motion.div className="icon-svg" transition={transitionSpring}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </motion.div>
      </span>
    </button>
  );
}
