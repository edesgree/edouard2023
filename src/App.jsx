import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import data from './assets/data';
import Loading from './components/Ui/Loading';
import Header from './components/Header';

import NotFound from './components/NotFound';
import Layout from './components/Ui/Layout';
import ScrollUpButton from './components/Ui/ScrollUpButton';
import { animShowContentVariant } from './components/Ui/constants';
import { AnimatePresence } from 'framer-motion';
//PAGES
const Intro = lazy(() => import('./components/Intro'));
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Contact = lazy(() => import('./components/Contact'));
const Work = lazy(() => import('./components/Work'));
const WorkDetail = lazy(() => import('./components/WorkDetail'));
const Lab = lazy(() => import('./components/Lab'));
const LabDetail = lazy(() => import('./components/LabDetail'));

function App() {
  const [lang, setLang] = React.useState('fr');

  const handleTrad = () => {
    lang === 'fr' ? setLang('en') : setLang('fr');
  };

  return (
    <main className=" container is-max-desktop">
      <Header dataMenu={data.menu} lang={lang} handleTrad={handleTrad} />

      <Suspense fallback={<Loading />}>
        <AnimatePresence mode="wait">
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
            <Route path="/*" element={<NotFound />} key="404" />
          </Routes>
        </AnimatePresence>
      </Suspense>

      <ScrollUpButton
        lang={lang}
        dataText={data.common}
        handleTrad={handleTrad}
      />
    </main>
  );
}

export default App;
