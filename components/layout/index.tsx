import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Box bg="#000" minHeight="100vh">
    <Box as="main" position="relative" overflow="hidden">
      {children}
    </Box>
  </Box>
);

export default Layout;
