import { FC } from 'react';

import { SVGProps } from './svg.types';

const Stable: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 16 3"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.291748 1.50008C0.291748 1.03984 0.664844 0.666748 1.12508 0.666748H14.8751C15.3353 0.666748 15.7084 1.03984 15.7084 1.50008C15.7084 1.96032 15.3353 2.33341 14.8751 2.33341H1.12508C0.664844 2.33341 0.291748 1.96032 0.291748 1.50008Z"
      fill="currentColor"
    />
  </svg>
);

export default Stable;
