import { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { PostCard } from './PostCard';
import styles from './PostCard.module.css';
import { IState } from '../../redux/store';
import { fetchPost } from '../../redux/actions/allpostsActions';
import { clearPost } from '../../redux/actions/allpostsActions';
import { Context } from '../../App';

export const Post = () => {
  const { theme } = useContext(Context);

  const history = useHistory();
  const dispatch = useDispatch();

  const params: { postId: string } = useParams();

  const post = useSelector((state: IState) => state.postReducer.post);

  useEffect(() => {
    dispatch(fetchPost(params.postId));
    return () => {
      dispatch(clearPost());
    };
  }, []);

  return post.title ? (
    <div className={styles.post}>
      <h1 className={styles.contentTitle} style={{ color: theme.contentTitle }}>
        Selected post
      </h1>
      <p
        className={styles.btnBack}
        style={{ color: theme.buttonBack }}
        onClick={() => {
          history.goBack();
        }}
      >
        &lt; Back
      </p>

      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        image={post.image}
        text={post.text}
        date={post.date}
        onClick={() => {}}
      />
    </div>
  ) : (
    <div className={styles.container}>
      <div style={{ background: theme.preloader }}></div>
      <div style={{ background: theme.preloader }}></div>
      <div style={{ background: theme.preloader }}></div>
      <div style={{ background: theme.preloader }}></div>
      <div style={{ background: theme.preloader }}></div>
    </div>
  );
};
