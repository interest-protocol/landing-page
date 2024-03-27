import { FC } from 'react';

import { SVGProps } from './svg.types';

const Plus: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      d="M7.83325 0.333252V6.16658H13.6666V7.83325H7.83325V13.6666H6.16658V7.83325H0.333252V6.16658H6.16658V0.333252H7.83325Z"
      fill="currentColor"
    />
  </svg>
);

export default Plus;
