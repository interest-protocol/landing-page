import { FC } from 'react';

import { SVGProps } from './svg.types';

const Ticket: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 70 96"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.25038 -1.625C1.25038 -1.625 6.76087 -1.625 8.75 -1.625H61.25C63.2391 -1.625 68.6 -1.625 68.6 -1.625C68.6 0.413845 68.75 90.625 68.75 90.625C68.75 92.0223 68.0102 93.3095 66.8179 93.9869C65.6256 94.6643 64.1685 94.625 63.0125 93.8845L35 75.939L6.9875 93.8845C5.83149 94.625 4.37445 94.6643 3.18212 93.9869C1.98979 93.3095 1.25 92.0223 1.25 90.625L1.25038 -1.625Z"
      fill="#F7F8FA"
      stroke="#909094"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Ticket;
