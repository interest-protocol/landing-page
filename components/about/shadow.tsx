import { FC, useId } from 'react';

const Shadow: FC = () => {
  const id = useId();

  return (
    <svg
      width="1212"
      height="2187"
      viewBox="0 0 1212 2187"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#${id})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1180.1 841.688C1254.39 827.578 1332.04 756.65 1394.26 799.69C1456.14 842.496 1448.21 941.234 1429.45 1014.17C1414.2 1073.43 1347.8 1095.66 1306.51 1140.77C1261.36 1190.09 1246.57 1279.8 1180.1 1286.57C1113.14 1293.4 1073.3 1216.44 1025.02 1169.48C975.51 1121.32 897.936 1083.26 900.042 1014.17C902.138 945.421 975.704 904.099 1034.21 868.068C1077.97 841.117 1129.62 851.273 1180.1 841.688Z"
          fill="#356EF5"
        />
      </g>
      <defs>
        <filter
          id={id}
          x="0"
          y="-114"
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
            result="effect1_foregroundBlur_30_544"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Shadow;
