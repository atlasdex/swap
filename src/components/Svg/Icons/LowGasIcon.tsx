import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 42 42" {...props}>
      <circle cx="20.7866" cy="20.7866" r="20.7866" fill="#BA06FB" />
      <path
        d="M20.5687 31.1153L25.6668 26.0172C26.1111 25.5728 26.1111 24.8526 25.6668 24.4082C25.2225 23.9639 24.5022 23.9639 24.0579 24.4082L20.9018 27.5645L20.9018 12.1376C20.9018 11.5093 20.3926 11 19.7642 11C19.1359 11 18.6266 11.5093 18.6266 12.1376L18.6266 27.5645L15.4704 24.4082C15.0261 23.9639 14.3059 23.9639 13.8616 24.4082C13.6394 24.6304 13.5284 24.9215 13.5284 25.2126C13.5284 25.5037 13.6395 25.7948 13.8616 26.0171L18.9597 31.1152C19.4042 31.5596 20.1245 31.5596 20.5687 31.1153Z"
        fill="white"
      />{" "}
    </Svg>
  );
};

export default Icon;
