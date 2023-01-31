import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="App columns">
      <aside className="column">
        <header>
          <h1>Firstname Lastname</h1>
          <div className="buttons">
            <button className="button is-primary">Primary</button>
            <button className="button is-link">Link</button>
          </div>

          <div className="buttons">
            <button className="button is-info">Info</button>
            <button className="button is-success">Success</button>
            <button className="button is-warning">Warning</button>
            <button className="button is-danger">Danger</button>
          </div>
        </header>
      </aside>
      <div className="column experiences">
        <h2>Work Experiences</h2>
        blabla
        <h2>Education</h2>
        blabla
      </div>
    </main>
  );
}

export default App;
