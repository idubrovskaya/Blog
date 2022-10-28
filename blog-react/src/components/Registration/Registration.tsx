import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { SubscriptionTitle } from '../SubscriptionTitle/SubscriptionTitle';
import { NavLink, useHistory } from 'react-router-dom';
import styles from './Registration.module.css';
import { WaveTemplate } from '../Templates/WaveTemplate';
import { useCallback, useContext, useEffect, useState } from 'react';
import { validationService } from '../../services/validation';
import { Context } from '../../App';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/actions/authActions';
import { IState } from '../../redux/store';

export const Registration = () => {
  const { theme } = useContext(Context);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const error = useSelector((state: IState) => state.authReducer.error);
  const emailState = useSelector((state: IState) => state.authReducer.email);
  const history = useHistory();
  useEffect(() => {
    if (emailState) {
      history.push('/register_confirm');
    }
  }, [emailState]);

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const onChangeUsername = useCallback((event) => {
    setUsername(event.target.value);

    const error = validationService.validateName(event.target.value);

    setErrors((errors) => ({ ...errors, username: error }));
  }, []);

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

  const onChangeConfirmPassword = useCallback((event) => {
    setConfirmPassword(event.target.value);

    const error = validationService.validatePassword(event.target.value);

    setErrors((errors) => ({ ...errors, confirmPassword: error }));
  }, []);

  const onClick = () => {
    const errors = {
      username: validationService.validateName(username),
      email: validationService.validateEmail(email),
      password: validationService.validatePassword(password),
      confirmPassword: validationService.validateRepeatedPassword(
        password,
        confirmPassword
      ),
    };
    setErrors(errors);

    const values = Object.values(errors);
    const isValid = values.every((value) => value === '');
    if (isValid) {
      dispatch(register({ username, email, password }));
    }
  };
  console.log({ error });

  const errorValues = error ? Object.values(error).flat() : '';
  console.log(errorValues);

  return (
    <div>
      <WaveTemplate>
        <div>
          <SubscriptionTitle />
        </div>
        <div className={styles.form}>
          <Input
            type='text'
            label='User name'
            value=''
            error={errors.username}
            onChange={onChangeUsername}
            onKeyDown={() => {}}
          />
          <Input
            type='email'
            label='Email'
            value=''
            error={errors.email}
            onChange={onChangeEmail}
            onKeyDown={() => {}}
          />
          <Input
            type='password'
            label='Password'
            value=''
            error={errors.password}
            onChange={onChangePassword}
            onKeyDown={() => {}}
          />
          <Input
            type='password'
            label='Confirm password'
            value=''
            error={errors.confirmPassword}
            onChange={onChangeConfirmPassword}
            onKeyDown={() => {}}
          />
          <p className={styles.errorValue}>{errorValues}</p>
          <Button text='Login' onClick={onClick} />
          <p className={styles.info}>
            If you have account, you can{' '}
            <NavLink
              to='/login'
              className={styles.login}
              style={{ color: theme.textNavigation }}
            >
              login
            </NavLink>{' '}
          </p>
        </div>
      </WaveTemplate>
    </div>
  );
};
