import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import unikey from 'unikey';

import { PRODUCTS } from '../products/products.data';
import Social from '../social';
import { ArrowDownSVG, LogoSVG } from '../svg';
import HeroBackground from './hero-background';

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
      <Social dark />
      <Box
        gap="8xl"
        display="flex"
        gridColumn="1/-1"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Box
          gap="m"
          display="flex"
          textAlign="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            size="large"
            variant="display"
            color="onSurface"
            fontFamily="Satoshi"
          >
            Interest Protocol
          </Typography>
          <Typography
            px="s"
            size="small"
            fontSize="xl"
            variant="body"
            color="onSurface"
            lineHeight="100%"
            fontFamily="Satoshi"
          >
            Shaping the Future of Decentralized Finance
          </Typography>
          <Box display="flex" gap="s" mt="4xl">
            {PRODUCTS.map(({ Icon, id }) => (
              <a href={`#${id}`} key={unikey()}>
                <Icon width="100%" maxWidth="3rem" maxHeight="3rem" />
              </a>
            ))}
          </Box>
        </Box>
      </Box>
      <Box
        display="flex"
        gridColumn="1/-1"
        alignItems="flex-end"
        justifyContent="center"
      >
        <a href="#about">
          <Button
            color="onSurface"
            cursor="pointer"
            variant="outline"
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
