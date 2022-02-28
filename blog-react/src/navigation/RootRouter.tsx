import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { AllPostsList } from '../components/AllPostsList/AllPostsList';
import { AddNewPost } from '../components/AddNewPost/AddNewPost';
import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';
import { Registration } from '../components/Registration/Registration';
import { Post } from '../components/Post/Post';
import { ResetPassword } from '../components/ResetPassword/ResetPassword';
import { ResetConfirm } from '../components/ResetConfirm/ResetConfirm';
import { Error } from '../components/Error/Error';

export const RootRouter = () => {
  const isLoggedIn = true;

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={AllPostsList} />
        <Route path='/add_new_post' component={AddNewPost} />
        <Route path='/post/:postId'>
          {isLoggedIn ? <Post /> : <Redirect to='/login' />}
        </Route>
        <Route path='/login' component={Login} />
        <Route path='/registration' component={Registration} />
        <Route path='/reset_password' component={ResetPassword} />
        <Route path='/reset_confirm' component={ResetConfirm} />
        <Route path='*' component={Error} />
      </Switch>
    </BrowserRouter>
  );
};
