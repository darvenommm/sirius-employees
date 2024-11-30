import { NavLink } from 'react-router';
import { Button } from '@consta/uikit/Button';

import { LinkParameters } from '@shared/types/routing';
import { paths } from '@shared/constants/routing';

const authLinks: LinkParameters[] = [
  {
    title: 'ФИО',
    path: paths.profile(1),
  },
  {
    title: 'Вход',
    path: paths.login,
  },
];

export const AuthLinks = (): JSX.Element => {
  return (
    <ul>
      {authLinks.map(
        ({ title, path }): JSX.Element => (
          <li key={title}>
            <NavLink to={path}>
              {({ isActive }) => <Button label={title} view={isActive ? 'primary' : 'secondary'} />}
            </NavLink>
          </li>
        ),
      )}
    </ul>
  );
};
