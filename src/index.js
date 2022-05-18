import React from 'react';
import ReactDOM from 'react-dom/client';

import HomeContainer from './Containers/Home';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeContainer />
  </React.StrictMode>
);