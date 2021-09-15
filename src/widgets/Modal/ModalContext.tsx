import React, { createContext, useState } from "react";
import styled from "styled-components";
import Overlay from "../../components/Overlay/Overlay";
import { Handler } from "./types";
import { ModalCloseButton } from "./styles";
import { Flex } from "components/Box";
import { IoMdCloseCircle } from "react-icons/io";
interface ModalsContext {
  onPresent: (node: React.ReactNode, key?: string) => void;
  onDismiss: Handler;
  setCloseOnOverlayClick: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndices.modal - 1};
`;

const ModalBodyWrapper = styled.div`
  border-radius: 10px;
  position: relative;
  padding: 30px 98px;
  padding-top : 50px;
  z-index: ${({ theme }) => theme.zIndices.modal + 1};
  background: ${(props) =>
    props.theme.isDark
      ? props.theme.gradients.marketCard
      : props.theme.gradients.whiteGrayGradient};
  .close-icon {
    font-size: 30px;
    position: absolute;
    color: white;
    top: 5px;
    right: 20px;
    color: white;
    z-index: ${({ theme }) => theme.zIndices.modal + 1};
  }
`;

export const Context = createContext<ModalsContext>({
  onPresent: () => null,
  onDismiss: () => null,
  setCloseOnOverlayClick: () => true,
});

const ModalProvider: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>();
  const [closeOnOverlayClick, setCloseOnOverlayClick] = useState(true);

  const handlePresent = (node: React.ReactNode) => {
    setModalNode(node);
    setIsOpen(true);
  };

  const handleDismiss = () => {
    setModalNode(undefined);
    setIsOpen(false);
  };

  const handleOverlayDismiss = () => {
    if (closeOnOverlayClick) {
      handleDismiss();
    }
  };

  return (
    <Context.Provider
      value={{
        onPresent: handlePresent,
        onDismiss: handleDismiss,
        setCloseOnOverlayClick,
      }}
    >
      {isOpen && (
        <ModalWrapper>
          <Overlay show onClick={handleOverlayDismiss} />
          <ModalBodyWrapper>
            <Flex onClick={handleDismiss} className={"close-icon"}>
              <IoMdCloseCircle />
            </Flex>

            {React.isValidElement(modalNode) &&
              React.cloneElement(modalNode)}
          </ModalBodyWrapper>
        </ModalWrapper>
      )}
      {children}
    </Context.Provider>
  );
};

export default ModalProvider;
