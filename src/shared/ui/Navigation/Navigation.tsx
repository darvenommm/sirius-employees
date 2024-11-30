import { NavLink } from 'react-router';
import { Button } from '@consta/uikit/Button';

import { paths } from '@shared/constants/routing';

import { LinkParameters } from '@shared/types/routing';

const links: LinkParameters[] = [
  {
    title: 'Главная',
    path: paths.home,
  },
  {
    title: 'Услуги компании',
    path: paths.services,
  },
];

export const Navigation = (): JSX.Element => {
  return (
    <nav>
      <ul>
        {links.map(
          ({ title, path }): JSX.Element => (
            <li key={title}>
              <NavLink to={path}>
                {({ isActive }) => (
                  <Button label={title} view={isActive ? 'primary' : 'secondary'} />
                )}
              </NavLink>
            </li>
          ),
        )}
      </ul>
    </nav>
  );
};
