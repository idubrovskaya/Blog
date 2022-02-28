import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../App';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './AddNewPost.module.css';

export const AddNewPost = () => {
  const { theme } = useContext(Context);

  const history = useHistory();

  return (
    <div className={styles.addNewPost}>
      <div className={styles.container}>
        <div className={styles.addNewPostTitle}>
          <h1 style={{ color: theme.contentTitle }}>Add new post</h1>
          <p
            className={styles.btnBack}
            style={{ color: theme.buttonBack }}
            onClick={() => {
              history.goBack();
            }}
          >
            &lt; Back
          </p>
        </div>
        <div className={styles.addNewPostForm}>
          <div className={styles.addInfo}>
            <Input label='Title' type='text' onChange={() => {}} value='' />
            <Input
              label='Lesson Number'
              type='text'
              value=''
              onChange={() => {}}
            />
            <label
              className={styles.textareaLabel}
              style={{ color: theme.label }}
              htmlFor='textarea'
            >
              Text
            </label>
            <textarea className={styles.textarea}></textarea>
          </div>
          <div className={styles.addImage}>
            <p style={{ color: theme.label }}>Image</p>
            <Button text='Add' onClick={() => {}} />
          </div>
        </div>
        <div className={styles.addButton}>
          <Button text='Add' onClick={() => {}} />
        </div>
      </div>
      <img className={styles.backImg} alt='img' src='/img/dark_wave.png' />
    </div>
  );
};
