export const userModel = {
  isAuth: true,
  user: { name: 'Test' },

  login() {
    this.isAuth = true;
    window.location.reload();
  },
  logout() {
    this.isAuth = false;
    window.location.reload();
  },
};
