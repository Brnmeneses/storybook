import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  border: 0;
  padding: 8px 14px;
  transition: 0.3s;
  ${({ theme, variant }) => {
    return {
      backgroundColor: theme.colors[variant].main,
      color: theme.colors[variant].text
    };
  }}
`;

interface ButtonProps {
  /** Teste de documentacao variant*/
  variant?: 'primary' | 'accent';
  disable?: boolean;
  /** Teste de documentacao onClick*/
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};

Button.defaultProps = {
  variant: 'primary',
  disable: false
};

export default Button;
