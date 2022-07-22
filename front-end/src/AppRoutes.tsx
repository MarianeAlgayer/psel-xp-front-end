import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { Shares } from './pages/Shares';
import { ShareNegotiation } from './pages/ShareNegotiation';

import { DefaultLayout } from './layouts/DefaultLayout';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/" element={<DefaultLayout />}>
        <Route path="/acoes" element={<Shares />} />
        <Route path="/acoes/negociar" element={<ShareNegotiation />} />
      </Route>
    </Routes>
  );
}
