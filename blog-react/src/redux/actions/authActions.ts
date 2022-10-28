import { Dispatch } from 'redux';
import { getProfile, loginUser } from '../../services/auth';
import { ACTIONS } from '../constants';
import { IState } from '../store';

interface IRegisterData {
  username: string;
  email: string;
  password: string;
}

interface IProfile {
  email: string;
  username: string;
  id: number;
}

export const register = ({ username, email, password }: IRegisterData) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch(
        `https://studapi.teachmeskills.by/auth/users/`,
        {
          method: 'POST',
          body: JSON.stringify({ username, email, password }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const result = await response.json();

      if (response.ok === false) {
        throw result;
      }
      if (response.ok) {
        dispatch(registerSuccess(result));
      }
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
};

const registerFailure = (error: any) => {
  return {
    type: ACTIONS.REGISTER_FAILURE,
    error: error,
  };
};

const registerSuccess = (profile: IProfile) => {
  return {
    type: ACTIONS.REGISTER_SUCCESS,
    ...profile,
  };
};
const loginSuccess = (profile: IProfile) => {
  return {
    type: ACTIONS.LOGIN_SUCCESS,
    profile,
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const { access, refresh } = await loginUser(email, password);
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);

      const profile = await getProfile();
      dispatch(loginSuccess(profile));
    } catch (error) {
      dispatch(registerFailure(error));
    }
  };
};

export const init = () => {
  return async (dispatch: Dispatch) => {
    try {
      const access = localStorage.getItem('access');

      if (access) {
        const profile = await getProfile();

        if (profile) {
          dispatch(loginSuccess(profile));
        }
      }
    } catch (error) {}
  };
};
