import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { allpostsReducer, IPostsState } from './reducers/allpostsReducer';
import { IPostState, postReducer } from './reducers/postReducer';
import { IAuthState } from './reducers/authReducer';
import { authReducer } from './reducers/authReducer';

export interface IState {
  allpostsReducer: IPostsState;
  postReducer: IPostState;
  authReducer: IAuthState;
}

export const store = createStore(
  combineReducers({ allpostsReducer, postReducer, authReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);
