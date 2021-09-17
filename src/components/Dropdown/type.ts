import { IToken } from "interfaces/IToken";

export interface DropdownBoxProps {
    handleTokenChange?: (select:IToken) => void;
    classes?: string;
    options?: any;
    size?: number;
    weight?: number;
    color?: string;
    selectedToken?: IToken;

}
