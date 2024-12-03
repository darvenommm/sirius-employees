import { NavLink } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';
import { useSelector } from 'react-redux';

import { Navigation } from '@shared/ui/Navigation';
import { ExitButton } from '@features/ExitButton';
import { LinkParameters } from '@shared/types/routing';
import { paths } from '@shared/constants/routing';
import { selectFullName, selectIsAuthenticated } from '@entities/auth';

import classes from './Header.module.scss';

export const Header = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const fullName = useSelector(selectFullName);

  const authLinks: LinkParameters[] = [
    {
      title: isAuthenticated ? fullName : 'ФИО',
      path: paths.profile,
    },
    {
      title: 'Вход',
      path: paths.login,
    },
  ];

  return (
    <header className={classes.header}>
      <Navigation />
      <ul className={classes.authLinks}>
        {authLinks.map(
          ({ title, path }): JSX.Element => (
            <li key={title}>
              <NavLink to={path} end>
                {({ isActive }) => (
                  <Button label={title} view={isActive ? 'primary' : 'secondary'} />
                )}
              </NavLink>
            </li>
          ),
        )}
        <li>
          <ExitButton />
        </li>
      </ul>
    </header>
  );
};
