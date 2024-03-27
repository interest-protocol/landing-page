import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import unikey from 'unikey';

import ProductCard from '../product-card';
import { PRODUCTS } from './products.data';
import Shadow from './shadow';

const Products: FC = () => (
  <Box position="relative" py="8xl" px="xl">
    <Motion
      top="20%"
      left="-50%"
      position="absolute"
      initial={{ opacity: 1 }}
      animate={{ opacity: [1, 0.5, 1] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
    >
      <Shadow />
    </Motion>
    <Box maxWidth="1440px" mx="auto">
      <Typography
        pb="8xl"
        size="large"
        variant="title"
        fontWeight="700"
        color="onSurface"
        lineHeight="100%"
        fontSize={['2.25rem', '2.25rem', '3.5rem']}
      >
        Our Products
      </Typography>
      <Box display="flex" flexDirection="column" gap="4xl">
        {PRODUCTS.map((product) => (
          <ProductCard key={unikey()} {...product} />
        ))}
      </Box>
    </Box>
  </Box>
);

export default Products;
