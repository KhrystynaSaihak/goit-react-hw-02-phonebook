import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from './components/GlobalStyle';
import { App } from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
