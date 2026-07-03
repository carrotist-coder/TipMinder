import '@shared/ui/styles';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Dropdown } from '@shared/ui/Dropdown';
import { SegmentedControl } from '@shared/ui/SegmentedControl';
import { useState } from 'react';
import { StatusBadge } from '@shared/ui/StatusBadge';

export const App = () => {
  // Test
  const [option, setOption] = useState(0);
  return (
    <>
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
      <Button iconHref={'/assets/icons/logout-circle.svg'}></Button>
      <Button iconHref={'/assets/icons/lock-fill.svg'}></Button>
      <Button iconHref={'/assets/icons/user-icon.svg'}>Log out</Button>
    </>
  );
};
