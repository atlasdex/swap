import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        fill="#15B800"
      />
      <path
        d="M9 12L11 14L15 10"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </Svg>
  );
};

export default Icon;
