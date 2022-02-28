import { useContext } from 'react';
import { Context } from '../../App';
import styles from './Button.module.css';

export interface IButton {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: IButton) => {
  const { theme } = useContext(Context);
  return (
    <button
      className={styles.button}
      onClick={onClick}
      style={{ background: theme.buttonTheme }}
    >
      {text}
    </button>
  );
};
