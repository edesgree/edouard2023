import { motion } from 'framer-motion';
import React, { useState } from 'react';
import IconSun from './IconSun';
import IconMoon from './IconMoon';

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

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

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
        <motion.div transition={spring}>
          {darkMode ? <IconSun /> : <IconMoon />}
        </motion.div>
      </span>
    </button>
  );
}
