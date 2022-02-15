import { useContext } from 'react';
import { Context } from '../../App';
import styles from './Button.module.css';

export interface IButton {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IButton) => {
  const contextValue = useContext(Context);
  return (
    <button className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
