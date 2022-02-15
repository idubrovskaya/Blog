import styles from './SwitchThemeToggle.module.css';

interface ISwitch {
  onClick: () => void;
}

export const SwitchThemeToggle = ({ onClick }: ISwitch) => {
  return (
    <div className={styles.switchCheckbox}>
      <label className={styles.switch}>
        <input type='checkbox' onClick={onClick} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
