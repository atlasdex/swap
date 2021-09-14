import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 29" {...props}>
      <path
        d="M14.2229 27.1537C21.2562 27.1537 26.9578 21.4521 26.9578 14.4188C26.9578 7.3855 21.2562 1.6839 14.2229 1.6839C7.18964 1.6839 1.48804 7.3855 1.48804 14.4188C1.48804 21.4521 7.18964 27.1537 14.2229 27.1537Z"
        stroke="#BA06FB"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.2224 6.77789V14.4188L19.3164 16.9658"
        stroke="#BA06FB"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Icon;
