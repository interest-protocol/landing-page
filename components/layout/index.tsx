import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import Header from '../header';

const Layout: FC<PropsWithChildren> = ({ children }) => (
  <Box bg="#000" minHeight="100vh">
    <Header />
    <Box as="main" position="relative">
      {children}
    </Box>
  </Box>
);

export default Layout;
