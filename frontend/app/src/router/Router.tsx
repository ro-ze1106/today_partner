import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { About } from '../components/pages/About';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Setting } from '../components/pages/Setting';

export const Router: FC = memo(() => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/setting" element={<Setting />} />    
    <Route path="/*" element={<Page404 />} />    
  </Routes>
));

export default Router;
