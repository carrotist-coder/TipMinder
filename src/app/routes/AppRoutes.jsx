import { Routes, Route } from 'react-router-dom';
import { Cards } from '@/pages/Cards';
import { MerchantAgreement } from '@pages/MerchantAgreement';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MerchantAgreement />} />
      {/*not sure for routes naming yet*/}
      <Route path="/agreement" element={<MerchantAgreement />} />
      <Route path="/cards" element={<Cards />} />
    </Routes>
  );
};
