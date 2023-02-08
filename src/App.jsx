import React from 'react';
import data from './assets/data';
import Header from './components/Header';
import Intro from './components/Intro';
import Work from './components/Work';
import Skills from './components/Skills';
import InfiniteLooper from './components/InfiniteLooper';
function App() {
  const [count, setCount] = React.useState(0);
  const [lang, setLang] = React.useState('fr');
  const handleTrad = () => {
    lang === 'fr' ? setLang('en') : setLang('fr');
  };
  const data2 = { txt: { fr: 'bonjour', en: 'hello' } };
  console.log(data2);
  return (
    <main className=" container is-max-desktop">
      <a onClick={handleTrad}>lang {lang}</a>
      ::test trad{data2.txt[lang]}
      <Header menu={data.menu} lang={lang} handleTrad={handleTrad} />
      <Intro data={data.common} lang={lang} handleTrad={handleTrad} />
      <Skills data={data.skills} lang={lang} />
      <Work data={data.work} lang={lang} handleTrad={handleTrad} />
    </main>
  );
}

export default App;
