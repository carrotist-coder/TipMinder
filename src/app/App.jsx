import '@shared/ui/styles';
import { Button } from '@shared/ui/Button';
import { Input } from '@shared/ui/Input';
import { Dropdown } from '@shared/ui/Dropdown';

export const App = () => {
  return (
    <>
      <Button>Sign contract</Button>
      <Button type="secondary">Back</Button>
      <Input />
      <Dropdown options={['Test1', 'Test2', 'Test3']} />
    </>
  );
};
