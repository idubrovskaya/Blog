import { ReactNode, useContext } from 'react';
import { Context } from '../../App';
import styles from './WaveTemplate.module.css';

export interface ITemplate {
  children: ReactNode;
}

export const WaveTemplate = ({ children }: ITemplate) => {
  const { theme } = useContext(Context);
  return (
    <div className={styles.mainBody}>
      <div>{children}</div>
      <img className={styles.backgroundWave} src='img/wave.png' alt='wave' />
    </div>
  );
};
