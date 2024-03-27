import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { About, Footer, Hero, Products } from '@/components';

const Home: FC = () => (
  <Box>
    <Hero />
    <About />
    <Products />
    <Footer />
  </Box>
);

export default Home;
