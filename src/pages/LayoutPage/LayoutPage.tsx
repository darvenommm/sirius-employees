import { Outlet } from 'react-router-dom';

import { Footer } from '@widgets/Footer/Footer';
import { Header } from '@widgets/Header';

export const LayoutPage = (): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
