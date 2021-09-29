import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 3 98" {...props}>
      <line
        x1="1.61774"
        y1="0.500977"
        x2="1.61774"
        y2="97.5598"
        stroke="url(#paint0_linear)"
        stroke-width="2.15686"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1.03929"
          y1="0.500977"
          x2="1.03952"
          y2="97.5598"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0104167" stopColor="#1C2D4A" stopOpacity="0" />
          <stop offset="0.494792" stopColor="#C4C4C4" />
          <stop offset="1" stopColor="#1C2D4A" stopOpacity="0" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
