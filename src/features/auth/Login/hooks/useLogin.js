import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginService } from '@features/auth/Login/model/service';

export const useLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return () => loginService(dispatch, navigate);
};
