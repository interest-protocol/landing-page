import { FC, useId } from 'react';

const Shadow: FC = () => {
  const id = useId();

  return (
    <svg
      width="1440"
      height="2301"
      viewBox="0 0 1440 2301"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter={`url(#${id})`}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M280.095 955.688C354.393 941.578 432.038 870.65 494.26 913.69C556.142 956.496 548.213 1055.23 529.448 1128.17C514.202 1187.43 447.799 1209.66 406.508 1254.77C361.359 1304.09 346.565 1393.8 280.095 1400.57C213.141 1407.4 173.296 1330.44 125.018 1283.48C75.5097 1235.32 -2.06418 1197.26 0.0420067 1128.17C2.13796 1059.42 75.7037 1018.1 134.207 982.068C177.965 955.117 229.624 965.273 280.095 955.688Z"
          fill="#356EF5"
        />
      </g>
      <defs>
        <filter
          id={id}
          x="-900"
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
            result="effect1_foregroundBlur_30_2663"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Shadow;
