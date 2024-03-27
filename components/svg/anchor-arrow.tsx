import { FC } from 'react';

import { SVGProps } from './svg.types';

const AnchorArrow: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <path
      d="M1.25011 0.5H9.50011V8.75H8.00011V3.06066L1.25011 9.81066L0.189453 8.75L6.93945 2H1.25011V0.5Z"
      fill="currentColor"
    />
  </svg>
);

export default AnchorArrow;
