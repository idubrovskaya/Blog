import styles from './Input.module.css';
import { ChangeEventHandler, KeyboardEventHandler, useContext } from 'react';
import { Context } from '../../App';

export interface IInput {
  value: string;
  type: string;
  label: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
}

export const Input = ({ type, label, error, onChange, onKeyDown }: IInput) => {
  const { theme } = useContext(Context);
  return (
    <label className={styles.label} style={{ color: theme.label }}>
      {label}
      <input
        onChange={onChange}
        type={type}
        className={`${styles.input} ${error ? styles.error : null}`}
        onKeyDown={onKeyDown}
      ></input>
      {error ? <p className={styles.errorAlert}>{error}</p> : null}
    </label>
  );
};
