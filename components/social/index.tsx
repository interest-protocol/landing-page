import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import unikey from 'unikey';

import { SOCIAL } from '@/constants/social';

const Social: FC = () => (
  <Box display="grid" gridTemplateColumns="1fr 1fr" gap="m">
    {SOCIAL.map(({ Icon, link, title }) => (
      <a key={unikey()} href={link} title={title}>
        <Box
          bg="onSurface"
          display="flex"
          width="2.5rem"
          height="2.5rem"
          borderRadius="50%"
          alignItems="center"
          justifyContent="center"
        >
          <Icon maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
        </Box>
      </a>
    ))}
  </Box>
);

export default Social;
