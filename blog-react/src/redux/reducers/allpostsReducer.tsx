import { ACTIONS } from '../constants';
import { IPost } from './postReducer';

export interface IPostsState {
  posts: IPost[];
  searchedPostsRequest: '';
}

const defaultState: IPostsState = {
  posts: [],
  searchedPostsRequest: '',
};

export const allpostsReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts,
    };
  }
  if (action.type === ACTIONS.SEARCH_REQUEST) {
    return {
      ...state,
      posts: action.searchedPostsRequest,
    };
  }
  return state;
};
