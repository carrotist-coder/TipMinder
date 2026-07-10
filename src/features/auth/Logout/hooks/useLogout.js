import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutService } from '@features/auth/Logout/model/service';

export const useLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return () => logoutService(dispatch, navigate);
};
