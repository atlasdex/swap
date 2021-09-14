import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 3 10" {...props}>
      <line
        x1="1.07843"
        y1="-4.71397e-08"
        x2="1.07843"
        y2="80"
        stroke="url(#paint0_linear)"
        stroke-width="2.15686"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0.499983"
          y1="2.30112e-08"
          x2="0.500142"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0104167" stop-color="#031B22" />
          <stop offset="0.494792" stop-color="#74A09E" stop-opacity="0.49" />
          <stop offset="1" stop-color="#031A20" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
