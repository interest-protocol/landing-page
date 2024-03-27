import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { Hero } from '@/components';
import About from '@/components/about';

const Home: FC = () => (
  <Box>
    <Hero />
    <About />
  </Box>
);

export default Home;
