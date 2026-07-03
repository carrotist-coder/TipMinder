import { Cell, Row } from '@/shared/ui/Table';
import { StatusBadge } from '@/shared/ui/StatusBadge';
import { Button } from '@shared/ui/Button';

export const CardRow = ({ card }) => {
  return (
    <Row>
      <Cell>{card.number}</Cell>
      <Cell>{card.cardNumber}</Cell>
      <Cell>
        <StatusBadge status={card.status} />
      </Cell>
      <Cell>{card.validTill}</Cell>
      <Cell>
        <Button iconHref={'/assets/icons/logout-circle.svg'}></Button>
        <Button iconHref={'/assets/icons/lock-fill.svg'}></Button>
      </Cell>
    </Row>
  );
};
