import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button } from '../Button/Button';
import { PostCard, IProps } from './PostCard';

export const Post = () => {
  const [post, setPost] = useState<IProps>();

  const history = useHistory();

  const params: any = useParams();

  useEffect(() => {
    getPostInfo();
  }, []);

  const getPostInfo = async () => {
    const res = await fetch(
      'https://studapi.teachmeskills.by/blog/posts/' + params.postId
    );
    const post = await res.json();
    setPost(post);
  };

  return post ? (
    <div>
      <PostCard
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
