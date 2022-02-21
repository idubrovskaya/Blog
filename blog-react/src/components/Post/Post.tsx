import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../Button/Button';
import { PostCard } from './PostCard';
import styles from './PostCard.module.css';
import { IState } from '../../redux/store';
import { addPost } from '../../redux/actions/postActions';

export const Post = () => {
  const history = useHistory();

  const params: { postId: string } = useParams();

  const dispatch = useDispatch();
  const post = useSelector((state: IState) => state.postReducer.post);
  useEffect(() => {
    getPostInfo();
  }, []);

  const getPostInfo = async () => {
    const res = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/' + params.postId
    );
    const post = await res.json();
    dispatch(addPost(post));
  };

  return post ? (
    <div className={styles.post}>
      <PostCard
        key={post.id}
        id={post.id}
        title={post.title}
        image={post.image}
        text={post.text}
        date={post.date}
        onClick={() => {}}
      />
      <Button
        text='Back'
        onClick={() => {
          history.goBack();
        }}
      />
    </div>
  ) : null;
};
