import styles from './Input.module.css';
import { ChangeEventHandler } from 'react';

export interface IInput {
  value: string;
  type: string;
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ type, label, onChange }: IInput) => {
  return (
    <label className={styles.label}>
      {label}
      <input onChange={onChange} type={type} className={styles.input}></input>
    </label>
  );
};
