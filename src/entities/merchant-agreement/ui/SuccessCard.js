import styles from './SuccessCard.module.css';
import { Heading } from '@shared/ui/Heading';
import { Button } from '@/shared/ui/Button';
import { useNavigate } from 'react-router-dom';

export const SuccessCard = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <Heading>Contract Signed!</Heading>
        <p className={styles.text}>
          Your contract has been successfully processed.
        </p>
        <Button onClick={() => navigate('/')}>Go to Dashboard</Button>
      </div>
    </div>
  );
};
