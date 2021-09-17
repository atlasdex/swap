import styled from "styled-components";
import { DivPropsInterface} from "./types";

const FlexWapper = styled.div``;

const Flex: React.FC<DivPropsInterface> = ({children, ...props}) => {
  const { className, onClick } = props

 
  return (
      <FlexWapper
          className={className }
          onClick = {onClick}  
      >
          {children}
      </FlexWapper>
  )
}

export default Flex;
