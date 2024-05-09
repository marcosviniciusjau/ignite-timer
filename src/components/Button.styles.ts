import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger' | 'success';
interface ButtonContainerProps{
    variant: ButtonVariant
}

export const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    success: 'green',
    danger: 'red'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`

    width: 100px;
    height: 50px;

    background-color: ${props => props.theme['green-500']};
    color: ${props => props.theme.white};

    border: 0;
    border-radius: 8px;

    cursor: pointer;

    &:hover {
        background-color: ${props => props.theme['green-700']};
    }

    &[disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

`