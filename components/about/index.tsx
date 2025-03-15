import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { startTransition, useState } from 'react';

import { useEventListener } from '@/hooks';

import Shadow from './shadow';

const PHRASE = 'Move-Secured DeFi, Powered by the Fastest Chains.';

const About = () => {
  const [percentage, setPercentage] = useState(0);

  const updatePercentage = () => {
    const { innerHeight, scrollY } = window;

    const halfHeight = innerHeight * 0.5;

    const percentage = scrollY / halfHeight - 1;

    const result = Math.min(Math.max(0, percentage), 1);

    startTransition(() => setPercentage(result));
  };

  useEventListener('scroll', updatePercentage);

  return (
    <Box position="relative">
      <Motion
        top="-80%"
        right="0%"
        position="absolute"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Shadow />
      </Motion>
      <Box
        px="4xl"
        mx="auto"
        id="about"
        display="flex"
        maxWidth="1440px"
        minHeight="100vh"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          as="h2"
          px="2xl"
          size="large"
          variant="title"
          color="onSurface"
          fontWeight="400"
          lineHeight="100%"
          textAlign="center"
          fontSize={['3.5rem', '3.5rem', '6rem']}
        >
          {PHRASE.slice(0, ~~(PHRASE.length * percentage))}
          <Typography
            as="small"
            size="large"
            opacity="0.08"
            variant="title"
            fontSize={['3.5rem', '3.5rem', '6rem']}
          >
            {PHRASE.slice(~~(PHRASE.length * percentage))}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
