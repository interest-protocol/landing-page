import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { forwardRef } from 'react';
import { useWatch } from 'react-hook-form';

import { AboutProps } from './about.types';
import Shadow from './shadow';

const phrase = 'Move-Secured DeFi, Powered by the Fastest Chains.';

const About = forwardRef<HTMLDivElement, AboutProps>(({ control }, ref) => {
  const percentage = useWatch({ control, name: 'percentage' });

  return (
    <div ref={ref}>
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
          top="0%"
          mt="-60%"
          mr="-100%"
          right="0%"
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
            {phrase.slice(0, ~~(phrase.length * percentage))}
          </Typography>
          {phrase.slice(~~(phrase.length * percentage))}
        </Typography>
      </Box>
    </div>
  );
});

About.displayName = About.name;

export default About;
