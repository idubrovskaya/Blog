import { Dispatch } from 'redux';
import { ACTIONS } from '../constants';
import { IPost, IPostState } from '../reducers/postReducer';

export const addAllPosts = (posts: IPostState[]) => {
  return {
    type: ACTIONS.ADD_ALL_POSTS,
    posts: posts,
  };
};

export const clearPost = () => {
  return {
    type: ACTIONS.CLEAR_POST,
  };
};

export const addPost = (post: IPostState) => {
  return {
    type: ACTIONS.ADD_POST,
    post: post,
  };
};

export function fetchPost(postId: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/${postId}`
    );
    const result = await response.json();

    dispatch(addPost(result));
  };
}

export const searchPost = (posts: IPost[]) => {
  return {
    type: ACTIONS.SEARCH_REQUEST,
    searchedPostsRequest: posts,
  };
};

export function fetchSearchedPost(search: string) {
  return async (dispatch: Dispatch) => {
    const response = await fetch(
      `https://studapi.teachmeskills.by/blog/posts/?limit=100&search=${search}`
    );
    const result = await response.json();

    dispatch(searchPost(result.results));
  };
}
