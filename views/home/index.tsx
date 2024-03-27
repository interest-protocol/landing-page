import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { About, Hero, Products } from '@/components';

const Home: FC = () => (
  <Box>
    <Hero />
    <About />
    <Products />
  </Box>
);

export default Home;
