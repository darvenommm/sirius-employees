import { NavLink } from 'react-router-dom';
import { Button } from '@consta/uikit/Button';

import { paths } from '@shared/constants/routing';
import { LinkParameters } from '@shared/types/routing';

import classes from './Navigation.module.scss';

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
      <ul className={classes.links}>
        {links.map(
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
      </ul>
    </nav>
  );
};
