import React from 'react'
import styled from 'styled-components'

export interface InputProps {
    handleChange?: (value) => void,
    placeholder?: string,
    icon?: React.ReactNode,
    value?: string,
    size?: number,
    weight?: number,
    classes?: string,
    disabled?  : boolean
    type? : string
}

interface StyledInputProps {
    size?: number,
    weight?: number,
}

const Input: React.FC<InputProps> = ({
    icon,
    handleChange,
    placeholder,
    value, size,
    classes, weight, disabled , type
}) => {
    return (
        <StyledInputWrapper>
            {!!icon && icon}
            <StyledInput type={type} placeholder={placeholder} value={value} onChange={(e) => {
                handleChange(e.target.value)
            }} className={classes} size={size} weight={weight} disabled={disabled} />
            {!!icon && icon}
        </StyledInputWrapper>
    )
}

const StyledInputWrapper = styled.div`
  align-items: center;
  background-color: inherit;
  border-radius: 12px;

`

const StyledInput = styled.input<StyledInputProps>`
  background: inherit;
  border: 0;
  color: ${props => props.theme.isDark ? props.theme.colors.white : props.theme.colors.primary};
  font-size : ${(props) => props.size ? `${props.size}px` : `${props.theme.fonts['fontSize15']}px`};
  font-weight :  ${(props) => props.weight ? props.weight : `normal`};
  flex: 1;
  margin: 0;
  padding: 0;
  outline: none;
  width :100%;
`

export default Input