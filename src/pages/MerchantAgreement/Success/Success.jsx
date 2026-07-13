import { SuccessCard } from '@widgets/SuccessCard/SuccessCard';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from '@shared/config/routes';

export const Success = () => {
  const location = useLocation();
  if (!location.state?.fromAgreement) {
    return <Navigate to={ROUTES.MAIN} replace />;
  }
  return <SuccessCard />;
};
