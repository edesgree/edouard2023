import React from 'react';
import { Route, Routes, useLocation, useRoutes } from 'react-router-dom';
import data from './assets/data';
import Header from './components/Header';
import Intro from './components/Intro';
import Work from './components/Work';
import WorkDetail from './components/WorkDetail';
import Lab from './components/Lab';
import LabDetail from './components/LabDetail';
import Test from './components/Test';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import NotFound from './components/NotFound';
import InfiniteLooper from './components/InfiniteLooper';
import ScrollUpButton from './components/Ui/ScrollUpButton';
import { animShowContentVariant } from './components/Ui/constants';
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

  return (
    <main className=" container is-max-desktop">
      <Header dataMenu={data.menu} lang={lang} handleTrad={handleTrad} />
      <AnimatePresence mode="wait" initial={false}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro
                  dataCommon={data.common}
                  dataIntro={data.home}
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
            }
          />

          <Route
            path="/work/*"
            element={
              <Work
                dataWork={data.work}
                dataText={data.common}
                lang={lang}
                handleTrad={handleTrad}
                anim={animShowContentVariant}
              />
            }
          />

          <Route
            path="work/:projectName"
            element={
              <>
                <AnimatePresence mode="wait" initial={false}>
                  <WorkDetail
                    dataWorkDetail={data.work}
                    dataText={data.common}
                    lang={lang}
                    anim={animShowContentVariant}
                  />
                </AnimatePresence>
              </>
            }
          />
          <Route
            path="/lab"
            element={
              <Lab
                dataLab={data.lab}
                dataText={data.common}
                lang={lang}
                handleTrad={handleTrad}
                anim={animShowContentVariant}
              />
            }
          />
          <Route
            path="lab/:projectName"
            element={
              <>
                <AnimatePresence mode="wait" initial={false}>
                  <LabDetail
                    dataLabDetail={data.lab}
                    dataText={data.common}
                    lang={lang}
                    anim={animShowContentVariant}
                  />
                </AnimatePresence>
              </>
            }
          />
          <Route
            path="/about"
            element={
              <About
                lang={lang}
                handleTrad={handleTrad}
                anim={animShowContentVariant}
                dataAbout={data.about}
                dataText={data.common}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                dataText={data.common}
                lang={lang}
                handleTrad={handleTrad}
                anim={animShowContentVariant}
              />
            }
          />
          <Route path="/*" element={<NotFound />} />
        </Routes>
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
