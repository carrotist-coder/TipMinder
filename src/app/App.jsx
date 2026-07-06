import '@shared/ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '@app/layouts/Layout';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';
import { AppRoutes } from '@app/routes/AppRoutes';

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
