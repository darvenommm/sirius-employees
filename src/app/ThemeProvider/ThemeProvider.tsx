import { ReactNode } from 'react';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

interface ThemeProviderProperties {
  readonly children: ReactNode | ReactNode[];
}

export const ThemeProvider = ({ children }: ThemeProviderProperties): JSX.Element => {
  return <Theme preset={presetGpnDefault}>{children}</Theme>;
};
