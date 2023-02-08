import React from 'react';
import data from './assets/data';
import Header from './components/Header';
import Intro from './components/Intro';
import Work from './components/Work';
import Skills from './components/Skills';
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
      <Header />
      <Intro />
      <Skills data={data.skills} />
      <Work data={data.work} />
    </main>
  );
}

export default App;
