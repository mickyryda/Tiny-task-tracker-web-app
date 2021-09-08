import * as React from "react";
import styled from "styled-components";

export enum Kinds {
  Primary = "primary",
  Outline = "outline"
}

type ButtonProps = {
  children: React.ReactNode | React.ReactNodeArray;
  kind: Kinds;
};

const StyledButton = styled.button`
  border: transparent solid ${props => props.theme.borderWidth};
  border-radius: ${props => props.theme.borderRadius};
  display: block;
  font-size: ${props => props.theme.fontRegular};
  margin: ${props => props.theme.spacingMedium} 0;
  padding: ${props => props.theme.spacingText} ${props => props.theme.spacingRegular};
  position: relative;

  &.primary {
    background-color: ${props => props.theme.brandPrimary};
    border-color: transparent;
    color: ${props => props.theme.brandWhite};

    &:hover,
    &:focus {
      background-color: lighten(${props => props.theme.brandPrimary}, 20%);

      &::after {
        content: '';
        display: block;
        position: absolute;
        top: -3px;
        bottom: -3px;
        left: -3px;
        right: -3px;
        border: ${props => props.theme.brandInteraction} solid ${props => props.theme.borderWidth};
        border-radius: ${props => props.theme.borderRadius} * 2;
      }

      outline: none;
    }
  }

  &.outline {
    background-color: ${props => props.theme.brandWhite};
    border-color: ${props => props.theme.brandBlack};
    color: ${props => props.theme.brandBlack};

    &:hover {
      background-color: ${props => props.theme.brandBlack};
      color: ${props => props.theme.brandWhite};
    }
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus {
    background-color: ${props => props.theme.silver};

    &:after {
      border: none;
    }
  }
`


const Button = ({ kind, children }: ButtonProps) => {
  return (
    <StyledButton
      type="submit"
      className={`${kind || Kinds.Primary}`}
    >
      {children}
    </StyledButton>
  );
};

export default Button;