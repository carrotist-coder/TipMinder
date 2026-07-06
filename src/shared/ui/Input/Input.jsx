import styles from '@shared/ui/styles/input-base.module.css';

export const Input = ({
  name,
  label = null,
  id = name,
  onSubmit,
  ...props
}) => {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={styles.input}
        id={id}
        name={name}
        onSubmit={onSubmit}
        {...props}
      />
    </div>
  );
};
