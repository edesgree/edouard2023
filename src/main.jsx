import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './assets/styles.scss';
import TagManager from 'react-gtm-module';

// google analytics
const tagManagerArgs = {
  gtmId: 'G-9RS14XS58K'
};
TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
