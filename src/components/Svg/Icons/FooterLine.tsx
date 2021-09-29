import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 1359 3" {...props}>
      <line
        opacity="0.3"
        x1="1358.77"
        y1="1.41346"
        x2="0.000244141"
        y2="1.41346"
        stroke="url(#paint0_linear)"
        stroke-width="1.32692"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1358.77"
          y1="1.24998"
          x2="0.000244865"
          y2="1.29493"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0104167" stopColor="#1C2D4A" stopOpacity="0" />
          <stop offset="0.494792" stopColor="#C4C4C4" />
          <stop offset="1" stopColor="#1C2D4A" stopOpacity="0" />
        </linearGradient>
      </defs>{" "}
    </Svg>
  );
};

export default Icon;
