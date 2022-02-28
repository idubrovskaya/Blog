import { useContext } from 'react';
import { Context } from '../../App';
import styles from './PostCard.module.css';

export interface IPostCard {
  id: number;
  title: string;
  text: string;
  image: string;
  date: string;
  onClick: () => void;
}

export const PostCard = ({ title, text, image, date, onClick }: IPostCard) => {
  const { theme } = useContext(Context);
  return (
    <div
      className={styles.card}
      onClick={onClick}
      style={{ background: theme.backgroundCard }}
    >
      <div className={styles.image}>
        <img src={image ? image : 'img/default_img.png'} alt='postImage' />
      </div>

      <h2 className={styles.title} style={{ color: theme.title }}>
        {title}
      </h2>
      <p className={styles.text} style={{ color: theme.text }}>
        {text}{' '}
      </p>
      <p className={styles.date} style={{ color: theme.date }}>
        {date.split('-').reverse().join('.')}{' '}
      </p>
    </div>
  );
};
