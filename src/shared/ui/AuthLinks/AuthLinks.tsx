import { NavLink } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';

import { LinkParameters } from '@shared/types/routing';
import { paths } from '@shared/constants/routing';

import classes from './AuthLinks.module.scss';

const authLinks: LinkParameters[] = [
  {
    title: 'ФИО',
    path: paths.profile,
  },
  {
    title: 'Вход',
    path: paths.login,
  },
];

export const AuthLinks = (): JSX.Element => {
  return (
    <ul className={classes.links}>
      {authLinks.map(
        ({ title, path }): JSX.Element => (
          <li key={title}>
            <NavLink to={path} end>
              {({ isActive }) => <Button label={title} view={isActive ? 'primary' : 'secondary'} />}
            </NavLink>
          </li>
        ),
      )}
    </ul>
  );
};
