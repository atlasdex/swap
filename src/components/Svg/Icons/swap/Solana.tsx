import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 34 34" {...props}>
      <circle cx="17" cy="17" r="17" fill="white" />
      <path
        d="M10.9244 20.6842C11.033 20.5764 11.1824 20.5135 11.3408 20.5135H25.7049C25.9674 20.5135 26.0987 20.828 25.9131 21.0122L23.0756 23.8293C22.967 23.9371 22.8176 24 22.6592 24H8.29507C8.03259 24 7.90135 23.6855 8.0869 23.5013L10.9244 20.6842Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M10.919 10.1694C11.0319 10.0624 11.181 10 11.3346 10H25.672C25.934 10 26.065 10.3121 25.8798 10.4949L23.0475 13.2902C22.9391 13.3971 22.79 13.4596 22.6319 13.4596H8.29452C8.03253 13.4596 7.90153 13.1475 8.08674 12.9647L10.919 10.1694Z"
        fill="url(#paint1_linear)"
      />
      <path
        d="M23.0475 15.4262C22.9391 15.3192 22.79 15.2567 22.6319 15.2567H8.29452C8.03253 15.2567 7.90153 15.5688 8.08674 15.7516L10.919 18.5469C11.0274 18.6539 11.1765 18.7163 11.3346 18.7163H25.672C25.934 18.7163 26.065 18.4042 25.8798 18.2214L23.0475 15.4262Z"
        fill="url(#paint2_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="24.3327"
          y1="8.31269"
          x2="14.5042"
          y2="27.275"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="19.9636"
          y1="6.09455"
          x2="10.2443"
          y2="24.9571"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
        <linearGradient
          id="paint2_linear"
          x1="22.1192"
          y1="7.2771"
          x2="12.3998"
          y2="26.1397"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00FFA3" />
          <stop offset="1" stopColor="#DC1FFF" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
