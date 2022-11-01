import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './index.css'

import { Router } from './router/Router';

const App = () => (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )

export default App;
