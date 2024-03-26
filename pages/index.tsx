import { NextPage } from 'next';

import Layout from '@/components/layout';
import Home from '@/views/home';

const HomePage: NextPage = () => (
  <Layout>
    <Home />
  </Layout>
);

export default HomePage;
