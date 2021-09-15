import React from "react";
import SolanaSvg from "assets/images/Solana-Icon.svg";
import Image from "components/Image";
import { ImageProps } from "./types";

export const SolanaIcon: React.FC<ImageProps> = (props) => {
  const { width, height, classes } = props;

  return (
    <Image
      src={SolanaSvg}
      width={width}
      height={height}
      classes={classes}
    />
  );
};
