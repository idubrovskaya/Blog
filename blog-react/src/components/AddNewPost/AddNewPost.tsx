import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Context } from '../../App';
import { tmsFetch } from '../../services/helpers';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './AddNewPost.module.css';

export const AddNewPost = () => {
  const { theme } = useContext(Context);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [imageFile, setImageFile] = useState<Blob | null>(null);

  const onLoad = (event: any) => {
    setImageFile(event.target.files[0]);
    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event: any) => {
      setImage(event.target.result);
    };
  };
  const removeImage = () => {
    setImage('');
    setImageFile(null);
  };

  const createNewPost = async () => {
    const formData = new FormData();
    if (imageFile) {
      formData.append('image', imageFile);
    }

    formData.append('title', title);
    formData.append('text', text);
    formData.append('lesson_num', number);

    await tmsFetch('https://studapi.teachmeskills.by/blog/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'form/multipart',
      },
      body: formData,
    });
  };

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
            <Input
              label='Title'
              type='text'
              onChange={() => setTitle(title)}
              value=''
            />
            <Input
              label='Lesson Number'
              type='text'
              value=''
              onChange={() => setNumber(number)}
            />
            <label
              className={styles.textareaLabel}
              style={{ color: theme.label }}
              htmlFor='textarea'
            >
              Text
            </label>
            <textarea
              className={styles.textarea}
              onChange={(event) => setText(event.target.value)}
            ></textarea>
          </div>
          <div className={styles.addImage}>
            {image ? (
              <img src={image} />
            ) : (
              <p style={{ color: theme.label }}>Image</p>
            )}
            <div style={{ position: 'absolute' }}>
              <Button text='Add' onClick={() => {}} />
            </div>
            {image ? null : (
              <input
                type='file'
                accept='image/*'
                onChange={onLoad}
                style={{
                  width: '100%',
                  height: '100%',
                  zIndex: 100,
                  opacity: 0,
                }}
              />
            )}
            <Button text='Delete' onClick={removeImage} />
          </div>
        </div>
        <div className={styles.addButton}>
          <Button text='Add' onClick={createNewPost} />
        </div>
      </div>
      <img className={styles.backImg} alt='img' src='/img/dark_wave.png' />
    </div>
  );
};
