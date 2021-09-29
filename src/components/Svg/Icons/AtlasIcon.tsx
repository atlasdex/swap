import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 34 33" {...props}>
      <ellipse
        cx="17.0925"
        cy="16.2968"
        rx="16.4618"
        ry="16.0265"
        fill="white"
      />
      <path
        d="M24.9824 22.1372H21.8925L20.4798 19.4766L17.1008 13.0907L13.7245 19.4766L12.3119 22.1372H9.21924L10.6319 19.4766L17.1008 7.2384L23.5697 19.4766L24.9824 22.1372Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M17.036 23.9618C18.0647 23.9618 18.8987 23.1578 18.8987 22.1661C18.8987 21.1744 18.0647 20.3705 17.036 20.3705C16.0073 20.3705 15.1733 21.1744 15.1733 22.1661C15.1733 23.1578 16.0073 23.9618 17.036 23.9618Z"
        fill="#BA06FB"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="14.1668"
          y1="14.6875"
          x2="19.9062"
          y2="14.6875"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A69C" />
          <stop offset="0.8384" stopColor="#BA06FB" />
        </linearGradient>
      </defs>{" "}
    </Svg>
  );
};

export default Icon;
