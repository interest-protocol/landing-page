import { Box } from '@interest-protocol/ui-kit';
import { NextPage } from 'next';
import { UIEventHandler, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { About, Footer, Hero, Products } from '@/components';
import { AboutForm } from '@/components/about/about.types';

const HomePage: NextPage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { control, setValue } = useForm<AboutForm>({
    defaultValues: { percentage: 0 },
  });

  const updatePercentage: UIEventHandler<HTMLDivElement> = (event) => {
    if (ref.current) {
      const eventTarget = event.target as Element;

      const { scrollHeight } = ref.current;
      const { innerHeight } = window;
      const { scrollTop } = eventTarget;

      const halfScreen = innerHeight / 2;

      const endPoint = scrollHeight + halfScreen;

      const initPoint = scrollHeight - halfScreen;

      const result =
        scrollTop < initPoint
          ? 0
          : scrollTop > endPoint
            ? 1
            : (scrollTop - initPoint) / (endPoint - initPoint);

      setValue('percentage', result);
    }
  };

  return (
    <Box
      as="main"
      width="100vw"
      height="100vh"
      overflowY="auto"
      scrollBehavior="smooth"
      onScroll={updatePercentage}
    >
      <Hero />
      <About ref={ref} control={control} />
      <Products />
      <Footer />
    </Box>
  );
};

export default HomePage;
