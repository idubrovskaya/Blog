import styles from './Error.module.css';

export const Error = () => {
  return (
    <div className={styles.circles}>
      <p>
        404
        <br />
        <small>PAGE NOT FOUND</small>
      </p>
      <span className={styles.circleBig}></span>
      <span className={styles.circleMed}></span>
      <span className={styles.circleSmall}></span>
    </div>
  );
};
