import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Shadow from './shadow';

const About: FC = () => (
  <Box
    mx="auto"
    id="about"
    display="flex"
    maxWidth="1440px"
    minHeight="100vh"
    alignItems="center"
    position="relative"
    justifyContent="center"
  >
    <Motion
      top="-120%"
      right="-100%"
      position="absolute"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Shadow />
    </Motion>
    <Typography
      as="h2"
      px="2xl"
      size="large"
      variant="title"
      color="outline"
      fontWeight="400"
      lineHeight="100%"
      textAlign="center"
      fontSize={['3.5rem', '3.5rem', '6rem']}
    >
      <Typography
        as="strong"
        size="large"
        variant="title"
        color="onSurface"
        fontSize={['3.5rem', '3.5rem', '6rem']}
      >
        DeFi infrastructure engineered by Move
      </Typography>{' '}
      and powered by the fastest chains.
    </Typography>
  </Box>
);

export default About;
