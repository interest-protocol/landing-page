import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { startTransition, useRef, useState } from 'react';

import { useEventListener } from '@/hooks';

import Shadow from './shadow';

const phrase = 'Move-Secured DeFi, Powered by the Fastest Chains.';

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);

  const updatePercentage = () => {
    if (ref.current) {
      const { scrollHeight, clientHeight } = ref.current;
      const { innerHeight, scrollY } = window;

      const halfScreen = innerHeight / 2;

      const endPoint = scrollHeight - halfScreen;

      const initPoint = clientHeight - halfScreen;

      const result =
        scrollY < initPoint
          ? 0
          : scrollY > endPoint
            ? 1
            : (scrollY - initPoint) / (endPoint - initPoint);

      startTransition(() => setPercentage(result));
    }
  };

  useEventListener('scroll', updatePercentage);

  return (
    <Box
      position="relative"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={ref}
    >
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
          {phrase.slice(0, ~~(phrase.length * percentage))}
          <Typography
            as="small"
            size="large"
            opacity="0.08"
            variant="title"
            fontSize={['3.5rem', '3.5rem', '6rem']}
          >
            {phrase.slice(~~(phrase.length * percentage))}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default About;
