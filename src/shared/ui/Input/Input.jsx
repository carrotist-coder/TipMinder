import styles from '@shared/ui/styles/input-base.module.css';

export const Input = ({
  name,
  label = null,
  id = name,
  onSubmit,
  ...props
}) => {
  return (
    <>
      {label && <label htmlFor={id}>{label}</label>}
      <input
        className={styles.input}
        id={id}
        name={name}
        onSubmit={onSubmit}
        {...props}
      />
    </>
  );
};
