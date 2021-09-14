import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14 24" {...props}>
      <path
        d="M3.14697 21.5796L11.7744 11.8737L3.14697 2.16783"
        stroke="black"
        stroke-width="4.31373"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Icon;
