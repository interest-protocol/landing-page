import { FC, useId } from 'react';

const Shadow: FC = () => {
  const id = useId();

  return (
    <svg
      width="2343"
      height="2301"
      viewBox="0 0 2343 2301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#${id})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1180.1 955.688C1254.39 941.578 1332.04 870.65 1394.26 913.69C1456.14 956.496 1448.21 1055.23 1429.45 1128.17C1414.2 1187.43 1347.8 1209.66 1306.51 1254.77C1261.36 1304.09 1246.57 1393.8 1180.1 1400.57C1113.14 1407.4 1073.3 1330.44 1025.02 1283.48C975.51 1235.32 897.936 1197.26 900.042 1128.17C902.138 1059.42 975.704 1018.1 1034.21 982.068C1077.97 955.117 1129.62 965.273 1180.1 955.688Z"
          fill="#356EF5"
        />
      </g>
      <defs>
        <filter
          id={id}
          x="0"
          y="0"
          width="2343"
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
            result="effect1_foregroundBlur_1056_187"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Shadow;
