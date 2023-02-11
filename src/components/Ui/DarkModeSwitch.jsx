import { motion } from 'framer-motion';
import React, { useState } from 'react';
import IconSun from './IconSun';
import IconMoon from './IconMoon';
import { transitionSpring } from './constants';

export default function DarkModeSwitch2() {
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem('theme') === 'light') {
      return true;
    } else {
      return false;
    }
  });
  console.log('dark mode:', darkMode);
  console.log('iconmoon:', IconMoon);
  const toggleSwitch = () => setDarkMode(!darkMode);

  if (darkMode) {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }

  if (
    localStorage.theme === 'light' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: light)').matches)
  ) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

  return (
    <button
      onClick={toggleSwitch}
      className="button is-primary is-inverted is-small"
    >
      <span className="icon is-small">
        <motion.div className="icon-svg" transition={transitionSpring}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </motion.div>
      </span>
    </button>
  );
}
