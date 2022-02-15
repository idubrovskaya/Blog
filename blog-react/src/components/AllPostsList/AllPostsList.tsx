import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PostCard, IProps } from '../Post/PostCard';
import { Button } from '../Button/Button';
import styles from './AllPostsList.module.css';

const POST_PER_PAGE = 5;

export const AllPostsList = () => {
  const [posts, setPosts] = useState<IProps[]>([]);
  const [offset, setOffset] = useState(0);
  const history = useHistory();

  useEffect(() => {
    fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${POST_PER_PAGE}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((result) => setPosts([...posts, ...result.results]));
  }, [offset]);

  const showMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

  return (
    <div className={styles.wrapper}>
      {posts.map((post: IProps) => {
        return (
          <PostCard
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
            text={post.text}
            date={post.date}
            onClick={() => {
              history.push('/post/' + post.id);
            }}
          />
        );
      })}
      <Button text='Show more' onClick={showMore} />
    </div>
  );
};
