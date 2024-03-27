import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Social from '../social';
import { AnchorArrowSVG } from '../svg';
import Shadow from './shadow';

const Footer: FC = () => (
  <Box position="relative">
    <Motion
      top="-150%"
      right="-50%"
      position="absolute"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Shadow />
    </Motion>
    <Box
      p="l"
      my="8xl"
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
        mb={['unset', 'unset', '8xl']}
        justifyContent="space-between"
        flexDirection={['column', 'column', 'row']}
      >
        <Typography variant="body" size="medium">
          Open source software build by leading Move engineers in Web3.
        </Typography>
        <Box
          gap="s"
          display="flex"
          flexDirection="column"
          alignItems={['unset', 'unset', 'flex-end']}
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
        <Social />
        <Typography
          variant="body"
          size="small"
          textAlign="right"
          color="onSurface"
        >
          © 2024 — Copyright
          <br />
          All Rights reserved
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default Footer;
