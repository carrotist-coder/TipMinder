import styles from '@shared/ui/styles/input-base.module.css';

export const Input = ({ name, onSubmit, ...props }) => {
  return (
    <input
      className={styles.input}
      name={name}
      onSubmit={onSubmit}
      {...props}
    />
  );
};
