import '@shared/ui/styles';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Dropdown } from '@shared/ui/Dropdown';
import { SegmentedControl } from '@shared/ui/SegmentedControl';
import { useState } from 'react';
import { StatusBadge } from '@shared/ui/StatusBadge';
import { TextLink } from '@shared/ui/TextLink';
import { BrowserRouter } from 'react-router-dom';
import { CardsTable } from '@widgets/CardsTable/CardsTable';
import { Heading } from '@shared/ui/Heading';
import { Footer } from '@widgets/Footer/Footer';
import { Logo } from '@shared/ui/Logo';

export const App = () => {
  // Test
  const [option, setOption] = useState(0);
  return (
    <BrowserRouter>
      <Logo />

      <Button>Sign contract</Button>
      <Button type="secondary">Back</Button>
      <Input />
      <Dropdown options={['Test1', 'Test2', 'Test3']} />
      <SegmentedControl
        options={['Test1', 'Test2', 'Test3', 'Test4']}
        activeIndex={option}
        onChange={(index) => setOption(index)}
      />
      <StatusBadge />
      <Button iconHref={'/assets/icons/user-icon.svg'}>Log out</Button>
      <TextLink>Edit Profile</TextLink>

      <Heading>Cards</Heading>
      <CardsTable />
      <Footer />
    </BrowserRouter>
  );
};
