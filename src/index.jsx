import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './global/style.css';
import swConfig from './sw.config';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.register(swConfig);
