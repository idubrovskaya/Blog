import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { WaveTemplate } from '../Templates/WaveTemplate';
import { SubscriptionTitle } from '../SubscriptionTitle/SubscriptionTitle';
import styles from './Login.module.css';
import { NavLink, useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { Context } from '../../App';
import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../redux/store';
import { validationService } from '../../services/validation';
import { login } from '../../redux/actions/authActions';

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector((state: IState) => state.authReducer.error);
  const isLoggedIn = useSelector(
    (state: IState) => state.authReducer.isLoggedIn
  );
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (isLoggedIn) {
      history.push('/');
    }
  });

  const onChangeEmail = useCallback((event) => {
    const value = event.target.value;
    setEmail(value);

    const error = validationService.validateEmail(value);

    setErrors((errors) => ({ ...errors, email: error }));
  }, []);

  const onChangePassword = useCallback((event) => {
    setPassword(event.target.value);

    const error = validationService.validatePassword(event.target.value);

    setErrors((errors) => ({ ...errors, password: error }));
  }, []);

  const onClick = () => {
    const errors = {
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
    };
    setErrors(errors);

    const values = Object.values(errors);
    const isValid = values.every((value) => value === '');
    if (isValid) {
      dispatch(login(email, password));
    }
  };

  const errorValues = error ? Object.values(error).flat() : '';
  console.log(errorValues);

  const { theme } = useContext(Context);
  return (
    <div>
      <WaveTemplate>
        <div>
          <SubscriptionTitle />
        </div>
        <div className={styles.form}>
          <Input
            type='email'
            label='Email'
            value=''
            onChange={onChangeEmail}
            onKeyDown={() => {}}
            error={errors.email}
          />
          <Input
            type='password'
            label='Password'
            value=''
            onChange={onChangePassword}
            onKeyDown={() => {}}
            error={errors.password}
          />
          <p>{errorValues}</p>
          <Button text='Login' onClick={onClick} />
          <p className={styles.info}>
            Forgot your password?
            <NavLink
              to='/reset_password'
              className={styles.password}
              style={{ color: theme.textNavigation }}
            >
              {' '}
              Reset password{' '}
            </NavLink>
          </p>
        </div>
      </WaveTemplate>
    </div>
  );
};
