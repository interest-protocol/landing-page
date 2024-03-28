import type { AppProps } from 'next/app';

import { SEO, ThemeManager } from '@/components';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeManager>
    <SEO />
    <Component {...pageProps} />
  </ThemeManager>
);

export default App;
