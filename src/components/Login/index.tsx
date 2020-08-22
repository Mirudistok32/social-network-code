import React from 'react';
import s from './Login.module.scss';
import { LoginForm } from './LoginForm';


export const Login = React.memo(() => {

  return (
    <div className={s.login} >
      <div className={s.login__wrap}>
        <h1 className={s.login__title}>Konnichiwa Samurai!</h1>
        <div className={s.login__form}>
          <LoginForm />
        </div>
      </div>
    </div>
  );
})
