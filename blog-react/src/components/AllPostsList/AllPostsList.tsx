import {
  useCallback,
  useContext,
  useEffect,
  useState,
  KeyboardEvent,
} from 'react';
import { useHistory } from 'react-router-dom';
import { PostCard } from '../Post/PostCard';
import { Button } from '../Button/Button';
import styles from './AllPostsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { addAllPosts } from '../../redux/actions/allpostsActions';
import { Input } from '../Input/Input';
import { fetchSearchedPost } from '../../redux/actions/allpostsActions';

import { Context } from '../../App';

const LIMIT = 5;

export const AllPostsList = () => {
  const { theme } = useContext(Context);
  const history = useHistory();
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const handleSearchInputChanges = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    },
    [search]
  );

  const handleEnter = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      dispatch(fetchSearchedPost(search));
    }
  };

  const [offset, setOffset] = useState(0);
  const [count, setCount] = useState(0);
  const posts = useSelector((state: IState) => state.allpostsReducer.posts);

  useEffect(() => {
    fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=${LIMIT}&offset=${offset}`
    )
      .then((response) => response.json())
      .then((result) => {
        dispatch(addAllPosts([...posts, ...result.results]));
        setCount(result.count);
      });
  }, [offset]);

  const showMore = useCallback(() => {
    setOffset(posts.length);
  }, [posts]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.searchWrapper}>
        <div className={styles.postsTitle}>
          <h1 className={styles.title} style={{ color: theme.contentTitle }}>
            All posts
          </h1>
          <Button
            text='+ Add'
            onClick={() => {
              history.push('/add_new_post');
            }}
          />
        </div>
        <div className={styles.inputSearch}>
          <p
            className={styles.inputSearchLabel}
            style={{ color: theme.contentTitle }}
          >
            Search
          </p>
          <Input
            type='text'
            label=''
            value={search}
            onChange={handleSearchInputChanges}
            onKeyDown={handleEnter}
          />
        </div>
      </div>
      {posts ? (
        <>
          <div className={styles.allpostslist}>
            {posts.map((post) => (
              <PostCard
                key={post.id + Math.random()}
                id={post.id}
                title={post.title}
                image={post.image}
                text={post.text}
                date={post.date}
                onClick={() => {
                  history.push('/post/' + post.id);
                }}
              />
            ))}
          </div>
          <div className={styles.buttonLoader}>
            {posts.length !== count ? (
              <Button text='Show more' onClick={() => showMore()} />
            ) : null}
          </div>
        </>
      ) : (
        <h1 className={styles.noPosts} style={{ color: theme.contentTitle }}>
          NO Posts...
        </h1>
      )}
    </div>
  );
};
