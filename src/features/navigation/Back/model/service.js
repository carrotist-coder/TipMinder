import { useNavigate } from 'react-router-dom';

export const useBack = () => {
  const navigate = useNavigate();
  return (e) => {
    e.preventDefault();
    navigate(-1);
  };
};
