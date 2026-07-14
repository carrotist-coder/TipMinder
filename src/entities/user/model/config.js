// DEFAULT VALUE SHOULD BE FALSE
// TRUE FOR DEVELOPMENT ONLY
export const USER_DEFAULT_IS_AUTH = false;
export const AUTH_STORAGE_KEY = 'is_auth';

export const getInitialAuthState = () => {
  const storedAuth = sessionStorage.getItem(AUTH_STORAGE_KEY);
  if (storedAuth !== null) {
    return storedAuth === 'true';
  }
  return USER_DEFAULT_IS_AUTH;
};
