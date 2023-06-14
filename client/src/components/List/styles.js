import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: auto;
`;

export const DataWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

export const DataContent = styled.span`
  color: ${({ theme }) => theme.text.primary};
`;
