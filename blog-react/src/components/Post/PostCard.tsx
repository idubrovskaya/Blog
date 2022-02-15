import { useContext } from 'react';
import { Context } from '../../App';
import { darkTheme, lightTheme } from '../ThemeStyle/ThemeStyle';
import styles from './PostCard.module.css';

export interface IProps {
  id: number;
  title: string;
  text: string;
  image: string;
  date: number;
  onClick: () => void;
}

export const PostCard = ({ id, title, text, image, date, onClick }: IProps) => {
  const { isDark } = useContext(Context);
  return (
    <div
      className={styles.card}
      onClick={onClick}
      style={{
        background: isDark
          ? darkTheme.backgroundCard
          : lightTheme.backgroundCard,
      }}
    >
      <img src={image} alt=' ' />
      <h2
        className={styles.title}
        style={{
          color: isDark ? darkTheme.title : lightTheme.title,
        }}
      >
        {title}
      </h2>
      <p
        className={styles.text}
        style={{
          color: isDark ? darkTheme.text : lightTheme.text,
        }}
      >
        {text}{' '}
      </p>
      <p
        className={styles.date}
        style={{
          color: isDark ? darkTheme.date : lightTheme.title,
        }}
      >
        {date}{' '}
      </p>
    </div>
  );
};
