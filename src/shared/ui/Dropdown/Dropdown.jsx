import styles from '@shared/ui/styles/input-base.module.css';

export const Dropdown = ({ name, options = [], ...props }) => {
  const style = `${styles.select}`;
  return (
    <div className={styles.wrapper}>
      <select name={name} className={style} {...props}>
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
  );
};
