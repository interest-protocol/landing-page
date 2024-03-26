import { FC } from 'react';

import { SVGProps } from './svg.types';

const ArrowDown: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 12 13"
    fill="none"
    {...props}
  >
    <path
      d="M6.00011 12.3107L11.5608 6.75L10.5001 5.68934L6.75011 9.43934V0H5.25011V9.43934L1.50011 5.68934L0.439453 6.75L6.00011 12.3107Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowDown;
