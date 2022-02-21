import { ACTIONS } from '../constants';

export interface IPost {
  id: number;
  title: string;
  text: string;
  image: string;
  date: string;
}

export interface IPostState {
  post: IPost;
}

const defaultState: IPostState = {
  post: {
    id: 0,
    title: '',
    text: '',
    image: '',
    date: '',
  },
};

export const postReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_POST) {
    return {
      ...state,
      post: action.post,
    };
  }
  return state;
};
