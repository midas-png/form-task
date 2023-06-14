import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const ButtonComponent = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  height: 44px;
  border-radius: 10px;
  border: none;
  color: ${({ theme }) => theme.text.primary};
  background: ${({ theme }) => theme.tertiary};
  transition: background 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.selected};
  }
`;

export const Loader = styled.div`
  border: ${({ theme }) => `3px solid ${theme.text.tertiary}0001a`};
  border-top: ${({ theme }) => `3px solid ${theme.text.tertiary}`};
  border-radius: 10px;
  width: 20px;
  height: 20px;
  animation: ${rotate} 1s linear infinite;
`;
