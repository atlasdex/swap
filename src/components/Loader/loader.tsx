import React from "react";
import { ImSpinner9 } from "react-icons/im";
import styled from "styled-components";
import { IProps } from "./types";

const StyledLoader = styled.div`
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  .spinner {
    animation: spin 2s linear infinite;
    -webkit-animation: spin 2s linear infinite;
  }
`;

const Loader = (props: IProps) => {
  const laoderStyle = {
    color: props.color ? props.color : "#fff",
    fontSize: props.size ? props.size : "1.8rem",
    marginRight: props.margin ? props.margin : "0.01rem",
  };

  return (
    <StyledLoader>
      <ImSpinner9 className={`spinner`} style={laoderStyle} />
    </StyledLoader>
  );
};

export default Loader;
