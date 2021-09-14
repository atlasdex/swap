import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 3 98" {...props}>
      <line
        x1="1.61774"
        y1="0.0588378"
        x2="1.61774"
        y2="97.1177"
        stroke="url(#paint0_linear)"
        stroke-width="2.15686"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="1.03929"
          y1="0.0588379"
          x2="1.03952"
          y2="97.1177"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0104167" stop-color="#1C2D4A" stop-opacity="0" />
          <stop offset="0.494792" stop-color="#C4C4C4" />
          <stop offset="1" stop-color="#1C2D4A" stop-opacity="0" />
        </linearGradient>
      </defs>{" "}
    </Svg>
  );
};

export default Icon;
