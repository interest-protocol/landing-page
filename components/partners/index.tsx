import { Box, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';
import unikey from 'unikey';

import { PARTNERS_IMAGES } from './partners.data';

const Partners: FC = () => (
  <Box px="xl">
    <Box
      py="8xl"
      mx="auto"
      gap="0.5rem"
      display="flex"
      maxWidth="1440px"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
    >
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
        width="100%"
        height="auto"
        display="flex"
        flexWrap="wrap"
        borderRadius="m"
        border="1px solid"
        alignItems="center"
        justifyContent="center"
        py={['m', 'm', 'm', '2xl']}
        px={['m', 'm', 'm', '5rem']}
        borderColor="outlineVariant"
        nHover={{ borderColor: 'outline', boxShadow: '0 0 0.5rem #fff4' }}
      >
        {PARTNERS_IMAGES.map((item) => (
          <Box
            m="1rem"
            width="auto"
            key={unikey()}
            cursor="pointer"
            overflow="hidden"
          >
            <Link href={item.url} target="blank">
              <img
                src={item.image}
                alt={item.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  maxHeight: '2.5rem',
                  minWidth: '160px',
                }}
              />
            </Link>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
);

export default Partners;
