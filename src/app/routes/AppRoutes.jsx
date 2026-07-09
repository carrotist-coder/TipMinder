import { Routes, Route } from 'react-router-dom';
import { Cards } from '@/pages/Cards';
import { MerchantAgreement } from '@pages/MerchantAgreement';
import { Details } from '@pages/Details';
import { NotFound404 } from '@pages/NotFound404';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Details />} />
      {/*not sure for routes naming yet*/}
      <Route path="/agreement" element={<MerchantAgreement />} />
      <Route path="/details" element={<Details />} />
      <Route path="/cards" element={<Cards />} />
      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};
