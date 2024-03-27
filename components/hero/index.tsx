import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import HeroBackground from '../hero-background';
import Social from '../social';
import { ArrowDownSVG, LogoSVG } from '../svg';

const Arrow = (
  <Motion
    animate={{ y: ['0rem', '0.25rem', '0rem'] }}
    transition={{ duration: 1, repeat: Infinity, ease: 'easeIn' }}
  >
    <ArrowDownSVG maxWidth="0.9rem" maxHeight="0.9rem" width="100%" />
  </Motion>
);

const Hero: FC = () => (
  <Box>
    <HeroBackground />
    <Box
      p="xl"
      zIndex="1"
      height="100vh"
      display="grid"
      position="relative"
      gridTemplateRows="7rem auto 7rem"
      gridTemplateColumns="7rem auto 7rem"
    >
      <LogoSVG maxHeight="2.5rem" maxWidth="2.5rem" width="100%" />
      <Box />
      <Social />
      <Box
        gap="8xl"
        display="flex"
        gridColumn="1/-1"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box display="flex" flexDirection="column" gap="m" alignItems="center">
          <Typography
            size="large"
            variant="display"
            color="onSurface"
            fontFamily="Satoshi"
          >
            Interest Protocol
          </Typography>
          <Typography
            size="small"
            fontSize="xl"
            variant="body"
            color="onSurface"
            fontFamily="Satoshi"
          >
            Shaping the Future of Decentralized Finance
          </Typography>
        </Box>
        <a href="#about">
          <Button
            bg="white"
            cursor="pointer"
            color="surface"
            variant="tonal"
            borderRadius="xs"
            PrefixIcon={Arrow}
            SuffixIcon={Arrow}
            fontWeight="normal"
            fontFamily="Satoshi"
          >
            Learn more
          </Button>
        </a>
      </Box>
    </Box>
  </Box>
);

export default Hero;
