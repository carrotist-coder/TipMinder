import styles from '@shared/ui/styles/input-base.module.css';

export const Input = ({
  name,
  label = null,
  id = name,
  onSubmit,
  error = null,
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
        className={`${styles.input} ${error ? styles.errorInput : ''}`}
        id={id}
        name={name}
        onSubmit={onSubmit}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
