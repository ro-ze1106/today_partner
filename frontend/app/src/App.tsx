import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

import { Router } from './router/Router';

function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
