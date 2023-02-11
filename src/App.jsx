import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import data from './assets/data';
import Header from './components/Header';
import Intro from './components/Intro';
import Work from './components/Work';
import Lab from './components/Lab';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import InfiniteLooper from './components/InfiniteLooper';
import ScrollUpButton from './components/ScrollUpButton';
import {
  motion,
  useAnimation,
  AnimatePresence,
  useIsPresent
} from 'framer-motion';
function App() {
  const [lang, setLang] = React.useState('fr');
  const isPresent = useIsPresent();
  const handleTrad = () => {
    lang === 'fr' ? setLang('en') : setLang('fr');
  };
  const animShowContentVariant = {
    visible: { opacity: 1, transition: { duration: 0.8 } },
    hidden: { opacity: 0 }
  };
  const page = useRoutes([
    {
      path: '/',
      element: (
        <>
          <Intro
            dataIntro={data.common}
            lang={lang}
            handleTrad={handleTrad}
            anim={animShowContentVariant}
          />
          <Skills
            dataSkills={data.skills}
            dataText={data.common}
            lang={lang}
            handleTrad={handleTrad}
          />
        </>
      )
    },
    {
      path: '/work',
      element: (
        <Work
          dataWork={data.work}
          dataText={data.common}
          lang={lang}
          handleTrad={handleTrad}
          anim={animShowContentVariant}
        />
      )
    },
    {
      path: '/lab',
      element: (
        <Lab
          dataLab={data.lab}
          dataText={data.common}
          lang={lang}
          handleTrad={handleTrad}
          anim={animShowContentVariant}
        />
      )
    },
    {
      path: '/about',
      element: (
        <About
          lang={lang}
          handleTrad={handleTrad}
          anim={animShowContentVariant}
        />
      )
    },
    {
      path: '/contact',
      element: (
        <Contact
          dataText={data.common}
          lang={lang}
          handleTrad={handleTrad}
          anim={animShowContentVariant}
        />
      )
    }
  ]);
  const location = useLocation();
  if (!page) return null;
  return (
    <main className=" container is-max-desktop">
      <Header dataMenu={data.menu} lang={lang} handleTrad={handleTrad} />
      <AnimatePresence mode="wait" initial={false}>
        {React.cloneElement(page, { key: location.pathname })}
      </AnimatePresence>
      <ScrollUpButton
        lang={lang}
        dataText={data.common}
        handleTrad={handleTrad}
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: 'circOut' } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: 'circIn' } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="privacy-screen"
      />
    </main>
  );
}

export default App;
