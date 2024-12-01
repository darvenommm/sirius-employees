import { Navigation } from '@shared/ui/Navigation';
import { AuthLinks } from '@shared/ui/AuthLinks/AuthLinks';

import classes from './Header.module.scss';

export const Header = (): JSX.Element => {
  return (
    <header className={classes.header}>
      <Navigation />
      <AuthLinks />
    </header>
  );
};
