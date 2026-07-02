import styles from '@shared/ui/styles/input-base.module.css';

export const Input = ({ onSubmit, ...props }) => {
  const style = `${styles.input}`;
  return <input className={style} onSubmit={onSubmit} {...props} />;
};
