import { Box, Flex } from "components/Box";
import Button from "components/Button";
import {
  AdvancedSetting,
  ColorAdvannceSetting,
  ColorRefresh,
  RefreshIcon,
} from "components/Svg";
import useTheme from "hooks/useTheme";
import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import styled from "styled-components";
import { useModal } from "widgets/Modal";
import SettingSlippage from "../modal/SettingSlippage";


export const BarComponent = (props) => {
  const { onRefreshClick,refreshOnce } = props;
  const [refreshTimer, setRefreshTimer] = useState(100);
  const { theme } = useTheme();
  const { isDark } = theme;

  useEffect(() => {
    var seconds = ((2 * 1000) / 100);
    const interval = setTimeout(() => {
      refreshOnce == false && setRefreshTimer(refreshTimer - 5)
      if (refreshTimer < 0) {
       
        onRefreshClick();
        setRefreshTimer(100)
      }
    }, 300);
    return () => { 
      clearTimeout(interval)
    };
  });

  
  const [onPresentCallback, onDismiss] = useModal(
    <SettingSlippage
      onDismiss={() => {
        onDismiss();
      }}
    />
    ,
    false
  );


  return (
    <StyledbarButton>
      <Flex className="btns-div d-flex mt-3 mt-md-0">
        <Box
          className={"box-border d-flex justify-content-center"}
        >
          <CircularProgressbar value={refreshTimer} />
        </Box>

        <Box
          onClick={() => {
            setRefreshTimer(100);
            onRefreshClick();
          }}
          className={"box-border d-flex justify-content-center"}
        >

          {isDark ? <RefreshIcon /> : <ColorRefresh />}
        </Box>
        <Box
          onClick={() => {
            onPresentCallback();
          }}

          className={"box-border d-flex justify-content-center"}
        >
          {
            isDark ? (
              <AdvancedSetting />
            ) : (
              <ColorAdvannceSetting />
            )
          }
        </Box>


      </Flex>
    </StyledbarButton>
  );
};

const StyledbarButton = styled.section`
.box-border{ 
  padding: 8px; 
  background: #261A83; 
  width: 45px;
  height: 45px;
  margin: 2px;
  border-radius: 10px;
}
`


