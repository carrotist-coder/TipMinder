export const userModel = {
  isAuth: true,
  user: { name: 'Test' },

  login() {
    this.isAuth = true;
  },
  logout() {
    this.isAuth = false;
  },
};
