import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import unikey from 'unikey';

import { SOCIAL } from '@/constants/social';

import { SocialProps } from './social.types';

const Social: FC<SocialProps> = ({ dark }) => (
  <Box display="grid" gridTemplateColumns="1fr 1fr" gap="m">
    {SOCIAL.map(({ Icon, link, title }) => (
      <a
        href={link}
        title={title}
        key={unikey()}
        target="_blank"
        rel="noreferrer"
      >
        <Box
          display="flex"
          width="2.5rem"
          height="2.5rem"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
          bg={dark ? 'surface' : 'onSurface'}
          color={!dark ? 'surface' : 'onSurface'}
        >
          <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
        </Box>
      </a>
    ))}
  </Box>
);

export default Social;
