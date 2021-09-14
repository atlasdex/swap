import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path
        d="M14.2229 26.7114C21.2562 26.7114 26.9578 21.0097 26.9578 13.9765C26.9578 6.94318 21.2562 1.24158 14.2229 1.24158C7.18964 1.24158 1.48804 6.94318 1.48804 13.9765C1.48804 21.0097 7.18964 26.7114 14.2229 26.7114Z"
        stroke="white"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.2224 6.33557V13.9765L19.3164 16.5235"
        stroke="white"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </Svg>
  );
};

export default Icon;
