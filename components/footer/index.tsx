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
      my="8xl"
      gap="8xl"
      mx="auto"
      display="flex"
      maxWidth="1440px"
      position="relative"
      flexDirection="column"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        color="onSurface"
        mb="8xl"
      >
        <Typography variant="body" size="medium">
          Open source software build by leading Move engineers in Web3.
        </Typography>
        <Box
          gap="s"
          display="flex"
          alignItems="flex-end"
          flexDirection="column"
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
        justifyContent="space-between"
        alignItems="flex-end"
        mt="8xl"
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
