import '@shared/ui/styles';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Dropdown } from '@shared/ui/Dropdown';
import { SegmentedControl } from '@shared/ui/SegmentedControl';
import { useState } from 'react';
import { StatusBadge } from '@shared/ui/StatusBadge';
import { TextLink } from '@shared/ui/TextLink';
import { BrowserRouter } from 'react-router-dom';
import { Table } from '@shared/ui/Table/Table';
import { HeaderCell } from '@shared/ui/Table/HeaderCell';
import { Row } from '@shared/ui/Table/Row';
import { CardRow, mockCards } from '@entities/card';

export const App = () => {
  // Test
  const [option, setOption] = useState(0);
  return (
    <BrowserRouter>
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

      <Table columnsCount={5}>
        <thead>
          <Row>
            <HeaderCell>Number</HeaderCell>
            <HeaderCell>Card number</HeaderCell>
            <HeaderCell>Status</HeaderCell>
            <HeaderCell>Valid till</HeaderCell>
            <HeaderCell>Action</HeaderCell>
          </Row>
        </thead>
        <tbody>
          {mockCards.map((card) => (
            <CardRow key={card.id} card={card} />
          ))}
        </tbody>
      </Table>
    </BrowserRouter>
  );
};
