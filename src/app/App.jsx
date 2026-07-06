import '@shared/ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { Cards } from '@pages/Cards';
import { Layout } from '@app/layouts/Layout';
import { Provider } from 'react-redux';
import { store } from '@app/store/store';

export const App = () => {
  // Test
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Cards />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
