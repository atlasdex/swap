import { Flex } from "components/Box";
import styled from "styled-components";
import { TogggleSwitchInterface } from "./types";

const StyledToggleSwitch = styled.div`
  &.ToggleSwitch {
    background: "inherit";
    border: 3px solid
      ${(props) => (props.theme.isDark ? props.theme.colors.white : "#595959")};
    height: 2em;
    width: 3em;
    border-radius: 2em;

    .knob {
      position: relative;
      width: 1em;
      height: 1em;
      top: 0.3em;
      background: ${(props) =>
        props.theme.isDark ? props.theme.colors.white : "#595959"};
      border-radius: 50%;
      left: 0.4em;
      -webkit-transition: left 0.3s ease-out;
      transition: left 0.3s ease-out;
      &.active {
        left: 1.3em;
      }
    }
  }
`;
const ToggleSwitch: React.FC<TogggleSwitchInterface> = ({ onClick, value }) => {
  return (
    <StyledToggleSwitch className={"ToggleSwitch"} onClick={onClick}>
      <Flex className={value ? "knob active" : "knob"}></Flex>
    </StyledToggleSwitch>
  );
};
export default ToggleSwitch;
