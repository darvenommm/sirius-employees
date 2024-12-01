import { Button } from '@consta/uikit/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { clearTokens } from '@entities/auth';
import { paths } from '@shared/constants/routing';

export const ExitButton = (): JSX.Element => {
  const dispatcher = useDispatch();
  const navigate = useNavigate();

  const clickButtonHandler = (): void => {
    dispatcher(clearTokens());
    navigate(paths.login);
  };

  return <Button label="Выйти" onClick={clickButtonHandler} view="secondary" />;
};
