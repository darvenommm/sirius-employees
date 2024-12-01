import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { paths } from '@shared/constants/routing';
import { LayoutPage } from '@pages/LayoutPage';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { ProfilePage } from '@pages/ProfilePage';
import { ServicesPage } from '@pages/ServicesPage';
import { ServicePage } from '@pages/ServicePage';
import { IsAuthenticatedGuard } from './guards/IsAuthenticatedGuard';
import { IsNotAuthenticatedGuard } from './guards/IsNotAuthenticatedGuard';

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutPage />}>
          <Route path={paths.home} element={<HomePage />} />
          <Route element={<IsNotAuthenticatedGuard />}>
            <Route path={paths.login} element={<LoginPage />} />
          </Route>
          <Route element={<IsAuthenticatedGuard />}>
            <Route path={paths.profile} element={<ProfilePage />} />
            <Route path={paths.services}>
              <Route index element={<ServicesPage />} />
              <Route path=":serviceId" element={<ServicePage />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
