import React from "react";
import Svg from "../../Svg";
import { SvgProps } from "../../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <circle cx="16" cy="16" r="16" fill="white" fill-opacity="0.1" />
      <path d="M18.2308 24.5385V15.5385V24.5385Z" fill="white" />
      <path
        d="M18.2308 24.5385V15.5385M18.2308 24.5385L21.7693 21M18.2308 24.5385L14.6923 21"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path d="M13.5385 8L13.5385 17L13.5385 8Z" fill="white" />
      <path
        d="M13.5385 8L13.5385 17M13.5385 8L10 11.5385M13.5385 8L17.077 11.5385"
        stroke="white"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Icon;
