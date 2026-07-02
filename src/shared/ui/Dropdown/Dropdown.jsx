import styles from '@shared/ui/styles/input-base.module.css';

export const Dropdown = ({ name, options = [], ...props }) => {
  const style = `${styles.select}`;
  return (
    <select name={name} className={style} {...props}>
      {options.map((option, index) => (
        <option key={index} value={option[index]}>
          {option[index]}
        </option>
      ))}
    </select>
  );
};
