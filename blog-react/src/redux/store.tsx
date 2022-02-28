import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allpostsReducer, IPostsState } from './reducers/allpostsReducer';
import { IPostState, postReducer } from './reducers/postReducer';

export interface IState {
  allpostsReducer: IPostsState;
  postReducer: IPostState;
}

export const store = createStore(
  combineReducers({ allpostsReducer, postReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
