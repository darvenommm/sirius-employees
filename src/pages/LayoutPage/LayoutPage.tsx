import { Outlet } from 'react-router-dom';
import { Layout } from '@consta/uikit/Layout';

import { Footer } from '@widgets/Footer/Footer';
import { Header } from '@widgets/Header';

import classes from './LayoutPage.module.scss';
import { Container } from '@shared/ui/Container/Container';

export const LayoutPage = (): JSX.Element => {
  return (
    <Container>
      <Layout className={classes.container} direction="column">
        <Layout>
          <Header />
        </Layout>
        <Layout as="main" flex={1}>
          <Outlet />
        </Layout>
        <Layout>
          <Footer />
        </Layout>
      </Layout>
    </Container>
  );
};
