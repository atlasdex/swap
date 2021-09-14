import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 26 31" {...props}>
      <path
        d="M19.125 1.35187L24.219 6.44582L19.125 11.5398"
        stroke="white"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.2959 14.0868V11.5398C1.2959 10.1888 1.83258 8.89315 2.78788 7.93785C3.74318 6.98254 5.03885 6.44586 6.38985 6.44586H24.2187"
        stroke="white"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.38985 29.3687L1.2959 24.2747L6.38985 19.1808"
        stroke="white"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M24.2187 16.6337V19.1806C24.2187 20.5316 23.682 21.8273 22.7267 22.7826C21.7714 23.7379 20.4757 24.2746 19.1247 24.2746H1.2959"
        stroke="white"
        stroke-width="1.78846"
        stroke-linecap="round"
        stroke-linejoin="round"
      />{" "}
    </Svg>
  );
};

export default Icon;
