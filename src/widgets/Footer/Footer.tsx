import { Text } from '@consta/uikit/Text';

import { Navigation } from '@shared/ui/Navigation';

import classes from './Footer.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className={classes.footer}>
      <Navigation />
      <Text>&copy; 2024 Моя компания</Text>
    </footer>
  );
};
