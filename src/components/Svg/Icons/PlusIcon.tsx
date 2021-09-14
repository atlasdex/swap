import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 28 28" {...props}>
      <path
        d="M14.0601 26.7114C21.0934 26.7114 26.795 21.0097 26.795 13.9765C26.795 6.94318 21.0934 1.24158 14.0601 1.24158C7.0268 1.24158 1.3252 6.94318 1.3252 13.9765C1.3252 21.0097 7.0268 26.7114 14.0601 26.7114Z"
        stroke="white"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.0601 8.88245V19.0704"
        stroke="white"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8.96631 13.9764H19.1542"
        stroke="white"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </Svg>
  );
};

export default Icon;
