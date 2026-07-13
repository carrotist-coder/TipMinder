import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '@shared/lib/router/PrivateRoute';
import { Loader } from '@shared/ui/Loader';

const Auth = React.lazy(() => import('@pages/Auth'));
const Details = React.lazy(() => import('@pages/Details'));
const MerchantAgreement = React.lazy(() => import('@pages/MerchantAgreement'));
const Cards = React.lazy(() => import('@pages/Cards'));
const Success = React.lazy(() => import('@pages/MerchantAgreement/Success'));
const NotFound404 = React.lazy(() => import('@pages/NotFound404'));

export const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  );
};
