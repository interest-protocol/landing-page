import { FC } from 'react';

import { SVGProps } from './svg.types';

const Volatile: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 18 9"
    fill="none"
    {...props}
  >
    <path
      d="M16.5 2L11.5 6.375L6.5 2.625L1.5 7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);

export default Volatile;
