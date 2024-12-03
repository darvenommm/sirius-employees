import { FormEvent, useEffect, useId, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '@consta/uikit/Button';
import { Loader } from '@consta/uikit/Loader';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextFieldCanary';
import { paths } from '@shared/constants/routing';
import { addFullName, addTokens, login } from '@entities/auth';
import { getProfile } from '@entities/auth/api/getProfile';

import classes from './LoginForm.module.scss';

const enum LoginFormStatus {
  NONE = 'none',
  LOADING = 'loading',
  ERROR = 'error',
}

export const LoginForm = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatcher = useDispatch();

  const [status, setStatus] = useState<LoginFormStatus>(LoginFormStatus.NONE);

  const loginId = useId();
  const loginInput = useRef<HTMLInputElement>(null);

  const passwordId = useId();
  const passwordInput = useRef<HTMLInputElement>(null);

  useEffect((): void => {
    if (loginInput.current) {
      loginInput.current.required = true;
      loginInput.current.minLength = 6;
    }

    if (passwordInput.current) {
      passwordInput.current.required = true;
      passwordInput.current.minLength = 6;
    }
  }, []);

  const submitFormHandler = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    setStatus(LoginFormStatus.LOADING);
    const formData = new FormData(event.target as HTMLFormElement);
    const username = formData.get('username')!.toString().trim();
    const password = formData.get('password')!.toString().trim();

    try {
      const loginData = await login({ username, password });
      const user = await getProfile(loginData.accessToken);

      setStatus(LoginFormStatus.NONE);
      dispatcher(addTokens(loginData));
      dispatcher(addFullName(`${user.firstName} ${user.lastName}`.trim()))
      navigate(paths.home);
    } catch {
      setStatus(LoginFormStatus.ERROR);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler} autoComplete="off">
      <div>
        <label htmlFor={loginId}>Логин</label>
        <TextField
          id={loginId}
          inputRef={loginInput}
          type="text"
          name="username"
          placeholder="Введите логин"
        />
      </div>
      <div>
        <label htmlFor={passwordId}>Пароль</label>
        <TextField
          id={passwordId}
          inputRef={passwordInput}
          name="password"
          type="password"
          placeholder="Введите пароль"
        />
      </div>
      <Button className={classes.button} label="Вход" type="submit" />
      <div className={classes.bottom}>
        {status === LoginFormStatus.LOADING && (
          <div>
            <Loader />
          </div>
        )}
        {status === LoginFormStatus.ERROR && (
          <Text>Сетевая ошибка возможно некоректные данные</Text>
        )}
      </div>
    </form>
  );
};
