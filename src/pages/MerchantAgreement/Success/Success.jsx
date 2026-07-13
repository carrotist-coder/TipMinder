import { SuccessCard } from '@entities/merchant-agreement/ui/SuccessCard/SuccessCard';
import { Navigate, useLocation } from 'react-router-dom';

export const Success = () => {
  const location = useLocation();
  if (!location.state?.fromAgreement) {
    return <Navigate to="/" replace />;
  }
  return <SuccessCard />;
};
