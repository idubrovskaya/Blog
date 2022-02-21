import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PostCard } from '../Post/PostCard';
import { Button } from '../Button/Button';
import styles from './AllPostsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { addAllPosts } from '../../redux/actions/allpostsActions';

const POST_PER_PAGE = 5;

export const AllPostsList = () => {
  const [offset, setOffset] = useState(0);
  const history = useHistory();
  const posts = useSelector((state: IState) => state.allpostsReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${POST_PER_PAGE}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch(addAllPosts([...posts, ...result.results]));
      });
  }, [offset]);

  const showMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

  return (
    <div className={styles.wrapper}>
      {posts.map((post) => {
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
