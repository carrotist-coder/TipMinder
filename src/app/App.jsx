import '@shared/ui/styles';
import { BrowserRouter } from 'react-router-dom';
import { CardsTable } from '@widgets/CardsTable/CardsTable';
import { Heading } from '@shared/ui/Heading';
import { Footer } from '@widgets/Footer/Footer';
import { Header } from '@widgets/Header/Header';

export const App = () => {
  // Test
  return (
    <BrowserRouter>
      <Header />
      <Heading>Cards</Heading>
      <CardsTable />
      <Footer />
    </BrowserRouter>
  );
};
