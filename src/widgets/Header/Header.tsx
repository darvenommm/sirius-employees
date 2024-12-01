import { NavLink } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';

import { Navigation } from '@shared/ui/Navigation';
import { ExitButton } from '@features/ExitButton';
import { LinkParameters } from '@shared/types/routing';
import { paths } from '@shared/constants/routing';

import classes from './Header.module.scss';

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

export const Header = (): JSX.Element => {
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
