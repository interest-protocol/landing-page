import { FC, useId } from 'react';

const Shadow: FC = () => {
  const id = useId();

  return (
    <svg
      width="1440"
      height="977"
      viewBox="0 0 1440 977"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#${id})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1175.16 955.688C1250 941.578 1328.22 870.65 1390.9 913.69C1453.24 956.496 1445.25 1055.23 1426.35 1128.17C1410.99 1187.43 1344.1 1209.66 1302.5 1254.77C1257.02 1304.09 1242.12 1393.8 1175.16 1400.57C1107.71 1407.4 1067.57 1330.44 1018.94 1283.48C969.066 1235.32 890.921 1197.26 893.042 1128.17C895.154 1059.42 969.261 1018.1 1028.2 982.068C1072.28 955.117 1124.32 965.273 1175.16 955.688Z"
          fill="#356EF5"
        />
      </g>
      <defs>
        <filter
          id={id}
          x="-7"
          y="0"
          width="2347"
          height="2301"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="450"
            result="effect1_foregroundBlur_30_2251"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Shadow;
