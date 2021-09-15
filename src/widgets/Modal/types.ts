import { BoxProps } from "../../components/Box";

export interface ModalTheme {
  background: string;
}

export type Handler = () => void;

export interface InjectedProps {
  onDismiss?: Handler;
}

export interface ModalProps extends InjectedProps, BoxProps {
  show?: boolean;
  title: string;
  hideCloseButton?: boolean;
  onBack?: () => void;
  onClick?: () => void;
  backdrop?: "static" | true | false;
  centered?: boolean;
  bodyPadding?: string;
  headerBackground?: string;
  minWidth?: string;
}
