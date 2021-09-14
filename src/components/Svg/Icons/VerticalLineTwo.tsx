import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 2 141" {...props}>
      <line
        opacity="0.1"
        x1="0.695312"
        y1="140.503"
        x2="0.695319"
        y2="0.939758"
        stroke="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0.69533"
          y1="140.503"
          x2="0.694862"
          y2="0.939758"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="1" stop-color="#C4C4C4" />
        </linearGradient>
      </defs>{" "}
    </Svg>
  );
};

export default Icon;
