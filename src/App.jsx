import React from 'react';
import data from './assets/data';
import Header from './components/Header';
import Intro from './components/Intro';
import Work from './components/Work';
import Skills from './components/Skills';
import WorkDetail from './components/WorkDetail';
import InfiniteLooper from './components/InfiniteLooper';
import ScrollUpButton from './components/ScrollUpButton';
function App() {
  const [count, setCount] = React.useState(0);
  const [lang, setLang] = React.useState('fr');
  const handleTrad = () => {
    lang === 'fr' ? setLang('en') : setLang('fr');
  };

  return (
    <main className=" container is-max-desktop">
      <Header dataMenu={data.menu} lang={lang} handleTrad={handleTrad} />
      <Intro dataIntro={data.common} lang={lang} handleTrad={handleTrad} />
      <Skills
        dataSkills={data.skills}
        dataText={data.common}
        lang={lang}
        handleTrad={handleTrad}
      />
      <Work
        dataWork={data.work}
        dataText={data.common}
        lang={lang}
        handleTrad={handleTrad}
      />
      <ScrollUpButton
        lang={lang}
        dataText={data.common}
        handleTrad={handleTrad}
      />
    </main>
  );
}

export default App;
