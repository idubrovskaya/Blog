import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import { SubscriptionTitle } from '../SubscriptionTitle/SubscriptionTitle';
import styles from './Registration.module.css';

export const Registration = () => {
  return (
    <div>
      <div>
        <SubscriptionTitle />
      </div>
      <div className={styles.form}>
        <Input type='text' label='User name' value='' onChange={() => {}} />
        <Input type='email' label='Email' value='' onChange={() => {}} />
        <Input type='password' label='Password' value='' onChange={() => {}} />
        <Input
          type='password'
          label='Confirm password'
          value=''
          onChange={() => {}}
        />
        <Button text='Login' onClick={() => {}} />
        <p>If you have account, you can login</p>
      </div>
    </div>
  );
};
