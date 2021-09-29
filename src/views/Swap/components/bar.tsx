import { Flex } from "components/Box";
import Button from "components/Button";
import {
  AdvancedSetting,
  ColorAdvannceSetting,
  ColorRefresh,
  RefreshIcon,
} from "components/Svg";
import useTheme from "hooks/useTheme";
import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

export const BarComponent = (props) => {
  const { onRefreshClick, refreshTimer } = props;
  const { theme } = useTheme();
  const { isDark } = theme;

  return (
    <Flex className="btns-div d-flex mt-3 mt-md-0">
      <Button
        classes={"btn-box-padding d-flex justify-content-center"}
        width={"32px"}
        height={"32px"}
        icon={<CircularProgressbar value={refreshTimer} />}
      />

      <Button
        onClick={() => {
          onRefreshClick();
        }}
        width={"32px"}
        height={"32px"}
        icon={isDark ? <RefreshIcon width={13} /> : <ColorRefresh width={18} />}
        classes={"btn-box-padding d-flex justify-content-center"}
      />
      <Button
        onClick={() => {
          // setRefresh(!isRefresh)
        }}
        width={"32px"}
        height={"32px"}
        icon={
          isDark ? (
            <AdvancedSetting width={13} />
          ) : (
            <ColorAdvannceSetting width={18} />
          )
        }
        classes={"btn-box-padding d-flex justify-content-center"}
      />
    </Flex>
  );
};
