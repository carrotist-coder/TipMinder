import { Routes, Route } from 'react-router-dom';
import { Cards } from '@/pages/Cards';
import { MerchantAgreement, Success } from '@pages/MerchantAgreement';
import { Details } from '@pages/Details';
import { NotFound404 } from '@pages/NotFound404';
import { Auth } from '@pages/Auth';
import { PrivateRoute } from '@shared/lib/router/PrivateRoute';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<Details />} />
        {/*not sure for routes naming yet*/}
        <Route path="/agreement" element={<MerchantAgreement />} />
        <Route path="/details" element={<Details />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/success" element={<Success />} />
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
};
