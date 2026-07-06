import { Routes, Route } from 'react-router-dom';
import { Cards } from '@/pages/Cards';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/cards" element={<Cards />} />
    </Routes>
  );
};
