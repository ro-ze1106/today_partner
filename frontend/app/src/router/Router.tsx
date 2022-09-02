import { FC, memo } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/pages/Home';

export const Router: FC = memo(() => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
));

export default Router;
