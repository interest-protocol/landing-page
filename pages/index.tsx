import { Box } from '@interest-protocol/ui-kit';
import { NextPage } from 'next';

import { About, Footer, Hero, Partners, Products } from '@/components';

const HomePage: NextPage = () => (
  <Box as="main">
    <Hero />
    <About />
    <Products />
    <Partners />
    <Footer />
  </Box>
);

export default HomePage;
