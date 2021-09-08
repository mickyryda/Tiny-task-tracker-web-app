import * as React from "react";
import styled from "styled-components";

type InputProps = {
    id: string;
    label: string;
};

const StyledInputContainer = styled.div`
  margin: 1rem 0;
`

const Input = ({ id, label }: InputProps) => {
    return (
        <StyledInputContainer>
            <label>{label}</label>
            <input id={id} name={id} type="text" />
        </StyledInputContainer>
    );
};

export default Input;