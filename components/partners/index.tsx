import { Box, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { FC } from 'react';
import unikey from 'unikey';

import { MOCK_IMAGES } from './images';

const Partners: FC = () => {
  return (
    <Box maxWidth="1440px" mx="auto">
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        gap="0.5rem"
        flexDirection="column"
        py="8xl"
        px="xl"
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
          display="flex"
          flexWrap="wrap"
          height="auto"
          width="100%"
          borderRadius="m"
          justifyContent="center"
          alignItems="center"
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
                      objectFit: 'cover',
                    }}
                  />
                </Link>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Partners;
