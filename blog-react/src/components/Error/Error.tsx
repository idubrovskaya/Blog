import { useContext } from 'react';
import { Context } from '../../App';
import styles from './Error.module.css';

export const Error = () => {
  const { theme } = useContext(Context);
  return (
    <div className={styles.circles}>
      <p>
        404
        <br />
        <small>PAGE NOT FOUND</small>
      </p>
      <span
        className={styles.circleBig}
        style={{ background: theme.backgroundCircles }}
      ></span>
      <span
        className={styles.circleMed}
        style={{ background: theme.backgroundCircles }}
      ></span>
      <span
        className={styles.circleSmall}
        style={{ background: theme.backgroundCircles }}
      ></span>
    </div>
  );
};
