import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import data from './assets/data';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import NotFound from './components/NotFound';
import Layout from './components/Ui/Layout';
import ScrollUpButton from './components/Ui/ScrollUpButton';
import { animShowContentVariant } from './components/Ui/constants';
import { AnimatePresence } from 'framer-motion';
const Work = lazy(() => import('./components/Work'));
const WorkDetail = lazy(() => import('./components/WorkDetail'));
const Lab = lazy(() => import('./components/Lab'));
const LabDetail = lazy(() => import('./components/LabDetail'));

function Loading() {
  return <h2>Loading...⌛</h2>;
}
function App() {
  const [lang, setLang] = React.useState('fr');

  const handleTrad = () => {
    lang === 'fr' ? setLang('en') : setLang('fr');
  };

  return (
    <main className=" container is-max-desktop">
      <Header dataMenu={data.menu} lang={lang} handleTrad={handleTrad} />
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
              <Suspense fallback={<Loading />}>
                <Work
                  dataWork={data.work}
                  dataText={data.common}
                  lang={lang}
                  handleTrad={handleTrad}
                  anim={animShowContentVariant}
                />
              </Suspense>
            }
          />

          <Route
            path="work/:projectName"
            element={
              <>
                <Suspense fallback={<Loading />}>
                  <AnimatePresence mode="wait" initial={false}>
                    <WorkDetail
                      dataWorkDetail={data.work}
                      dataText={data.common}
                      lang={lang}
                      anim={animShowContentVariant}
                    />
                  </AnimatePresence>
                </Suspense>
              </>
            }
          />
          <Route
            path="/lab"
            element={
              <Suspense fallback={<Loading />}>
                <Lab
                  dataLab={data.lab}
                  dataText={data.common}
                  lang={lang}
                  handleTrad={handleTrad}
                  anim={animShowContentVariant}
                />
              </Suspense>
            }
          />
          <Route
            path="lab/:projectName"
            element={
              <>
                <Suspense fallback={<Loading />}>
                  <AnimatePresence mode="wait" initial={false}>
                    <LabDetail
                      dataLabDetail={data.lab}
                      dataText={data.common}
                      lang={lang}
                      anim={animShowContentVariant}
                    />
                  </AnimatePresence>
                </Suspense>
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
      <ScrollUpButton
        lang={lang}
        dataText={data.common}
        handleTrad={handleTrad}
      />
    </main>
  );
}

export default App;
