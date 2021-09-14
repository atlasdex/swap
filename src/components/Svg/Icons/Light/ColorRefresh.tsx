import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 31" {...props}>
      <path
        d="M19.125 1.79419L24.219 6.88814L19.125 11.9821"
        stroke="#BA06FB"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.2959 14.5291V11.9821C1.2959 10.6311 1.83258 9.33547 2.78788 8.38017C3.74318 7.42487 5.03885 6.88818 6.38985 6.88818H24.2187"
        stroke="#BA06FB"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.38985 29.811L1.2959 24.7171L6.38985 19.6231"
        stroke="#BA06FB"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.2187 17.076V19.623C24.2187 20.974 23.682 22.2696 22.7267 23.2249C21.7714 24.1802 20.4757 24.7169 19.1247 24.7169H1.2959"
        stroke="#BA06FB"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Icon;
