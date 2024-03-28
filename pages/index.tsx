import { Box } from '@interest-protocol/ui-kit';
import { NextPage } from 'next';

import { About, Footer, Hero, Products } from '@/components';

const HomePage: NextPage = () => (
  <Box as="main">
    <Hero />
    <About />
    <Products />
    <Footer />
  </Box>
);

export default HomePage;
