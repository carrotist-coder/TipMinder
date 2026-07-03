import { Cell, Row } from '@/shared/ui/Table';
import { StatusBadge } from '@/shared/ui/StatusBadge';

export const CardRow = ({ card, actions }) => {
  return (
    <Row>
      <Cell>{card.number}</Cell>
      <Cell>{card.cardNumber}</Cell>
      <Cell>
        <StatusBadge status={card.status} />
      </Cell>
      <Cell>{card.validTill}</Cell>
      <Cell>
        {actions}
        {/*<Button iconHref={'/assets/icons/logout-circle.svg'}></Button>*/}
        {/*<Button iconHref={'/assets/icons/lock-fill.svg'}></Button>*/}
      </Cell>
    </Row>
  );
};
