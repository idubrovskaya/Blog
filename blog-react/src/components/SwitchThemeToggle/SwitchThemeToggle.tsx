import styles from './SwitchThemeToggle.module.css';

interface ISwitch {
  inputChecked: boolean;
  onChange: () => void;
}

export const SwitchThemeToggle = ({ inputChecked, onChange }: ISwitch) => {
  return (
    <div className={styles.switchCheckbox}>
      <label className={styles.switch}>
        <input type='checkbox' onChange={onChange} checked={inputChecked} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};
