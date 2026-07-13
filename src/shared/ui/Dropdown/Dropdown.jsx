import styles from '@shared/ui/styles/input-base.module.css';
import { ICONS } from '@shared/config/assets';

export const Dropdown = ({
  name,
  label = null,
  id = name,
  options = [],
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
      <div className={styles.wrapper}>
        <select
          id={id}
          name={name}
          className={`${styles.select} ${error ? styles.errorInput : ''}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <svg className={styles.icon}>
          <use href={ICONS.ARROW_DROPDOWN}></use>
        </svg>
      </div>
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  );
};
