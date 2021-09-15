import React from "react";
import {
  ModalBody,
  ModalHeader,
  ModalTitle,
  ModalContainer,
  ModalCloseButton,
  ModalBackButton,
} from "./styles";
import { ModalProps } from "./types";

const ModalComponent: React.FC<ModalProps> = ({
  title,
  onDismiss,
  onBack,
  children,
  hideCloseButton = false,
  bodyPadding = "24px",
  headerBackground = "transparent",
  minWidth = "320px",
  ...props
}) => {
  return (
      <ModalContainer minWidth={minWidth} {...props}>
        <ModalHeader background={headerBackground}>
          <ModalTitle>
            {onBack && <ModalBackButton onBack={onBack} />}
            <h3>{title}</h3>
          </ModalTitle>
          {!hideCloseButton && <ModalCloseButton onDismiss={onDismiss} />}
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
      </ModalContainer>
  );
};
export default ModalComponent;
