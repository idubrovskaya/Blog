import { useCallback, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { PostCard } from '../Post/PostCard';
import { Button } from '../Button/Button';
import styles from './AllPostsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { addAllPosts, fetchPosts } from '../../redux/actions/allpostsActions';
import { Input } from '../Input/Input';
import { useParams } from 'react-router-dom';
import { fetchSearchedPost } from '../../redux/actions/allpostsActions';

import { AddNewPost } from '../AddNewPost/AddNewPost';
import { IPost } from '../../redux/reducers/postReducer';
import { Context } from '../../App';

const POST_PER_PAGE = 5;

export const AllPostsList = () => {
  const { theme } = useContext(Context);

  const [search, setSearch] = useState('');

  const handleSearchInputChanges = useCallback(
    (event: any) => {
      setSearch(event.target.value);
      // dispatch(fetchSearchedPost(event.target.value));
    },
    [setSearch]
  );

  useEffect(() => {
    dispatch(fetchSearchedPost(search));
  }, [search]);

  const handleEnter = (event: any) => {
    if (event.key === 'Enter') {
      dispatch(fetchSearchedPost(search));
    }
  };

  const [offset, setOffset] = useState(0);
  // const [showButton, setShowButton] = useState<boolean>(true);
  const history = useHistory();
  const posts = useSelector((state: IState) => state.allpostsReducer.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
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
      <div className={styles.allpostslist}>
        {posts.length === 0 ? (
          <h1 className={styles.noPosts} style={{ color: theme.contentTitle }}>
            NO Posts...
          </h1>
        ) : (
          posts.map((post) => {
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
          })
        )}
      </div>
      <div className={styles.buttonLoader}>
        {offset === posts.length ? null : (
          <Button text='Show more' onClick={showMore} />
        )}
      </div>
    </div>
  );
};
