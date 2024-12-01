import { ReactNode } from 'react';

import classes from './Container.module.scss';

interface ContainerProperties {
  readonly children: ReactNode | ReactNode[];
}

export const Container = ({ children }: ContainerProperties): JSX.Element => {
  return <div className={classes.container}>{children}</div>;
};
