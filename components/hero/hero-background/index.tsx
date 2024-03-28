import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import unikey from 'unikey';

import Particle from './particle';

const HeroBackground: FC = () => (
  <Box position="absolute" top="0">
    {Array.from({ length: 50 }, () => (
      <Particle key={unikey()} />
    ))}
    <Motion
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      initial={{ rotate: '0deg' }}
      animate={{ rotate: ['0deg', '360deg'] }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      <Motion
        maxWidth="23rem"
        maxHeight="23rem"
        position="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 1, 1, 1, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <img src="/img/ball-2.webp" alt="ball 1" width="100%" />
      </Motion>
      <Motion
        maxWidth="23rem"
        maxHeight="23rem"
        position="absolute"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 1, 0, 0, 0, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      >
        <img src="/img/ball-3.webp" alt="ball 2" width="100%" />
      </Motion>
    </Motion>
  </Box>
);

export default HeroBackground;
