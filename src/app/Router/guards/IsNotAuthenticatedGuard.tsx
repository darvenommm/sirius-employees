import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

import { selectIsAuthenticated } from '@entities/auth';
import { paths } from '@shared/constants/routing';

export const IsNotAuthenticatedGuard = (): JSX.Element => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return isAuthenticated ? <Navigate to={paths.home} replace /> : <Outlet />;
};
