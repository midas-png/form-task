import styled from 'styled-components';

export const TextfieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TextfieldLabel = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.text.secondary};
`;

export const TextfieldComponent = styled.input`
  padding: 10px 16px;
  border: ${({ theme }) => `2px solid ${theme.secondary}`};
  border-radius: 10px;
  color: ${({ theme }) => theme.text.primary};
  background: transparent;
  transition: border 0.2s ease-in-out;
  outline: none;

  &:focus {
    border: ${({ theme }) => `2px solid ${theme.tertiary}`};
  }

  ${({ theme, error }) =>
    error &&
    `
    border-color: ${theme.error};
  `}
`;

export const TextfieldError = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.error};
`;
