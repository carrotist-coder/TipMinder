import styles from '@shared/ui/styles/input-base.module.css';

export const Input = ({ name, onSubmit, ...props }) => {
  const style = `${styles.input}`;
  return <input className={style} name={name} onSubmit={onSubmit} {...props} />;
};
