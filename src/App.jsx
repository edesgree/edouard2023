import React, { Fragment } from 'react';
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
import Layout from './components/Ui/Layout';
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
              <Layout key="home">
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

                <About
                  lang={lang}
                  handleTrad={handleTrad}
                  anim={animShowContentVariant}
                  dataAbout={data.about}
                  dataSocial={data.socials}
                  dataText={data.common}
                />
              </Layout>
            }
          />

          <Route
            path="/work/*"
            element={
              <Layout key="work">
                <Work
                  dataWork={data.work}
                  dataText={data.common}
                  lang={lang}
                  handleTrad={handleTrad}
                  anim={animShowContentVariant}
                />
              </Layout>
            }
          />

          <Route
            path="work/:projectName"
            element={
              <>
                <AnimatePresence mode="wait" initial={false}>
                  <Layout key=":projectName">
                    <WorkDetail
                      dataWorkDetail={data.work}
                      dataText={data.common}
                      lang={lang}
                      anim={animShowContentVariant}
                    />
                  </Layout>
                </AnimatePresence>
              </>
            }
          />
          <Route
            path="/lab"
            element={
              <Layout key="lab">
                <Lab
                  dataLab={data.lab}
                  dataText={data.common}
                  lang={lang}
                  handleTrad={handleTrad}
                  anim={animShowContentVariant}
                />
              </Layout>
            }
          />
          <Route
            path="lab/:projectName"
            element={
              <>
                <AnimatePresence mode="wait" initial={false}>
                  <Layout key=":projectName">
                    <LabDetail
                      dataLabDetail={data.lab}
                      dataText={data.common}
                      lang={lang}
                      anim={animShowContentVariant}
                    />
                  </Layout>
                </AnimatePresence>
              </>
            }
          />

          <Route
            path="/contact"
            element={
              <Layout key="contact">
                <Contact
                  dataText={data.common}
                  lang={lang}
                  handleTrad={handleTrad}
                  anim={animShowContentVariant}
                />
              </Layout>
            }
          />
          <Route path="/*" element={<NotFound />} key="404" />
        </Routes>
      </AnimatePresence>
      <ScrollUpButton
        lang={lang}
        dataText={data.common}
        handleTrad={handleTrad}
      />
    </main>
  );
}

export default App;
