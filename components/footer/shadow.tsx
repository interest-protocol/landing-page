import { FC, useId } from 'react';

const Shadow: FC = () => {
  const id = useId();

  return (
    <svg
      width="2347"
      height="2301"
      viewBox="0 0 2347 2301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#${id})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1182.16 955.688C1257 941.578 1335.22 870.65 1397.9 913.69C1460.24 956.496 1452.25 1055.23 1433.35 1128.17C1417.99 1187.43 1351.1 1209.66 1309.5 1254.77C1264.02 1304.09 1249.12 1393.8 1182.16 1400.57C1114.71 1407.4 1074.57 1330.44 1025.94 1283.48C976.066 1235.32 897.921 1197.26 900.042 1128.17C902.154 1059.42 976.261 1018.1 1035.2 982.068C1079.28 955.117 1131.32 965.273 1182.16 955.688Z"
          fill="#356EF5"
        />
      </g>
      <defs>
        <filter
          id={id}
          x="0"
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
            result="effect1_foregroundBlur_1057_193"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Shadow;
