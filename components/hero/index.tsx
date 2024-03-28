import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { TypeAnimation } from 'react-type-animation';
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

const Hero: FC = () => {
  const { push } = useRouter();

  return (
    <Box position="relative">
      <HeroBackground />
      <Box
        p="xl"
        zIndex="1"
        display="grid"
        height="100vh"
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
              <TypeAnimation
                cursor={true}
                wrapper="span"
                repeat={Infinity}
                preRenderFirstString
                sequence={['Interest Protocol', 2000, '$IPX', 2000]}
              />
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
                <Link href={`/#${id}`} key={unikey()}>
                  <Icon width="100%" maxWidth="3rem" maxHeight="3rem" />
                </Link>
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
          <Button
            color="onSurface"
            cursor="pointer"
            variant="outline"
            borderRadius="xs"
            PrefixIcon={Arrow}
            SuffixIcon={Arrow}
            fontWeight="normal"
            fontFamily="Satoshi"
            onClick={() => push('/#about')}
          >
            Learn more
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
