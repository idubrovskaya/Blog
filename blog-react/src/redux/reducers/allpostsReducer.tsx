import { ACTIONS } from '../constants';

export interface IPost {
  id: number;
  title: string;
  text: string;
  image: string;
  date: string;
}

export interface IPostsState {
  posts: IPost[];
}

const defaultState: IPostsState = {
  posts: [],
};

export const allpostsReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_ALL_POSTS) {
    return {
      ...state,
      posts: action.posts,
    };
  }
  return state;
};
