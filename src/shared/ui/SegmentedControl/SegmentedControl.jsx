import styles from './SegmentedControl.module.css';

export const SegmentedControl = ({
  options = [],
  activeIndex = 0,
  onChange,
}) => {
  return (
    <div>
      {options.map((option, index) => (
        <button
          key={option}
          className={`${styles.segment} ${activeIndex === index ? styles.active : ''}`}
          onClick={() => onChange(index)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};
