import { Global } from '@emotion/react';
import { darkTheme, ThemeProvider } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { GlobalStyles } from '@/styles';

const ThemeManager: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={darkTheme}>
    <Global styles={GlobalStyles} />
    {children}
  </ThemeProvider>
);

export default ThemeManager;
