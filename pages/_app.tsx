import type { AppProps } from 'next/app';

import { ThemeManager } from '@/components';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeManager>
    <Component {...pageProps} />
  </ThemeManager>
);

export default App;
