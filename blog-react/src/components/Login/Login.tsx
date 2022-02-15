import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { SubscriptionTitle } from '../SubscriptionTitle/SubscriptionTitle';
import styles from './Login.module.css';

export const Login = () => {
  return (
    <div>
      <div>
        <SubscriptionTitle />
      </div>
      <div className={styles.form}>
        <Input type='email' label='Email' value='' onChange={() => {}} />
        <Input type='password' label='Password' value='' onChange={() => {}} />
        <Button text='Login' onClick={() => {}} />
        <p>Forgot your password? Reset password</p>
      </div>
    </div>
  );
};
