import { LoginForm } from '@widgets/LoginForm';

import classes from './LoginPage.module.scss';

export const LoginPage = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <LoginForm />
    </div>
  );
};
