import { Motion } from '@interest-protocol/ui-kit';
import { FC, useMemo } from 'react';

const Particle: FC = () => {
  const top = useMemo(Math.random, []);
  const left = useMemo(Math.random, []);
  const size = useMemo(Math.random, []);
  const opacityTo = useMemo(Math.random, []);
  const opacityFrom = useMemo(Math.random, []);
  const duration = useMemo(() => Math.random() * 2 + 3, []);

  return (
    <Motion
      bg="#fff"
      borderRadius="50%"
      position="absolute"
      boxShadow="0 0 10px #fff"
      top={`calc(${top} * 100vh)`}
      left={`calc(${left} * 100vw)`}
      animate={{ opacity: opacityTo }}
      width={`calc(${size} * 0.35rem)`}
      height={`calc(${size} * 0.35rem)`}
      initial={{ opacity: opacityFrom }}
      transition={{ duration, repeat: Infinity }}
    />
  );
};

export default Particle;
