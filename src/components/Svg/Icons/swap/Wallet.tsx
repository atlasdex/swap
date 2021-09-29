import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 34 34" {...props}>
      <path 
        d="M33.5 17C33.5 26.1127 26.1127 33.5 17 33.5C7.8873 33.5 0.5 26.1127 0.5 17C0.5 7.8873 7.8873 0.5 17 0.5C26.1127 0.5 33.5 7.8873 33.5 17Z"
        stroke="url(#paint0_linear)"
      />
      <path
        d="M24.3538 12.6721H24.1297V10.5819C24.1297 9.70973 23.3913 9 22.4835 9H10.543C9.22534 9 8.1389 9.9685 8.0135 11.2035C7.99438 11.2908 8.00117 10.5132 8.00117 22.5575C8.00117 23.9043 9.14143 25 10.5429 25H24.3537C25.2615 25 26 24.2904 26 23.4181V14.254C26 13.3817 25.2615 12.6721 24.3538 12.6721ZM10.543 10.0867H22.4835C22.7677 10.0867 22.999 10.3089 22.999 10.582V12.6721H10.543C9.787 12.6721 9.16818 12.0978 9.13369 11.3793C9.16818 10.661 9.787 10.0867 10.543 10.0867ZM24.3538 23.9134H10.543C9.76495 23.9134 9.13202 23.3051 9.13202 22.5575V13.3469C9.536 13.6069 10.0214 13.7587 10.543 13.7587H24.3538C24.638 13.7587 24.8693 13.9809 24.8693 14.254V16.4567H20.6144C19.1654 16.4567 17.9864 17.5895 17.9864 18.982C17.9864 20.3745 19.1654 21.5073 20.6144 21.5073H24.8693V23.4181C24.8693 23.6912 24.638 23.9134 24.3538 23.9134ZM24.8693 20.4207H20.6144C19.7889 20.4207 19.1172 19.7753 19.1172 18.982C19.1172 18.1888 19.7888 17.5434 20.6144 17.5434H24.8693V20.4207Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="-2.15713"
          y1="2.81753"
          x2="35.4818"
          y2="35.0795"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BA06FB" stopOpacity="0.3" />
          <stop offset="1" stopColor="#00FFF0" stopOpacity="0.3" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="1.96091"
          y1="9.31078"
          x2="31.9765"
          y2="31.0167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#BA06FB" stopOpacity="0.3" />
          <stop offset="0.9999" stopColor="#00FFF0" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
