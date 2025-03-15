import { FC } from 'react';

import { SVGProps } from './svg.types';

const Swap: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M22 7.41421L17 12.4142L22 17.4142L20.5858 18.8284L14.1716 12.4142L20.5858 6L22 7.41421Z"
      fill="currentColor"
    />
    <path
      d="M3.41421 6L9.82843 12.4142L3.41421 18.8284L2 17.4142L7 12.4142L2 7.41421L3.41421 6Z"
      fill="currentColor"
    />
  </svg>
);

export default Swap;
