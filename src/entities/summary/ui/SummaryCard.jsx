import styles from './SummaryCard.module.css';
import { TextCard } from '@shared/ui/TextCard';
import { TextLink } from '@shared/ui/TextLink';
import { ICONS } from '@shared/config/assets';

export const SummaryCard = ({ title, value, linkText, linkTo }) => {
  return (
    <TextCard>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.value}>{value}</p>
      </div>
      <TextLink iconHref={ICONS.ARROW_LINK} to={linkTo}>
        {linkText}
      </TextLink>
    </TextCard>
  );
};
