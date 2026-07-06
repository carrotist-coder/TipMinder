import styles from '@shared/ui/styles/input-base.module.css';

export const Dropdown = ({
  name,
  label = null,
  id = name,
  options = [],
  ...props
}) => {
  return (
    <div className={styles.inputGroup}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.wrapper}>
        <select id={id} name={name} className={styles.select} {...props}>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg className={styles.icon}>
          <use href="/assets/icons/arrow-dropdown.svg"></use>
        </svg>
      </div>
    </div>
  );
};
