import { FC } from 'react';

import { SVGProps } from './svg.types';

const X: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 20 19"
    fill="none"
    {...props}
  >
    <path
      d="M0.048762 0L7.77054 10.3247L0 18.7192H1.74884L8.55193 11.3697L14.0486 18.7192H20L11.8438 7.8137L19.0765 0H17.3277L11.0624 6.76872L6.00012 0H0.048762Z"
      fill="currentColor"
    />
  </svg>
);

export default X;
