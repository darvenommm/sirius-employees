import { StateManager } from './StateManager';
import { ThemeProvider } from './ThemeProvider';
import { Router } from './Router';

import './styles/index.scss';

export const App = (): JSX.Element => {
  return (
    <StateManager>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </StateManager>
  );
};
