import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import unikey from 'unikey';

import Particle from './particle';

const Header: FC = () => (
  <Box width="100vw" height="100vh" position="fixed">
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
      animate={{ rotate: ['0deg', '365deg'] }}
      transition={{ duration: 30, repeat: Infinity }}
    >
      <Motion
        maxWidth="23rem"
        maxHeight="23rem"
        position="absolute"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 0, 0, 0, 1] }}
        transition={{ duration: 30, repeat: Infinity }}
      >
        <img src="/img/ball-1.png" alt="ball 1" width="100%" />
      </Motion>
      <Motion
        maxWidth="23rem"
        maxHeight="23rem"
        position="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0, 0, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
      >
        <img src="/img/ball-3.png" alt="ball 2" width="100%" />
      </Motion>
      <Motion
        maxWidth="23rem"
        maxHeight="23rem"
        position="absolute"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
        transition={{ duration: 30, repeat: Infinity }}
      >
        <img src="/img/ball-2.png" alt="ball 2" width="100%" />
      </Motion>
    </Motion>
  </Box>
);

export default Header;
