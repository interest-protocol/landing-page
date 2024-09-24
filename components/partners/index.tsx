import { Box, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';
import unikey from 'unikey';

import { MOCK_IMAGES } from './images';

const Partners: FC = () => {
  return (
    <Box mx="l" display="flex" gap="0.5rem" flexDirection="column">
      <Typography
        pb="8xl"
        size="large"
        variant="title"
        fontWeight="700"
        color="onSurface"
        lineHeight="100%"
        fontSize={['2.25rem', '2.25rem', '3.5rem']}
      >
        Our Partners
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        height="auto"
        borderRadius="m"
        border="1px solid"
        py={['m', 'm', 'm', '2xl']}
        px={['m', 'm', 'm', '4xl']}
        borderColor="outlineVariant"
        nHover={{ borderColor: 'outline', boxShadow: '0 0 0.5rem #fff4' }}
      >
        {MOCK_IMAGES.map((item) => {
          return (
            <Box
              m="1rem"
              key={unikey()}
              cursor="pointer"
              width={['100%', 'auto', 'auto', 'auto']}
            >
              <Link href={item.url}>
                <img src={item.image} alt={item.label} />
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Partners;
