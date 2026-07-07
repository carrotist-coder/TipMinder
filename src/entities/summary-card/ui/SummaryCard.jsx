import styles from './SummaryCard.module.css';
import { TextCard } from '@shared/ui/TextCard';
import { TextLink } from '@shared/ui/TextLink';

export const SummaryCard = ({ title, value, linkText, linkTo }) => {
  return (
    <TextCard>
      <div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.value}>{value}</p>
      </div>
      <TextLink to={linkTo}>{linkText}</TextLink>
    </TextCard>
  );
};
