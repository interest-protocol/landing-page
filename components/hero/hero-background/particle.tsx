import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const Particle: FC = () => {
  const top = Math.random();
  const left = Math.random();
  const size = Math.random();
  const opacityTo = Math.random();
  const opacityFrom = Math.random();
  const duration = Math.random() * 2 + 3;

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
