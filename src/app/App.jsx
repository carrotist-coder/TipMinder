import '@shared/ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { Cards } from '@pages/Cards';
import { Layout } from '@app/layouts/Layout';

export const App = () => {
  // Test
  return (
    <BrowserRouter>
      <Layout>
        <Cards />
      </Layout>
    </BrowserRouter>
  );
};
