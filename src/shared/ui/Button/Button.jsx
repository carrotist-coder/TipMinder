import styles from './Button.module.css';

export const Button = ({
  children,
  type = '',
  iconHref = '',
  onClick,
  ...props
}) => {
  const isIcon = !!iconHref;
  const isIconText = isIcon && children;

  const iconClass = isIconText
    ? styles['icon-text-button']
    : isIcon
      ? styles['icon-button']
      : '';
  const style = `${styles.button} ${styles[type] ?? ''} ${iconClass}`.trim();

  const icon = (
    <svg className={styles.icon}>
      <use href={iconHref} />
    </svg>
  );

  return (
    <button className={style} onClick={onClick} {...props}>
      {isIconText ? (
        <div className={styles['icon-wrapper']}>{icon}</div>
      ) : (
        isIcon && icon
      )}
      {children}
    </button>
  );
};
