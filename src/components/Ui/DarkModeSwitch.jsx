import { motion } from 'framer-motion';
import React, { useState } from 'react';
//import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import IconDark from '../../assets/icons/moon.svg';
import IconLight from '../../assets/icons/sun.svg';
export default function DarkModeSwitch() {
  const [isOn, setIsOn] = useState(() => {
    if (localStorage.getItem('theme') === 'light') {
      return true;
    } else {
      return false;
    }
  });
  console.log('dark mode:', isOn);
  console.log('IconDark:', IconDark);
  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  };

  if (isOn) {
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
  let result = isOn ? IconLight : IconDark;

  return (
    <div
      onClick={toggleSwitch}
      className={`flex-start flex h-[50px] w-[100px] rounded-[50px] bg-zinc-100 p-[5px] shadow-inner hover:cursor-pointer dark:bg-zinc-700 ${
        isOn && 'place-content-end'
      }`}
    >
      <motion.div
        className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-black/90"
        layout
        transition={spring}
      >
        <motion.div whileTap={{ rotate: 360 }}>
          <img src={result} />
        </motion.div>
      </motion.div>
    </div>
  );
}
