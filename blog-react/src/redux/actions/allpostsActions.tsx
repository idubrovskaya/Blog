import { ACTIONS } from '../constants';

export const addAllPosts = (posts: any) => {
  return {
    type: ACTIONS.ADD_ALL_POSTS,
    posts: posts,
  };
};
