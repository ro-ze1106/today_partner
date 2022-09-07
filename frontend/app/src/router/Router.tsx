import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { About } from '../components/pages/About';
import { Home } from '../components/pages/Home';
import { Page404 } from '../components/pages/Page404';
import { Setting } from '../components/pages/Setting';
import { HeaderLayout } from '../components/templates/HerderLayout';

export const Router: FC = memo(() => (
  <HeaderLayout>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/*" element={<Page404 />} />
    </Routes>
  </HeaderLayout>
));

export default Router;
