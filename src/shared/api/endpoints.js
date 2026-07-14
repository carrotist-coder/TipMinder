const isLocalhost =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

export const BASE_URL = isLocalhost ? '/api' : 'https://dummyjson.com';

export const ENDPOINTS = {
  CARDS: '/c/47e8-5750-4d0b-8750',
  TRANSACTIONS: '/c/514e-5366-4f63-a0fa',
  SUMMARY: '/c/ed9c-5084-4734-8d73',
  MERCHANT_OPTIONS: '/c/9183-49d8-4b4e-a632',
};
