import { Navigation } from '@shared/ui/Navigation';
import { AuthLinks } from '@shared/ui/AuthLinks/AuthLinks';

export const Header = (): JSX.Element => {
  return (
    <header>
      <Navigation />
      <AuthLinks />
    </header>
  );
};
