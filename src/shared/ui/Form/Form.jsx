import styles from './Form.module.css';

export const Form = ({ children, actions = null, onSubmit, ...props }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit} {...props}>
      <div className={styles.formData}>{children}</div>
      {actions && <div className={styles.actions}>{actions}</div>}
    </form>
  );
};
