import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';
import unikey from 'unikey';

import Social from '../social';
import { AnchorArrowSVG } from '../svg';
import Shadow from './shadow';

const Footer: FC = () => (
  <Box position="relative" py="8xl">
    <Motion
      right="0%"
      bottom="0%"
      zIndex="-1"
      position="absolute"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Shadow />
    </Motion>
    <Box
      p="l"
      gap="8xl"
      mx="auto"
      display="flex"
      maxWidth="1440px"
      position="relative"
      flexDirection="column"
    >
      <Box
        gap="2xl"
        display="flex"
        color="onSurface"
        mb={['unset', 'unset', 'unset', '8xl']}
        justifyContent="space-between"
        flexDirection={['column', 'column', 'column', 'row']}
      >
        <Box>
          <Typography variant="body" size="medium">
            Web3 open-source software built by leading Move Language engineers.
          </Typography>
          <Box width={['100%', '28rem', '28rem', '23rem']} gap="1rem" pt="1rem">
            <Box width="auto" key={unikey()} cursor="pointer" overflow="hidden">
              <Link href="https://recuperarportugal.gov.pt/" target="blank">
                <img
                  src="/img/stamp.webp"
                  alt="Portugal Stamp"
                  style={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Link>
            </Box>
          </Box>
        </Box>

        <Box
          gap="s"
          display="flex"
          flexDirection="column"
          alignItems={['unset', 'unset', 'unset', 'flex-end']}
        >
          <a
            href="https://docs.interestprotocol.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="tonal"
              SuffixIcon={
                <AnchorArrowSVG
                  maxWidth="0.85rem"
                  maxHeight="0.85rem"
                  width="100%"
                />
              }
            >
              Documentation
            </Button>
          </a>
          <a
            href="https://drive.google.com/drive/folders/176q4-80OZaHCJEfBiZHsHYHIH0Z_ipgf?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="tonal"
              SuffixIcon={
                <AnchorArrowSVG
                  maxWidth="0.85rem"
                  maxHeight="0.85rem"
                  width="100%"
                />
              }
            >
              Media Kit
            </Button>
          </a>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="flex-end"
        justifyContent="space-between"
        mt={['unset', 'unset', '8xl']}
      >
        <Box display="flex" gap="8xl">
          <Social />
        </Box>
        <Typography
          variant="body"
          size="small"
          textAlign="right"
          color="onSurface"
        >
          © {new Date().getFullYear()} — Copyright
          <br />
          All Rights reserved
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Footer;
