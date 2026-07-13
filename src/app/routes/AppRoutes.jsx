import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { PrivateRoute } from '@shared/lib/router/PrivateRoute';
import { Loader } from '@shared/ui/Loader';
import { ROUTES } from '@shared/config/routes';

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
        <Route path={ROUTES.AUTH} element={<Auth />} />

        <Route element={<PrivateRoute />}>
          <Route path={ROUTES.MAIN} element={<Details />} />
          <Route
            path={ROUTES.MERCHANT_AGREEMENT}
            element={<MerchantAgreement />}
          />
          <Route path={ROUTES.DETAILS} element={<Details />} />
          <Route path={ROUTES.CARDS} element={<Cards />} />
          <Route
            path={ROUTES.SUCCESS_MERCHANT_AGREEMENT}
            element={<Success />}
          />
          <Route path="*" element={<NotFound404 />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
